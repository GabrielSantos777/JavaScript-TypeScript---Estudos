const {cpfs, cpfs2} = require('./base')

// ^ -> Começa com
// $ -> Termina com
// m -> Multiline, faz com que o ^ e $ funcionem para cada linha
// [^] -> Negação
// \d -> Casa dígitos

const regexCpf2 = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm
console.log(cpfs2)
console.log(cpfs2.match(regexCpf2))




// const cpf = '987.654.321-99'
// const regexCpf = /^(\d{3}\.){2}\d{3}-\d{2}$/g
// console.log(cpf.match(regexCpf))