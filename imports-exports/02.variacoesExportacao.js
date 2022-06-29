// module.exports.meuValor = 10
// module.exports.minhaFuncao = (a, b) => {
//   return a + b
// }

// // Alternativa 1
const meuValor = 10
const maisUmValor = 11
const valorASerRenomeado = 12
const minhaFuncao = (a, b) => {
  return a + b
}

module.exports = { 
  meuValor,
  maisUmValor,
  renomeado: valorASerRenomeado,
  minhaFuncao,
}  

// // Alternativa 2
// module.exports.meuValor = 10
// module.exports.maisUmValor = 11
// module.exports.renomeado = 12
// module.exports.minhaFuncao = (a, b) => {
//   return a + b
// }

// // Alternativa 3
// module.exports = { 
//   meuValor: 10,
//   maisUmValor: 11,
//   renomeado: 12,
//   minhaFuncao: (a, b) => {
//     return a + b
//   },
// } 
