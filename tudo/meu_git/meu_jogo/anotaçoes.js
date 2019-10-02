// APRENDA JAVASCRIPT (ES6) CRIANDO UM JOGO #2
function writeline(...args) {
  document.write(...args);
  document.write("<br>");
}

writeline("vai");
writeline("tomar");
writeline("banho");

var a;
document.write(a);
a = 1;
document.write(a);
//undefined1

//NUMEROS

let num = 1.123123;

document.write(num);

// 1.123123

let num = 1.123123;
let num2 = num.toFixed();
document.write(num2);

//1

let num = 1.123123;
let num2 = num.toFixed(2);
document.write(num2);

//1.12

let num = 1.123123;
let num2 = num.toFixed(2);
document.write(typeof num2);

//string

let num1 = 2;
let num2 = "ab";
document.write(num1 / num2);

//NaN

let num1 = 2;
let num2 = "3";
document.write(num1 + num2);

//23

let num1 = 2;
let num2 = "3";
document.write(num1 + Number(num2));

//5

let num1 = 2;
let num2 = "ab"; //<--
document.write(num1 + Number(num2));

//NaN

let num1 = 2;
let num2 = "3";
document.write(num1 + -num2);

//-1

//-------------------------------------------------------
//como utilizar o texto em JS
let nome = "Estevan";
document.write(nome + "<br>");

let nome1 = "Estevan ' ";
document.write(nome1 + "<br>");

//Estevan "Legal"
//Estevan '

var nome = "Estevan";
var snome = " Maito";
document.write(nome + snome);
//Estevan Maito

let nome = "Estevan";
let snome = " Maito";
let completo = nome + snome;
document.write(completo.legth + "<br>");
document.write(completo.charAt(1) + "<br>");
document.write(completo.substring(0, 4) + "<br>");
document.write(completo.toLowerCase() + "<br>");
document.write(completo.toUpperCase() + "<br>");

//13
//s
//Este
//estevan maito
//ESTEVAN MAITO

//fim do primeiro video.
//--------------------------------------------------------

//APRENDA JAVASCRIPT (ES6) CRIANDO UM JOGO #3

//boleanos:true false 0 , -0 ,[] ,{}, NaN, null, undefined, ''

console.log(1 == 1);
// expected output: true

console.log("12" == "1");
// expected output: false

console.log(1 === 1);
// expected output: true

console.log("1" === 1);
// expected output: false

/*1 == "1"
está sendo comparado o VALOR entre um numero e uma string
o VALOR é igual pq representam o mesmo valor  então é true
1 === "1"
está sendo comparado o VALOR e TIPO entre um numero e uma string
o valor é igual mas o tipo é diferente: resulta em false
*/

document.write(11 > 10 && (11 < 10) + "<br>");
document.write(5 > 10 || (11 < 10) + "<br>");
document.write(!(5 < 10) + "<br>");

//false
//false
//false

//OPERADOR TERNARIO

Document.write((1 > 2 ? " é o maior" : "é menor") + "<br>");

//ARRAYS

let lista = ["leite", "água", "banana"];
document.write(lista[1]);

//água

let lista = ["leite", "água", "banana"];
lista[1] = "panela";
document.write(lista);

//leite,panela,banana

let lista = ["leite", "água", "banana"];
lista.pop();
document.write(lista);

//leite,água

let lista = ["leite", "água", "banana"];
lista.shift();
document.write(lista);

//água,banana

let lista = ["leite", "água", "banana"];
lista.unshift("pedra");
document.write(lista);

//pedra,leite,água,banana

let lista = ["leite", "água", "banana"];
lista.push("pedra");
document.write(lista);

//leite,água,banana,pedra

let lista = ["leite", "água", "banana"];
lista.splice(1, 1);
document.write(lista);

//leite,banana

//LOOPS

let i = 0;

while (i <= 10) {
  document.write(i + "<br>");
  i = i + 1; // ou i ++;
}
//0 1 2 3 4 5 6 7 8 9 10

for (let i = 0; i <= 10; i++) {
  document.write(i + "<br>");
}

//0 1 2 3 4 5 6 7 8 9 10

var lista = ["leite", "água", "banana"];

for (let i = 0; i < lista.length; i++) {
  document.write(i + "<br>");
}

//0 1 2

var lista = ["leite", "água", "banana"];

for (let i = 0; i < lista.length; i++) {
  document.write(lista[i] + "<br>");
}

//leite,água,banana

if (3 === 3) {
  document.write("é igual!");
}

//é igual

let idade = 22;
if (idade === 22) {
  document.write("você tem 22 anos!");
} else if (idade >= 18) {
  document.write("maior de idade");
} else {
  document.write("menor de idade");
}

//você tem 22 anos!

let idade = 22;
if (idade === 22) {
  document.write("você tem 22 anos!");
} else if (idade >= 18) {
  document.write("maior de idade");
} else {
  document.write("menor de idade");
}

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  document.write(i + "<br>");
}

//você tem 22 anos!0
//1
//2

let idade = 22;
if (idade === 22) {
  document.write("você tem 22 anos!");
} else if (idade >= 18) {
  document.write("maior de idade");
} else {
  document.write("menor de idade");
}

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  document.write(i + "<br>");
}

//você tem 22 anos!0
//1
//2
//4
//5
//6
//7
//8
//9

let idade = 17;

switch (idade) {
  case 17:
    document.write("tem 17!" + "<br>");
  case 18:
    document.write("tem 18!" + "<br>");
    break;
  default:
    document.write("Não sei!" + "<br>");
    break;
}

//tem 17!
//tem 18!

//--------------------------------------------------------------

//APRENDA JAVASCRIPT (ES6) CRIANDO UM JOGO #4

//OBJETOS

let caneta = { //dessa forma 
  cor: "preto",
  marca: "BIC"
};

document.write(caneta.marca);
//BIC

let caneta = {};

caneta.cor = "azul";
caneta.marca = 'BIC';
document.write(caneta.marca);

//azul
//BIC

let caneta = {};

caneta['cor da caneta'] = 'faber';

document.write(caneta.marca;)
//-------------------------------

console.log(Math.max(2, 8, 12));

//--------------------------------
//FUNCOES ETC

let caneta = {
  cor: "preta",
  minhaCor: function() {
    return "Minha cor é " + this.cor;
  }
};
document.write(caneta.minhaCor());


// Minha cor é preta


function quadradoDe2 () {
  2*2;

  
}
document.write(quadradoDe2() + '<br>');

// undefined

function quadradoDe2(num)//<-- argumentos {
  return num * num;
}
document.write(quadradoDe2(3) //<--valores + "<br>");

// 9

let soma = function (num1, num2) {
    return num1 + num2;
}
document.write(soma(8, 12) + '<br>')

// 20

let quadrado = num => {
  return num * num;
}
document.write(quadrado(2) + '<br>');

//4
//fim do video 4
//---------------------------
//(ES6) CRIANDO UM JOGO #5 - O JOGO!
