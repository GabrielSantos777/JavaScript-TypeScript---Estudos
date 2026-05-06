// INTERSECTION TYPES
// Intersection types é quando você quer juntar duas tipagens

type Admin = {
    login: string;
    nivel: number;

}

type Funcionario = {
    nome: string;
    salario: number;
}

type Gerente = Admin & Funcionario;

const gerente: Gerente = {
    login: 'super_user',
    nivel: 10,
    nome: 'José',
    salario: 5000
}

type AB = 'A' | 'B';
type BC = 'B' | 'C';
type intersecao = AB & BC;