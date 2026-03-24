class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + " Já ligado");
      return;
    }
    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + " Já desligado");
      return;
    }
    this.ligado = false;
  }
}

const d1 = new DispositivoEletronico('Celular');
d1.ligar();
d1.desligar()
console.log(d1);

// EXTENDS -> CHAMA A CLASSE NO QUAL QUEREMOS PEGAR A HERANÇA
class Celular extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        // Super() chama o construtor da classe pai, não precisando escrever todo o construtor novamente.
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const c1 = new Celular('Iphone', 'Cinza', '17');
console.log(c1)