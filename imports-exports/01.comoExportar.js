const meuValorAExportar = 10

const minhaFuncaoAExportar = (a, b) => {
  return a + b
}

// module keyword: https://nodejs.org/api/modules.html#the-module-object
module.exports = {
  meuValorAExportar: meuValorAExportar,
  minhaFuncaoAExportar: minhaFuncaoAExportar,
}
