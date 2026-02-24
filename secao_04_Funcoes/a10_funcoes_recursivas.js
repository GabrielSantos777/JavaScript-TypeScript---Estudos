// Funções recursivas
// São funções que se chamam, ou seja, que se referenciam, ou seja, que se auto-referenciam, ou seja, que se auto-invocam, ou seja, que se auto-chamam.

function recursiva(max) {
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(-10);