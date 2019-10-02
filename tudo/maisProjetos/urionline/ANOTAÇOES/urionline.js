//1001 - Extremamente Básico

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const a = Number(lines[0]);
const b = Number(lines[1]);

console.log("X =", a + b);
//------------------------------------------------------------------

//1003 - Soma Simples

const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split("\n");

const entrada1 = Number(lines[0]);
const entrada2 = Number(lines[1]);

var x = entrada1 + entrada2;

console.log("SOMA = " + x);

//---------------------------------------------------------------

//1059 - Números Pares

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

for (var i = 2; i < 101; i++) {
  if (i % 2 === 0) console.log(i);
}
//--------------------------------------------------------------

//1007 - Diferença
const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split("\n");

const entrada1 = Number(lines[0]);
const entrada2 = Number(lines[1]);
const entrada3 = Number(lines[2]);
const entrada4 = Number(lines[3]);

var x = entrada1 * entrada2 - entrada3 * entrada4;

console.log("DIFERENCA = " + x);

//-------------------------------------------------------------

//1004 - Produto Simples

const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split("\n");

const entrada1 = Number(lines[0]);
const entrada2 = Number(lines[1]);

var x = entrada1 * entrada2;

console.log("PROD = " + x);

//-----------------------------------------------------------

//1010 - Cálculo Simples

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");
var line1 = lines[0].split(" ");
var line2 = lines[1].split(" ");

// tenta pgar cada umdeles
// e colocar em variaveis

var a1 = line1[0];
var b1 = line1[1];
var c1 = line1[2];

var a2 = line2[0];
var b2 = line2[1];
var c2 = line2[2];

const soma = c1 * b1 + c2 * b2;
console.log("VALOR A PAGAR: R$ " + soma.toFixed(2));

//assinado= Miguel

//--------------------------------------------------------

//1052 - Mês

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var nums = input.split(" ");

const cod = Number(nums[0]);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

console.log(months[cod - 1]);

//-----------------------------------------------------

//1050 - DDD

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");
/*
61 Brasilia
71 Salvadr
11 Sao paulo
21 Rio de Janeiro
32 Juiz de Fora
19 Campinas
27 Vitoria
31 Belo Horizonte
*/
var num = Number(lines[0]);
var ddd = "DDD nao cadastrado";

if (num == 61) {
  ddd = "Brasilia";
} else if (num == 71) {
  ddd = "Salvador";
} else if (num == 11) {
  ddd = "Sao Paulo";
} else if (num == 21) {
  ddd = "Rio de Janeiro";
} else if (num == 32) {
  ddd = "Juiz de Fora";
} else if (num == 19) {
  ddd = "Campinas";
} else if (num == 27) {
  ddd = "Vitoria";
} else if (num == 31) {
  ddd = "Belo Horizonte";
}

console.log(ddd);

//----------------------------------------------------

//1038 - Lanche

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var nums = input.split(" ");
/*
1 - cachorro quente R$ 4.00
2 - X-salada        R$ 4.50 
3 - X-bancon        R$ 5.00
4 - Torrada simples R$ 2.00
5 - Refrigerante    RS 1.50
3 2     Total: R$ 10.00

*/
var cod = Number(nums[0]);
var qnt = Number(nums[1]);
var preco = 0;

if (cod == 1) {
  preco = 4.0;
} else if (cod == 2) {
  preco = 4.5;
} else if (cod == 3) {
  preco = 5.0;
} else if (cod == 4) {
  preco = 2.0;
} else if (cod == 5) {
  preco = 1.5;
}

console.log("Total: R$ " + (preco * qnt).toFixed(2));

//-------------------------------------------------------

//1009 - Salário com Bônus

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const funcionario = String(lines[0]);
const salario = Number(lines[1]);
const vendas = Number(lines[2]);

const bonus = vendas * 0.15;
const result = bonus + salario;

console.log("TOTAL = R$", result.toFixed(2));

//--------------------------------------------------------------------

//1020 - Idade em Dias

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var entrada = lines[0];

var anos = Math.floor(entrada / 365);

var mes = Math.floor(entrada / 30) - anos * 12;

var dias = entrada - anos * 365 - mes * 30; // depois da virgula

anos = Math.abs(anos);
mes = Math.abs(mes);
dias = Math.abs(dias);

console.log(anos + " ano(s)");
console.log(mes + " mes(es)");
console.log(dias + " dia(s)");

//------------------------------------------------------------

//1008 - Salário

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const funcionario = Number(lines[0]);
const horas = Number(lines[1]);
const salario = Number(lines[2]);

const result = horas * salario;

console.log("NUMBER =", funcionario);
console.log("SALARY = U$", result.toFixed(2));

//-----------------------------------------------------------

//1007 - Diferença

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const na = Number(lines[0]);
const nb = Number(lines[1]);
const nc = Number(lines[2]);
const nd = Number(lines[3]);

const result = na * nb - nc * nd;

console.log("DIFERENCA =", result);

//---------------------------------------------------------

//1005 - Média 1

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const p1 = 3.5;
const p2 = 7.5;

const n1 = Number(lines[0]);
const n2 = Number(lines[1]);

const result = (n1 * p1 + n2 * p2) / (p1 + p2);

console.log("MEDIA =", result.toFixed(5));

//---------------------------------------------------------

//1003 - Soma Simples

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const a = Number(lines[0]);
const b = Number(lines[1]);

console.log("SOMA =", a + b);

//----------------------------------------------------------

//1002 - Área do Círculo

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const n = 3.14159;
const raio = lines[0];

const area = n * (raio * raio);

console.log(`A=${area.toFixed(4)}`);

//--------------------------------------------------------
