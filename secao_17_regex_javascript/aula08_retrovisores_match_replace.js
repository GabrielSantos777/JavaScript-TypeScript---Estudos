const { html2 } = require('./base')

// console.log(html2)
// console.log(html2.replace(/div/g, 'p'))
console.log(html2.match(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g))
console.log(html2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)<\/\1>/g, '<$4>$3</$4>'))

