/********************************************************
 * Objetivo: Criar função para receber o nome do cliente e do produto
 * Autor: Vinicius
 * Data: 05/08/2025
 * Versão 1.0 
***********************************************************/

//Função que recebe o Nome do cliente e do produto 
function nomes(cliente, produto) {
    let nomeCliente = cliente 
    let nomeProduto = produto

    if (nomeCliente == undefined || nomeProduto == undefined ) {
        return false
    }else{
        return nomeCliente, nomeProduto
    }
}
/* cliente = 'Jorge'
produto = 'camisa'
console.log(produto)
console.log(cliente) */