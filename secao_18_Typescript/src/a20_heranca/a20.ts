export class Empresa {
    readonly nome: string, 
    protected readonly funcionarios: Funcionario[] = [],
    private readonly cnpj: string
    constructor(nome:string, cnpj:string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }
    
    adicionaFuncionario(funcionario: Funcionario):void{
        this.funcionarios.push(funcionario);
    }

    mostrarFuncionarios():void{
        for(const funcionario of this.funcionarios){
            console.log(funcionario);
        }
    }

}

export class Funcionario {
    constructor(
        readonly empresa: Empresa,
        public nome: string, 
        public sobrenome: string,
        public salario: number
    ) {}
}

export class Jalk extends Empresa{
    constructor() {
        super('Jalk', '00.000.000/0000-00');
    }

    pop():Funcionario | null{
        const funcionario = this.funcionarios.pop()
        if(funcionario) return funcionario;
        return null;
    }
}

const empresa1 = new Jalk();
const funcionario1 = new Funcionario(empresa1, 'João', 'Silva', 1000);
empresa1.adicionaFuncionario(funcionario1);
empresa1.mostrarFuncionarios();
console.log(empresa1);
