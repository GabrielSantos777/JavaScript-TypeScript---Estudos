export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string, 
        private idade: number,
        protected cpf:string
    ) {}

    getIdade(): number {
        return this.idade;
    }

    getCpf(): string {
        return this.cpf;
    }

    getNomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}

export class Aluno extends Pessoa{

}

export class Cliente extends Pessoa{
    getNomeCompleto(): string {
        return 'Isso vem do cliente: ' + this.nome + ' ' + this.sobrenome;
    }
}

const aluno1 = new Aluno('João', 'Silva', 20, '123.456.789-00');
console.log(aluno1.getNomeCompleto());