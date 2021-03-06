#include <stdint.h>
#include <string.h>
#include <SDL2/SDL.h>
#include <SDL2/SDL_image.h>
#include <tmx.h>
#include "render.h"
#include "log.h"
#include "map.h"

extern SDL_Renderer* sdl_rend;
extern SDL_Texture* sdl_tex_bg;
extern SDL_Texture* sdl_tex_fg;
extern SDL_Texture* sdl_tex_actors;
extern SDL_Texture* sdl_tex_tileset;


static void draw_flipped_gid(const int32_t gid,
                             const SDL_Rect* const src,
                             const SDL_Rect* const dst)
{
	SDL_RendererFlip flips = SDL_FLIP_NONE;
	double degrees = 0;

	if (gid&TMX_FLIPPED_DIAGONALLY) {
		degrees = 90;
		flips |= SDL_FLIP_VERTICAL;
		if (gid&TMX_FLIPPED_VERTICALLY)
			flips |= SDL_FLIP_HORIZONTAL;
		if (gid&TMX_FLIPPED_HORIZONTALLY)
			flips &= ~SDL_FLIP_VERTICAL;
	} else {
		if (gid&TMX_FLIPPED_VERTICALLY)
			flips |= SDL_FLIP_VERTICAL;

		if (gid&TMX_FLIPPED_HORIZONTALLY)
			flips |= SDL_FLIP_HORIZONTAL;
	}

	SDL_RenderCopyEx(sdl_rend,
	                 sdl_tex_tileset,
	                 src, dst, degrees,
	                 NULL, flips);
}

static void draw_tile_layers(const int32_t* gids)
{
	SDL_Rect src, dst;
	for (int l = 0; l < 2; ++l) {
		for (int y = 0; y < GPROJ_Y_TILES; ++y) {
			for (int x = 0; x < GPROJ_X_TILES; ++x) {
				const int32_t gid = *gids++;
				if (gid == 0)
					continue;
				const int32_t id = (gid&TMX_FLIP_BITS_REMOVAL) - 1;

				src = (SDL_Rect) {
					.x = (id * GPROJ_TILE_WIDTH) % GPROJ_TILESET_WIDTH,
					.y = (id / (GPROJ_TILESET_WIDTH / GPROJ_TILE_WIDTH)) * GPROJ_TILE_WIDTH,
					.w = GPROJ_TILE_WIDTH,
					.h = GPROJ_TILE_HEIGHT
				};

				dst = (SDL_Rect) {
					.x = x * GPROJ_TILE_WIDTH,
					.y = y * GPROJ_TILE_HEIGHT,
					.w = GPROJ_TILE_WIDTH,
					.h = GPROJ_TILE_HEIGHT
				};

				if ((gid&(~TMX_FLIP_BITS_REMOVAL)) == 0x00)
					SDL_RenderCopy(sdl_rend, sdl_tex_tileset, &src, &dst);
				else
					draw_flipped_gid(gid, &src, &dst);
			}
		}
	}
}


void render_clear(const uint8_t flags)
{
	if (flags&RENDER_CLEAR_BKG) {
		SDL_SetRenderTarget(sdl_rend, sdl_tex_bg);
		SDL_SetRenderDrawColor(sdl_rend, 0x00, 0x00, 0x00, 0x00);
		SDL_RenderClear(sdl_rend);
	}

	if (flags&RENDER_CLEAR_FG) {
		SDL_SetRenderTarget(sdl_rend, sdl_tex_fg);
		SDL_SetRenderDrawColor(sdl_rend, 0x00, 0x00, 0x00, 0x00);
		SDL_RenderClear(sdl_rend);
	}

	if (flags&RENDER_CLEAR_ACTORS) {
		SDL_SetRenderTarget(sdl_rend, sdl_tex_actors);
		SDL_SetRenderDrawColor(sdl_rend, 0x00, 0x00, 0x00, 0x00);
		SDL_RenderClear(sdl_rend);
	}

	SDL_SetRenderTarget(sdl_rend, NULL);
}


