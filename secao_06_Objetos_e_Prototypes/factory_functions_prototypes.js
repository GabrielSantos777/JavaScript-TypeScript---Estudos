// Factory Functions e Prototypes

const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};

const pessoaPrototype = {
  ...falar,
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
};


function criarPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome, enumerable: true },
    sobrenome: { value: sobrenome, enumerable: true },
  });
}

const pessoa1 = criarPessoa("João", "Silva");
console.log(pessoa1.nomeCompleto()); // João Silva
