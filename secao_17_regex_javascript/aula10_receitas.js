

// Encontra todas as palavras
const palavrasRegex = /([\w"À-ú]+)/g;

// Não numeros
const naoNumerosRegex = /\D/g;

// Valida IP
const ipsRegex = /((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/g;    

// Valida CPF
const cpfRegex = /([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/g;

// Valida Telefone
const telefoneRegex = /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/g;

// Valida senhas fortes
const senhaForteRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

// Valia e-mail
const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/g;