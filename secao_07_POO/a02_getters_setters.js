const _velocidade = Symbol('velocidade')
class Carro {
    constructor(nome, velocidade){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade(){
        return[_velocidade]
    }

    set velocidade(valor){
        if(typeof valor !== 'number')return;
        if(valor >= 100 || valor <= 0)return;
        this[_velocidade] = valor;
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca', 0);
for(let i = 0; i <= 200; i++){
    c1.acelerar();
}

c1.velocidade = 919;
console.log(c1)


class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Luiz', 'Miranda');
p1.nomeCompleto = 'Luiz Miranda';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);