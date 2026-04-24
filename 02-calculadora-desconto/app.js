'use strict'

function removerClasses() {
    const resultado = document.getElementById('resultado') //recebe algo 
    resultado.classList.remove('desconto1', 'desconto2', 'desconto3')
}

function trocarCor() {
    const desconto = document.getElementById('desconto')
    const resultado = document.getElementById('resultado')

    removerClasses()

    if(desconto.value <= 5 ){
        resultado.classList.add('desconto1')    
       
    }else if (desconto.value >= 5 && desconto.value <= 10){
        resultado.classList.add('desconto2')
    }else{
        resultado.classList.add('desconto3')
    } 
}
//A classList no JavaScript é uma propriedade somente leitura que retorna uma coleção ativa (DOMTokenList) das classes CSS de um elemento HTML. 
// Ela facilita a manipulação de classes (adicionar, remover, alternar, verificar) individualmente, sem afetar outras classes existentes no elemento, 
// sendo mais prática que o classNam

//Função em seta 
const calcularDesconto = (preco, desconto) => preco * desconto / 100

// function calcularDesconto(preco, desconto) {
//     const valorEconomizado = preco * desconto / 100
//     console.log(valorEconomizado)
//     return valorEconomizado
// }    

function mostrarResultados (){
    const preco = Number(document.getElementById('preco').value)
    const desconto = Number(document.getElementById('desconto').value)
    const resultado = (document.getElementById('resultado'))
    calcularDesconto(preco, desconto)
    resultado.textContent = calcularDesconto(preco,desconto)
    trocarCor()
}

document.getElementById('calcular')
    .addEventListener('click', mostrarResultados)