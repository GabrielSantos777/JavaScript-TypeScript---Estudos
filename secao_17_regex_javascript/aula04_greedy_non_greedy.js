const { html } = require('./base');
console.log(html.match(/<.+>.*<\/.+>/g)); //greedy - casa o maior número possível de caracteres entre as tags
console.log(html.match(/<.+?>.*?<\/.+?>/g)); //non-greedy - casa o menor número possível de caracteres entre as tags

