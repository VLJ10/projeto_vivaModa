/********************************************************
 * Objetivo: Criar função exibir o ticket
 * Autor: Vinicius
 * Data: 08/08/2025
 * Versão 1.0 
***********************************************************/





const { simulacao } = require("./simulacao")







function ticket(capital, vezesDeJuros, montante, nomeCliente, nomeProduto) {

    let preco = capital
    let parcela = vezesDeJuros
    let precoFinal = montante
    let cliente = nomeCliente
    let produto = nomeProduto
    

       

        return console.log(
            `
             ******************* Viva moda *******************
             Muito obrigado por realizar a sua compra conosco Sr(a) ${cliente}.
             A compra do produto ${nomeProduto}, tem um valor de: ${preco}.
             A sua compra será parcelada em ${parcela} vezes e o Sr(a) pagará: ${precoFinal}.
             Muito obrigado por escolher a Viva Moda
             ******************************************************* `
            )
    

}

module.exports = {
    ticket
    }