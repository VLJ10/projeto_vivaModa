/********************************************************
 * Objetivo: Criar função exibir o ticket
 * Autor: Vinicius
 * Data: 08/08/2025
 * Versão 1.0 
***********************************************************/




const { nomes } = require("./names")
const { simulacao } = require("./simulacao")







function ticket(info) {

    let ticketConsole = info
    if (ticketConsole) {

       

        return console.log(
            `
             ******************* Viva moda *******************
             Muito obrigado por realizar a sua compra conosco Sr(a) ${n.nomeCliente}.
             A compra do produto ${n.nomeProduto}, tem um valor de: ${orcamento.preco}.
             A sua compra será parcelada em ${orcamento.parcela} vezes e o Sr(a) pagará: ${orcamento.valor}.
             Muito obrigado por escolher a Viva Moda
             ******************************************************* `
            )
    } else {
        return console.log('Sua compra não foi aprovada')
    }

}
let info = true
let tx = ticket(info)