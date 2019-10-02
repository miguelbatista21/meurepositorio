function letraMaisRepetida(string) {
  var repetidas = {};
  for (let i = 0; i < string.length; i++) {
    const letra = string[i];
    if (repetidas[letra] === undefined) repetidas[letra] = 1;
    // primeira vez que encontramos essa letra
    else repetidas[letra] += 1; // letra está repetindo
  }

  return repetidas;
}

const resposta = letraMaisRepetida("abcdefg   acc");

console.log("RESPOSTA = ", resposta);
