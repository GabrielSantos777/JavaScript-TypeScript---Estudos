// Funções fábrica
// São funções que retornam outras funções

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        altura : altura,
        peso : peso,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //setter para alterar o peso, sem precisar usar o this, pois o setter é uma função que é chamada como se fosse uma propriedade, e não como uma função, ou seja, sem os parênteses
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            // console.log(valor);
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        // Usar o this para acessar as propriedades do objeto, se fosse para acessar a variável nome, por exemplo, iria acessar a variável do escopo da função, e não a propriedade do objeto
        // peso: 80,
        // getter para acessar o peso, sem precisar usar o this, pois o getter é uma função que é chamada como se fosse uma propriedade, e não como uma função, ou seja, sem os parênteses
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
// console.log(p1.nomeCompleto); // Luiz Otávio
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nomeCompleto); // Maria Oliveira Silva
console.log(p1.imc()); // 24.691358024691358