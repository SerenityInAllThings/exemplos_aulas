const fazerCafe = () => {
  try {
    let agua = esquentarAgua();
    let coador = pegarCoador();
    let cafe = misturar(agua, coador);
    return cafe;
  } catch (err) {
    // Lidar com erros gerais de café não pronto
  }
};

const esquentarAgua = () => {
  try {
    return "agua quente";
  } catch (err) {
    // Lidar com problemas aquáticos
  }
};

const pegarCoador = () => {
  try {
    return "coador com café";
  } catch (err) {
    // Lidar com não encontrar coador
    // Ou não tem café
  }
};

const misturar = (agua, coador) => {
  try {
    return "café gostosinho";
  } catch (err) {
    // Lidar com erros de café ruim
  }
};
