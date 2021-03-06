#ifndef GPROJ_ACTORS_H_
#define GPROJ_ACTORS_H_
#include "types.h"




extern int actors_create(const struct rectf* scr);

extern void actors_anim_set(const int actor_id,
                            uint32_t clk,
                            const struct actor_frame* frames,
                            int cnt, int flags);

extern int actors_anim_get_flags(int actor_id);
extern void actors_anim_set_flags(int actor_id, int flags);

extern void actors_mov_set(int actor_id, float velx, float vely);

extern void actors_update(uint32_t now, float dt);


#endif
