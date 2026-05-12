// TIPO UNDEFINED

let x;
x = 20;
console.log(x * 2);

function createPerson(firstName: string, lastName?: string): 
{
    firstName: string,
    lastName?: string
} {
    if (lastName === undefined) {
        return { firstName };
    }

    return {
        firstName,
        lastName
    };
}

// TIPO NULL

function quadrado(x: any){
    if(typeof x === 'number'){
        return x * x;
    } else{
        return null;
    }
}

const quadradoNumero = quadrado(2);
console.log(quadradoNumero);
const quadradoString = quadrado('2');
console.log(quadradoString);

// TIPO NEVER
function criaErro(message: string): never{
    throw new Error(message);
}
criaErro('Ocorreu um erro!');
