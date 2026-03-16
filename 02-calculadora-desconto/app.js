'use strict'

function trocarCor() {
    const resultado = document.getElementById('resultado')
    if(desconto < 5 ){
        resultado.classList.add('desconto1')
    }else if (desconto <= 10){
        resultado.classList.add('desconto2')
    }else{
        resultado.classList.add('desconto3')

    }
}

//função em seta 
const calcularDesconto = (preco, desconto) => preco * desconto / 100


// function calcularDesconto(preco, desconto) {
//     const valorEconomizado = preco * desconto / 100
//     console.log(valorEconomizado)
//     return valorEconomizado
// }

function mostrarResultados (){
    const preco = Number(document.getElementById('preco').value)
    const desconto = Number(document.getElementById('desconto').value)
    const resultado = document.getElementById('resultado')
    calcularDesconto(preco, desconto)
    resultado.textContent = calcularDesconto(preco,desconto)
    trocarCor()

}

document.getElementById('calcular')
        .addEventListener('click', mostrarResultados)


