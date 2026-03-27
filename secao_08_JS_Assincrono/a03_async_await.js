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

espera('Fase 1', aleatorio(0, 3))
    .then(valor => {
        console.log(valor);
        return espera('Fase 2', aleatorio(0, 3))
    }).then(fase => {
        console.log(fase);
        return espera('Fase 3', aleatorio(0, 3));
    }).then(fase => {
        console.log(fase);
    }).catch(erro => console.log(erro));


async function execeuta() {
    try{
        const fase1 = await espera('Fase 1', aleatorio(0, 3));
        console.log(fase1);
        const fase2 = await espera('Fase 2', aleatorio(0, 3));
        console.log(fase2);
        const fase3 = await espera('Fase 3', aleatorio(0, 3));
        console.log(fase3); 
    } catch (e){
        console.log(e)
    }
    
}