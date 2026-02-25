// Funções Geradoras
// São funções que geram uma série de valores, ou seja, que geram uma sequência de valores, ou seja, que geram um iterador, ou seja, que geram um objeto iterável.

function* geradora1() {
    // yield é a palavra-chave que pausa a execução da função e retorna um valor, ou seja, que gera um valor.
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

const g1 = geradora1();
// .next() é o método que retoma a execução da função geradora, ou seja, que continua a execução da função geradora.
console.log(g1.next()); // { value: 'Valor 1', done: false }
console.log(g1.next()); // { value: 'Valor 2', done: false }
console.log(g1.next()); // { value: 'Valor 3', done: false }

for (let valor of g1){
    console.log(valor);
}
// --------------------
function* geradora2(){
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}
const g2 = geradora2();
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());

// --------------------
function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}
function* geradora4(){
    yield* geradora3(); // yield* é a palavra-chave que delega a execução para outra função geradora, ou seja, que chama outra função geradora.
    yield 3;
    yield 4;
    yield 5;
}
// --------------------

function* geradora5(){
    yield function(){
        console.log('Vim do yield1');
    }

    yield function(){
        console.log('Vim do yield2');
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();