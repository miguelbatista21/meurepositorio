 
// Cria o canvas
const  canvas  =  documento . createElement ( ' tela ' );
const  ctx  =  tela . getContext ( ' 2d ' );
lona . largura  =  512 ;
lona . altura  =  480 ;
documento . corpo . appendChild (tela);

// Imagem de fundo
deixe bgReady =  false ;
const  bgImage  =  nova  imagem ();
bgImage . onload  =  function () {
  bgReady =  true ;
}
bgImage . src  =  ' images / background.png ' ;

// Imagem do herói
deixe heroReady =  false ;
const  heroImage  =  nova  imagem ();
heroImage . onload  =  function () {
  heroReady =  true ;
}
heroImage . src  =  ' images / hero.png ' ;

// Imagem do monstro
deixe monsterReady =  false ;
const  monsterImage  =  nova  imagem ();
monsterImage . onload  =  function () {
  monsterReady =  true ;
}
monsterImage . src  =  ' images / monster.png ' ;

// Objetos do jogo
 herói  const = {
  speed :  256  // movimento em pixels por segundo
};
 monstro  const = {};
deixe monsterCaught =  0 ;

// Controle do teclado
const  keysDown  = {};

janela . addEventListener ( ' keydown ' , função ( e ) {
  keysDown [ e . keyCode ] =  verdadeiro ;
} falso );

janela . addEventListener ( ' keyup ' , função ( e ) {
  excluir keysDown [ e . keyCode ];
} falso );

// Redefinir o jogo quando o jogador pega o monstro
const  reset  =  function () {
  herói . x  =  tela . largura  /  2 ;
  herói . y  =  tela . altura  /  2 ;

  // Posiciona o monstro aleatoriamente na tela
  monstro . x  =  32  + ( Math . random () * ( canvas . width  -  64 ));
  monstro . y  =  32  + ( Matemática . aleatória () * ( tela . altura  -  64 ));
};

// Atualiza os objetos do jogo
const  update  =  function ( modificador ) {
  if ( 38  in keysDown) { // Pressionando a seta para cima
    herói . y  - =  herói . modificador de velocidade  * ;
  }
  if ( 40  in keysDown) { // Pressionando a seta pra baixo
    herói . y  + =  herói . modificador de velocidade  * ;
  }
  if ( 37  in keysDown) { // Pressionando a seta pra esquerda
    herói . x  - =  herói . modificador de velocidade  * ;
  }
  if ( 39  in keysDown) { // Pressionando a seta pra direita
    herói . x  + =  herói . modificador de velocidade  * ;
  }
  // Os personagens se enconstaram?
  se (
    herói . x  <= ( monstro . x  +  32 )
    &&  monstro . x  <= ( herói . x  +  32 )
    &&  herói . y  <= ( monstro . y  +  32 )
    &&  monstro . y  <= ( herói . y  +  32 )
  ) {
    ++ monsterCaught;
    reset ();
  }

};

// Renderizar tudo
const  render  =  function () {
  if (bgReady) {
    ctx . drawImage (bgImage, 0 , 0 );
  }

  if (heroReady) {
    ctx . drawImage (heroImage, herói . x , herói . y );
  }

  if (monsterReady) {
    ctx . drawImage (monsterImage, monstro . x , monstro . y );
  }

  // Pontuação
  ctx . fillStyle  =  ' rgb (250, 250, 250) ' ;
  ctx . font  =  ' 24px Helvetica ' ;
  ctx . textAlign  =  ' left ' ;
  ctx . textBaseLine  =  ' top ' ;
  ctx . fillText ( ' Monstros pegos: '  + monsterCaught, 32 , 32 );
};

// Controle o loop do jogo
const  main  =  function () {
  const  now  =  Data . now ();
  const  delta  = agora - então;

  atualização (delta /  1000 );
  render ();

  então = agora;

  // Execute isso o mais breve possível
  requestAnimationFrame (main);
};

// Suporte ao navegador para requestAnimationFrame
const  w  =  janela ;
const  requestAnimationFrame  =  w . requestAnimationFrame  ||  w . webkitRequestAnimationFrame  ||  w . msRequestAnimationFrame  ||  w . mozRequestAnimationFrame ;

// Que comece o jogo!
deixe então =  Data . now ();
reset ();
main ();
deixe respawDoMonstro =  janela . setInterval (respaw, 1000 );
função  respaw () {
  monstro . x  =  32  + ( Math . random () * ( canvas . width  -  64 ));
  monstro . y  =  32  + ( Matemática . aleatória () * ( tela . altura  -  64 ));