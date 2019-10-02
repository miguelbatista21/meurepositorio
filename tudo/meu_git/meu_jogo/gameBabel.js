//cria o canvas
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 512; //largura
canvas.height = 480; //altura
document.body.appendChild(canvas);

//IMAGEM DE FUNDO
let bgReady = false;
const bgImage = new Image();
bgImage.onload = function() {
  bgReady = true;
};
bgImage.src = "imagens/background.png";

// Imagem do herói
let heroReady = false;
const heroImage = new Image();
heroImage.onload = function() {
  heroReady = true;
};
heroImage.src = "imagens/hero.png";

//IMAGEM DO MONSTRO
let monsterReady = false;
const monsterImage = new Image();
monsterImage.onload = function() {
  monsterReady = true;
};
monsterImage.src = "imagens/monster.png";

//objetos do jogo
const hero = {
  speed: 500 //<--movimento em pixels por segundo
};
const monster = {};
let monstersCaught = 0;

//////controles do teclado
const keysDown = {};
window.addEventListener(
  "keydown",
  function(e) {
    console.log(e);
    keysDown[e.keyCode] = true;
  },
  false
);

window.addEventListener(
  "keyup",
  function(e) {
    delete keysDown[e.keyCode];
  },
  false
);

//RESETA O JOGO QUANDO  O JOGADOR PEGA O MONSTRO
const reset = function() {
  hero.x = canvas.width / 2;
  hero.y = canvas.height / 2;
  //POSICIONA O MONSTRO RANDOMICAMENTE NA TELA
  monster.x = 32 + Math.random() * (canvas.width - 64);
  monster.x = 32 + Math.random() * (canvas.height - 64);
};

//ATUALIZA OS OBJETOS DO JOGO
const update = function(modifier) {
  if (38 in keysDown) {
    //precionando a seta pra cima
    if (hero.y > 0) hero.y -= hero.speed * modifier;
  }
  if (40 in keysDown) {
    //pressionando a seta para baixo
    hero.y += hero.speed * modifier;
  }
  if (37 in keysDown) {
    //pressionando a seta para a esquerda
    hero.x -= hero.speed * modifier;
  }
  if (39 in keysDown) {
    //pressionando a seta para a direita
    hero.x += hero.speed * modifier;
  }
  console.log(hero);
  // os personagens se encostaram?
  if (
    hero.x <= monster.x + 32 &&
    monster.x <= hero.x + 32 &&
    hero.y <= monster.y + 32 &&
    monster.x <= hero.y + 32
  ) {
    ++monstersCaught;
    reset();
  }
};

//RENDERIZAR TUDO
const render = function() {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0);
  }
  if (heroReady) {
    ctx.drawImage(heroImage, hero.x, hero.y);
  }
  if (monsterReady) {
    ctx.drawImage(monsterImage, monster.x, monster.y);
  }

  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.font + "24px Helvetica";
  ctx.textAling = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Monstros pegos: " + monstersCaught, 32, 32);
};

//controla o loo do jogo

const main = function() {
  const now = Date.now(); // 32000
  const delta = now - then; // 2000
  update(delta / 1000); // 2000 / 1000 = 2
  render();
  then = now; // 32000
  //Exeuta isso o mais breve possível
  requestAnimationFrame(main);
};
// Suporte cross-browser para requestAnimation
const w = window;
const requestAnimationFrame =
  w.requestAnimationFrame ||
  w.webkitRequestAnimationFrame ||
  w.msRequestAnimationFrame ||
  w.mozRequestAnimationFrame;

let then = Date.now(); // 30000
reset();
main();
let respawDoMonstro = window.setInterval(respaw, 1000);
function respaw() {
  monster.x = 32 + Math.random() * (canvas.width - 64);
  monster.y = 32 + Math.random() * (canvas.width - 64);
}
