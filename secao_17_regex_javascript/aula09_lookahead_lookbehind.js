const { lookahead } = require('./base')

console.log(lookahead)
// console.log(lookahead.match(/(.+[^in]active)/gim))

// Padrão por linha, usar a flag 'm' para multiline

// Lookahead positivo: (?=active)
// Lookahead negativo: (?!active)

// Positive lookahead: (?=active) (Frases que terminam com active, mas não terminam com inactive)
// console.log(lookahead.match(/(.+[^in](?=active))/gim))

// Negative lookahead: (?!active) (Frases que NÃO terminam com active, ou seja, terminam com inactive)
// console.log(lookahead.match(/^(?!.+[^in]active).+$/gim))
// console.log(lookahead.match(/^(?!.+inactive).+$/gim))


// Lookbehind positivo: (?<=ONLINE) (Frases que começam com ONLINE, mas não começam com OFFLINE)
// console.log(lookahead.match(/(?<=ONLINE).+/gim))

// Lookbehind negativo: (?<!ONLINE) (Frases que NÃO começam com ONLINE, ou seja, começam com OFFLINE)
console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim))
// console.log(lookahead.match(/^(?<!OFFLINE).+$/gim))