/********************************************************
 * Objetivo: Criar função para receber os valores e fazer a simulação de parcelas
 * Autor: Vinicius
 * Data: 08/08/2025
 * Versão 1.0 
***********************************************************/

/**
 * P = capital inicial
 * r = taxa de juros anual
 * n = numeros de vezes que o juros são compostos por ano
 * t = tempos em anos
 */

function simulacao(capital, taxaJuros, vezesDeJuros, tempo){

    let p = Number(capital)
    let r = Number(taxaJuros) / 100
    let n = Number(vezesDeJuros)
    let t = Number(tempo)

    let montante = p * ((1 + (r/n)) ** (n * t))

    return {valor: Number(montante).toFixed(2), preco: p, parcela: n}

}



module.exports = {
    simulacao

}