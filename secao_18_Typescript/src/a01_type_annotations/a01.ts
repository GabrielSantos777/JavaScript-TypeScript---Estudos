// TYPE ANNOTATIONS

// Tipos Básicos (Aqui ocorre inferência de tipos)
let nome: string = "Gabriel"; //Qualquer tipo de string
let idade: number = 27; //10, 1.57, -5,55, 0xfd00, 0b09a3d, 0o7744
let isProgramador: boolean = true; //true ou false
let simbolo: symbol = Symbol("qualquer-symbol"); //Qualquer símbolo
let bigInt: bigint = 9007199254740991n; //Qualquer número inteiro grande

// Arrays
let arrayDeNumeros: number[] = [1, 2, 3];;
let arrayDeNumeros2: Array<number> = [4, 5, 6];
let arrayDeStrings: string[] = ["a", "b", "c"];
let arrayDeStrings2: Array<string> = ['a', 'B', 'c']
let arrayDeBooleanos: Array<boolean> = [true, false];

// Objetos
let Pessoa : {
    nome: string;
    idade: number;
    // ? - OPCIONAL
    isProgramador?: boolean;
} = {
    nome: "Gabriel",
    idade: 27,
    isProgramador: true
}

// Função
function soma(x: number, y: number) {
    return x + y;
}
