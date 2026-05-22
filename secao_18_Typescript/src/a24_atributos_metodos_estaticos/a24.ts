// metodos estaticos
// Metodos estaticos são metodos que podem ser chamados diretamente na classe, sem a necessidade de criar uma instancia da classe

class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string, 
        public idade: number,
        public cpf:string
    ) {}

    static falaOi(): void {
        console.log('Oi');
    }

    
}




const aluno1 = new Pessoa('João', 'Silva', 20, '123.456.789-00');
console.log(aluno1);
Pessoa.falaOi();