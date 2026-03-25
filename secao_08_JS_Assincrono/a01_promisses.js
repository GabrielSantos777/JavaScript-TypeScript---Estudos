// PROMISSES
function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function espera(mensagem, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof mensagem !== "string") reject("BAD VALUE");
    setTimeout(() => {
      resolve(mensagem);
    }, tempo);
  });
}

espera("Frase 1", aleatorio(1, 3))
  .then((valor) => {
    console.log(valor);
    return espera(222222, aleatorio(1, 3));
  })
  .then((valor) => {
    console.log(valor);
  })
  .catch((e) => {
    console.log("ERRO:", e);
  });

// espera("Frase 2", aleatorio(1, 3));
// espera("Frase 3", aleatorio(1, 3));

function buscaDados(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

buscaDados("Conexão com o Banco", aleatorio(1, 3))
  .then((res) => {
    console.log(res);
    return buscaDados(res + " - Dados carregados", aleatorio(1, 3));
  })
  .then((res) => {
    console.log(res);
    return buscaDados(res + " - Processando dados", aleatorio(1, 3));
  })
  .then((res) => {
    console.log(res);
    return buscaDados(res + " - Concluido", aleatorio(1, 3));
  });
