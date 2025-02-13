//Resgistar numero máximo da lista:
let qtdeRegistro = 10;

//Registro dos numeros já sorteados:
let registroNumerosSorteados = [];

//Sortear numero:
let numeroSorteado = sortearNumero();

function sortearNumero(){
    let numeroEscolhido = parseInt(Math.random()*qtdeRegistro + 1);
    let tamanho = registroNumerosSorteados.length;

    if(tamanho == qtdeRegistro){
        registroNumerosSorteados = [];
    }

    if(registroNumerosSorteados.includes(numeroEscolhido)){
        return sortearNumero();
    }else{
        registroNumerosSorteados.push(numeroEscolhido);
        console.log(registroNumerosSorteados);
        return numeroEscolhido;
    }

    // for(let i = 0; i <= tamanho; i++ ){
    //     if(registroNumerosSorteados[i] == numeroEscolhido){
    //         return sortearNumero ();
    //     }else{
    //         registroNumerosSorteados.push(numeroEscolhido);
    //         console.log(registroNumerosSorteados);
    //         return numeroEscolhido;
    //     }
    // }

}
//Contar tentativas:
let tentativas =1;

//Verificar palpite:
function verificador(){
    let palpite = document.querySelector('input').value;

    if(palpite == numeroSorteado){
        console.log(`Parabéns, você acertou!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        exibirNaTela('h1',`Parabéns, você acertou!`);
        exibirNaTela('p',`Você acertou na tentativa de nº${tentativas}`);
    }else{
        if(palpite > numeroSorteado){
            exibirNaTela('p',`Insira um número menor!`);
        }else{
            exibirNaTela('p',`Insira um número maior!`);
        }
        tentativas++;
        limpar();
    }
}

//Limpar campo após palpite errado:
function limpar(){
    document.querySelector('input').value = '';
}

//Exibir mensagem inicial após reinicialização:
function mensagemINicial(){
    exibirNaTela('h1',`Advinhe o número secreto!`);
    exibirNaTela('p',`Escolha um número entre 1 e 10!`);
}

//Exibir informações na tela:
function exibirNaTela(tag, texto){
    let lugar = document.querySelector(tag);
    lugar.innerHTML = texto;
    // responsiveVoice.speak(texto, "Brazilian Portuguese Male", {rate: 1.7});
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.7; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

//Reiniciar jogo:

function reiniciar(){
    numeroSorteado = sortearNumero();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    limpar();
    tentativas = 1;
    mensagemINicial()
}
