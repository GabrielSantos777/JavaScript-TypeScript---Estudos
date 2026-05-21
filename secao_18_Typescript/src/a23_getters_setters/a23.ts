class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string, 
        private idade: number,
        protected _cpf:string
    ) {}

    get cpf():string {
        return this._cpf;
    }
    
    set cpf(valor: string){
        this._cpf = valor;
    }

    
}




const aluno1 = new Pessoa('João', 'Silva', 20, '123.456.789-00');
console.log(aluno1);
aluno1.cpf = '987.654.321-00';
console.log(aluno1);