// CLASSE
// Tudo que é publico é acessível fora da classe
// Tudo que é privado só é acessível dentro da classe onde foi declarado
// É muito importante encapsular os dados, para não deixar eles manipuláveis.
export class Empresa {
    public readonly nome:string;
    private readonly colaboradores: Array<Colaborador> = [];
    protected readonly cnpj:string;
    constructor(nome:string, cnpj:string){
        this.nome = nome;
        this.cnpj = cnpj;
    }

    addColaborador(colaborador:Colaborador):void {
        this.colaboradores.push(colaborador);
    }
}

export class Colaborador {
    constructor(
        public readonly nome:string,
        public readonly sobrenome:string
    ){}
}




const Empresa1 = new Empresa('Facebook', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Luiz', 'Otávio');
const colaborador2 = new Colaborador('Maria', 'José');

console.log(Empresa1);
console.log(Empresa1.nome);


