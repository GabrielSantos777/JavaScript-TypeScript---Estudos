// ARRAY
// Array<T> - T[]

function multiplicaArgs(...args: Array<number>):number{
    return args.reduce((acumulador, valor) => acumulador * valor, 1);
}

const resultado = multiplicaArgs(2, 3, 4);
console.log(resultado); // Saída: 24

function concatenaArgs(...args: string[]):string{
    return args.reduce((acumulador, valor) => acumulador + valor);
}
const resultado2 = concatenaArgs('Olá, ', 'mundo', '!');
console.log(resultado2); // Saída: 24