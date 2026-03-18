// CLASSES

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando`)
    }

    comer(){
        console.log(`${this.nome} está comendo`)
    }

    beber(){
        console.log(`${this.nome} está bebendo`)
    }
}

const p1 = new Pessoa('Gabriel', 'Santos');
console.log(p1.falar())

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`)
}
