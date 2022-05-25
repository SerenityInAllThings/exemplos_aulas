const minhaFuncaoInicial = () => {
  // Qualquer lógica antes
  minhaSegundaFuncao();
  // Qualquer lógica depois
};

const minhaSegundaFuncao = () => {
  // Qualquer lógica antes
  minhaTerceiraFuncao();
  // Qualquer lógica depois
};

const minhaTerceiraFuncao = () => {
  throw "meu erro custom";
  console.log("oi");
};

try {
  minhaFuncaoInicial();
} catch (err) {
  console.error(err);
}
