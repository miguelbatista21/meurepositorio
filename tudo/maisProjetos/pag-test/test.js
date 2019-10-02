function stroc(campo, letra) {
  var ocorrencia = 0;
  campo = campo.value.split("");
  for (var i = 0; i < campo.length; i++) {
    if (campo[i] == letra.value) {
      ocorrencia++;
    }
  }
  return ocorrencia;
}
function ocorrencias() {
  alert(
    'A string "' +
      document.all["t2"].value +
      '"  foi encontrada ' +
      stroc(document.all["t1"], document.all["t2"]) +
      " vezes dentro de" +
      document.all["t1"].value
  );
}
