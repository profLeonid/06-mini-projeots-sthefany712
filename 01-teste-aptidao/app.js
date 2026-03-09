'use strict' //mostra alguns erros

function removerClasses() {
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('apto', 'nao-apto')

}

function avaliar() {
    const tempo = document.getElementById('tempo')
    const resultado = document.getElementById('resultado')

    removerClasses()
    if (tempo.value < 14) {
        resultado.textContent = 'Apto'
        //console.log('Apto') // sempre fazer como teste
        resultado.classList.add('apto')
    } else {
        resultado.textContent = 'Não Apto'
        //console.log('Não Apto')
        resultado.classList.add('nao-apto')
    }
}

//Se precisar receber algo faça essa
//const avaliar = document.getElementById('avaliar') //getElementById(string)




