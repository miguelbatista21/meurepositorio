"use strict";

//cria o canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 514;
canvas.height = 480;
document.body.appendChild(canvas);

//IMAGEM DE FUNDO
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function() {
  bgReady = true;
};
