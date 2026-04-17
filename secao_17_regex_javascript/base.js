const texto = 'João sempre foi conhecido por sua dedicação e curiosidade em aprender coisas novas. Desde cedo, João demonstrava interesse por tecnologia, passando horas explorando diferentes ferramentas e tentando entender como tudo funcionava. Com o tempo, Joãooooooooooooooooooooooo começou a se aprofundar mais, estudando programação e desenvolvendo pequenos projetos que mostravam seu potencial e sua vontade de crescer na área. Ao longo da sua jornada, João enfrentou diversos desafios, mas nunca deixou que isso o desanimasse. Pelo contrário, cada dificuldade serviu como aprendizado e motivação para continuar evoluindo. Hoje, João é um exemplo de persistência e foco, mostrando que com esforço e disciplina é possível alcançar grandes resultados e construir uma trajetória sólida.'


const arquivos = [
    'Atenção.jpg',
    'João.png',
    'foto.jpg',
    'imagem.jpeg',
    'listaCompras.txt',
    'processo.pdf'
]

const html = '<p>Olá Mundo</p> <p>Olá novamente!</p>'

const alfabeto = 'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789!@#$%¨&*()_+[]{}|;:,.<>?/~`';

const cpfs2 = `987.654.321-99 
123.456.789-00 
111.222.333-44 
555.666.777-88
`;

const cpfs = `
Os CPFS são 

    987.654.321-99 123.456.789-00 
    
    111.222.333-44 555.666.777-88
    
    987.654.321-99 123.456.789-00 111.222.333-44 555.666.777-88
    
    987.654.321-99 123.456.789-00 111.222.333-44 555.666.777-88


`;
const ips = 'Os IPs são 192.168.0.1 10.0.0.1 172.16.0.1 0.0.0.0'


module.exports = {
    texto,
    arquivos,
    html,
    alfabeto,
    cpfs,
    cpfs2,
    ips
}