void render_tile_layers(const int32_t* const gids)
{
	SDL_SetRenderTarget(sdl_rend, sdl_tex_bg);
	draw_tile_layers(gids);
	SDL_SetRenderTarget(sdl_rend, sdl_tex_fg);
	draw_tile_layers(gids + MAP_LAYER_FG * GPROJ_X_TILES * GPROJ_Y_TILES);
	SDL_SetRenderTarget(sdl_rend, NULL);
}

void render_update_tile_layers(const int32_t* const gids,
                               const int32_t** const gids_to_update,
                               const int update_len)
{
	SDL_Rect src, dst;
	for (int i = 0; i < update_len; ++i) {
		const int32_t* const gid_ptr = gids_to_update[i];
		const int32_t gid = *gid_ptr;

		if (gid == 0)
			continue;

		const int id = (gid&TMX_FLIP_BITS_REMOVAL) - 1;

		src = (SDL_Rect) {
			.x = (id * GPROJ_TILE_WIDTH) % GPROJ_TILESET_WIDTH,
			.y = (id / (GPROJ_TILESET_WIDTH / GPROJ_TILE_WIDTH)) * GPROJ_TILE_WIDTH,
			.w = 32,
			.h = 32
		};

		const uintptr_t layer_idx = (gid_ptr - gids) / (GPROJ_X_TILES * GPROJ_Y_TILES);
		const uintptr_t diff = (gid_ptr - gids) - (layer_idx * GPROJ_X_TILES * GPROJ_Y_TILES);
		if (layer_idx < MAP_LAYER_FG)
			SDL_SetRenderTarget(sdl_rend, sdl_tex_bg);
		else
			SDL_SetRenderTarget(sdl_rend, sdl_tex_fg);


		dst = (SDL_Rect) {
			.x = (diff % GPROJ_X_TILES) * GPROJ_TILE_WIDTH,
			.y = (diff / GPROJ_X_TILES) * GPROJ_TILE_HEIGHT,
			.w = 32,
			.h = 32
		};

		if ((layer_idx&0x01) == 0)
			SDL_RenderFillRect(sdl_rend, &dst);

		if ((gid&(~TMX_FLIP_BITS_REMOVAL)) == 0x00)
			SDL_RenderCopy(sdl_rend, sdl_tex_tileset, &src, &dst);
		else
			draw_flipped_gid(gid, &src, &dst);
	}

	SDL_SetRenderTarget(sdl_rend, NULL);
}

void render_ts(const struct recti* const srcs,
               const struct rectf* const dsts,
			   const struct actor_anim* anims,
               const int count)
{
	SDL_SetRenderTarget(sdl_rend, sdl_tex_actors);
	SDL_SetRenderDrawColor(sdl_rend, 0xFF, 0xFF, 0xFF, 0xFF);
	SDL_Rect scr, ts;
	for (int i = 0; i < count; ++i) {
		scr = (SDL_Rect) {
			.x = dsts[i].pos.x,
			.y = dsts[i].pos.y,
			.w = dsts[i].size.x,
			.h = dsts[i].size.y
		};
		ts = (SDL_Rect) {
			.x = srcs[i].pos.x,
			.y = srcs[i].pos.y,
			.w = srcs[i].size.x,
			.h = srcs[i].size.y
		};
		const int flags = anims[i].flags&ANIM_FLAG_FLIPH ? SDL_FLIP_HORIZONTAL : 0;
		SDL_RenderCopyEx(sdl_rend, sdl_tex_tileset, &ts, &scr, 0, NULL, flags);

	}


	SDL_SetRenderTarget(sdl_rend, NULL);
}

void render_present(void)
{
	SDL_RenderCopy(sdl_rend, sdl_tex_bg, NULL, NULL);
	SDL_RenderCopy(sdl_rend, sdl_tex_actors, NULL, NULL);
	SDL_RenderCopy(sdl_rend, sdl_tex_fg, NULL, NULL);
	SDL_RenderPresent(sdl_rend);
}
