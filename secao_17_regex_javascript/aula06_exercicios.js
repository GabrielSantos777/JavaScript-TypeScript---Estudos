const { cpfs, ips } = require('./base')
console.log(cpfs)
console.log(ips)

console.log('Extraindo os CPFs:')
// const regexCpf = /\d{3}\.\d{3}\.\d{3}-\d{2}/g
const regexCpf = /(\d{3}\.){2}\d{3}-\d{2}/g
const cpfsEncontrados = cpfs.match(regexCpf)
console.log(cpfsEncontrados)

console.log('Extraindo os IPs:')
const regexIp = /(\d{1,3}\.){3}\d{1,3}/g
const ipsEncontrados = ips.match(regexIp)
console.log(ipsEncontrados)