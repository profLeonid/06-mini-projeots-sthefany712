'use strict'

//Calculo
const calcularMedia = (number1, number2, number3) => (number1 + number2 + number3) / 3

//Notas
function obterNotas(){
    const number1 = Number(document.getElementById('number1').value)
    const number2 = Number(document.getElementById('number2').value)
    const number3 = Number(document.getElementById('number3').value)

    validarDados(number1, number2, number3)
}

//Resultado
function mostrarResultado(mensagem){
    const resultado = (document.getElementById('resultado'))

    resultado.textContent = mensagem
}

//Validações
function validarDados(number1, number2, number3){
    
    if(number1 >= 0 && number1 <= 10 && number2 >= 0 && number2 <= 10 && number3 >= 0 && number3 <= 10){
        let media = calcularMedia(number1, number2, number3)

        if(media >= 7){
            mostrarResultado('Aprovado')
        }else if(media >= 5 && media <= 6.9){
            mostrarResultado('Recuperação')
        }else{
            mostrarResultado('Reprovado')
        }
  
    }else{
        mostrarResultado ('As notas devem ser de 0 a 10')
    }
}