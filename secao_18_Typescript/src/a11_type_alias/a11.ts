// TYPE ALIAS

type Idade = number;
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Marrom' | 'Amarelo';
type CorPreferida = CorRGB | CorCMYK;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};

const pessoa1: Pessoa = {
    nome: 'João',
    idade: 30,
    salario: 5000,
    corPreferida: 'Vermelho'
};

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
    return { ... pessoa, corPreferida: cor }
}

console.log(setCorPreferida(pessoa1, 'Ciano'));
console.log(pessoa1);
