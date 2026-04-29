// TIPO OBJECT
// O tipo object representa um valor que não é um tipo primitivo (string, number, boolean, bigint, symbol, null ou undefined).

const objetoA = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
}

// Não vou conseguir criar esse objeto
// objetoA.chaveC = 'Outro valor';

const objetoB: {
    chaveA: string;
    chaveB: string;
    chaveC?: string;
    [chave: string]: unknown;
} = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
}

objetoB.chaveD = 'Outro valor';