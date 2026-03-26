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

const promises = [
    // 'Primeiro Valor',
    espera("Promise 1", aleatorio(1, 3)),
    espera("Promise 2", aleatorio(1, 3)),
    espera("Promise 3", aleatorio(1, 3)),
    // 'Outro valor'
];

Promise.all(promises)
  .then(function(valor) {
    console.log(valor);
  })
  .catch(function(erro) {
    console.log(erro);
  });

Promise.race(promises)
  .then(function(valor) {
    console.log(valor);
  })
  .catch(function(erro) {
    console.log(erro);
  });

function baixaPagina(){
    const emCache = true;
    if (emCache) {
        return Promise.resolve('Pagina em cache');
    } else {
        return espera('Baixando pagina', 3000)
    }
}

baixaPagina().then(dados => {
    console.log(dados);
}).catch(e => console.log(e))