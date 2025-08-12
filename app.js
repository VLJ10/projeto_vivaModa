/********************************************************
 * Objetivo: Criar um sistema que calcula a taxa de juros
 * Autor: Vinicius
 * Data: 05/08/2025
 * Versão 1.0 
***********************************************************/


const MESSAGE_ERROR_EMPTY = 'É necessário preencher todos os campos.'
const MESSAGE_ERROR_INVALID = 'A entrada de números é proibida digite apenas letras.'
const MESSAGE_ERROR_NAN = 'A entrada de números é proibida digite apenas letras.'

//Criar um objeto de entrada de dados
var readline = require('readline')
const sm = require('./modulo/simulacao')
const { ticket } = require('./modulo/ticket')


var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite seu nome: ', function (nomeCliente) {

    let cliente = String(nomeCliente).toUpperCase()

    if (nomeCliente == '' || nomeCliente == null) {
        console.log(MESSAGE_ERROR_EMPTY)
        entradaDeDados.close()


    } else if (!isNaN(nomeCliente)) {
        console.log(MESSAGE_ERROR_INVALID)
        entradaDeDados.close()
    } else {
        entradaDeDados.question('Digite o nome do produto: ', function (nomeProduto) {

            let produto = String(nomeProduto).toUpperCase()

            if (nomeProduto == '' || nomeProduto == null) {
                console.log(MESSAGE_ERROR_EMPTY)
                entradaDeDados.close()

            } else if (!isNaN(nomeProduto)) {
                console.log(MESSAGE_ERROR_INVALID)
                entradaDeDados.close()

            } else {
                entradaDeDados.question('Digite o valor do produto: ', capital => {

                    entradaDeDados.question('Digite a taxa de juros anual: ', taxaJuros => {

                        entradaDeDados.question('Digite o número de vezes que o juros são compostos por ano: ', vezesDeJuros => {

                            entradaDeDados.question('Digite o tempo em anos: ', tempo => {

                                if (capital == '' || taxaJuros == '' || vezesDeJuros == '' || tempo == '') {
                                    console.log(MESSAGE_ERROR_EMPTY)
                                    entradaDeDados.close()
                                } else {
                                    let resultado = sm.simulacao(capital, taxaJuros, vezesDeJuros, tempo)
                                    let comprovante = ticket(resultado.preco, resultado.parcela, resultado.valor, cliente, produto)
                                    console.log(comprovante)
                                    entradaDeDados.close()
                                }
                            })
                        })
                    })

                })
            }
        })
    }

})