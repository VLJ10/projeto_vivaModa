/********************************************************
 * Objetivo: Criar função para receber o nome do cliente e do produto
 * Autor: Vinicius
 * Data: 05/08/2025
 * Versão 1.0 
***********************************************************/

//Função que recebe o Nome do cliente e do produto 

const MESSAGE_ERROR_NAN = 'ERRO: Digite somente numeros'

function nomeClientes(cliente) {
    let nomeCliente = cliente


    if (!isNaN(nomeCliente)) {
        return console.log(MESSAGE_ERROR_NAN)
    } else if (nomeCliente == undefined) {
        return false
    } else {
        return nomeCliente
    }
}

function nomeProduto(produto) {
    let nomeProduto = produto
    if(nomeProduto == undefined){
        return false
    }else if(!isNaN(nomeProduto)){
        console.log(MESSAGE_ERROR_NAN)
    }else{
        return nomeProduto
    }

}
module.exports = {
    nomeClientes,
    nomeProduto

} 