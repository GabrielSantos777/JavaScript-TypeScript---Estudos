// UNION TYPES
// Você pode usar quando quer escolher os tipos que vc quiser

function addOrConcat(a: number | string, b: number | string ) {
    // return a + b;
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    return `${a}${b}`;
}

console.log(addOrConcat(10, 20));