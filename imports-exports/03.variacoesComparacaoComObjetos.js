const objetoQualquer = { }

objetoQualquer.meuValor = 11
objetoQualquer.minhaFuncao = (a, b) => {
  return a + b
}


objetoQualquer.meuValor = meuValor
console.log(JSON.stringify(objetoQualquer)) // {"meuValor":11}

const meuOutroValor = 12
const meuObjetoQualquer2 = { meuOutroValor }

console.log(JSON.stringify(meuObjetoQualquer2))
// {"meuOutroValor":12}