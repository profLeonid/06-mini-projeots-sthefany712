//Primeiro passo é pegar as informações de todas as caixas que irei interagir e isso será realizado por meio do ID com nome pertinentes

//Deixo apenas a proprieadade calcular fora da função, pois é somente ao clicar no Calcular que as demais propriedades irão ser executadas.
//Tornando então Calcular como GLOBAL
const calcular = document.getElementById('calcular');

function imc () {

    // alert ('teste click'); Esse alert serve como teste, para saber se estou capturando o click. Ele deve me retornar a frase dentro () ao clicar no botão.

    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    //Antes de prosseguir é importante validar se os campos estão preenchidos.

    // if(nome !== '') {
    //     alert('nome vazio!');
    // }

    //Se eu colocar apenas nome mesmo que o campo esteja vazio ira cair no alert, pois ele está validando todo o elemento HTML e eu quero apenas o VALOR DENTRO DESSE ELEMENTO, por isso coloca-se .VALUE

    if(nome !== '' && altura !== '' && peso !== '') {
        //alert('valor preenchido!');
        
        const valorIMC = (peso / (altura *altura)).toFixed(2); //Calculo do IMC

        let classificacao = '';

        if(valorIMC < 18.5) {
            classificacao = 'Abaixo do Peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!';
        }else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35) {
            classificacao = 'com obesidade grau 1.';
        }else if (valorIMC < 40) {
            classificacao = 'com obesidade grau 2.';
        }else{
            classificacao = 'com obesidade grau 3. Cuidado'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}.`;

    }else {
        resultado.textContent = 'Preencha todos os campos!!!'
    }

    //Quando eu só quero o valor dentro do elemento, posso atribuir .value direto na variável

    // VALUE SÓ É PARA CONTEÚDO TIPO TEXTO E ALGUMAS OUTRAS
}

calcular.addEventListener('click', imc); 

//chamo a propriedade calcular, que é a responsável por gerar o resultado, logo depois add um ouvinte de eventos pedindo a ele para estar alerta ao 'click', que irá executar tudo que estiver dentro da função imc, função essa que ainda será criada!

//alert(nome); - Acessa o elemento ex: [object HTMLInputElement]
//nome.value = 'Sthefany Correia';
//O ponto serve para acessar uma propriedade do elemento (input)
//Value é onde fica o texto, atribuindo valor