let listaNumeroSorteado = [];
let elementosLimite = 10;
let numeroSecreto= gerarNumeroAleatorio();
let tentativas= 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML= texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.3})
}

function exibicaoMsgInicial(){
    exibirTextoNaTela('h1','jogo do numero secreto');
    exibirTextoNaTela('p','Escolha um numero de 1 a 10');
}

exibicaoMsgInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let qtdTentativas = tentativas > 1? 'tentativas' : 'tentativa';
        let msgTentativas = `Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${qtdTentativas}`;
        exibirTextoNaTela('p', msgTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute<numeroSecreto){
            exibirTextoNaTela('h1','Errou!!!');
            exibirTextoNaTela('p',`O numero secreto é maior que ${chute}!!!`);
            tentativas++;
            limparCampo();
        }else{
            exibirTextoNaTela('h1','Errou!!!');
        exibirTextoNaTela('p',`O numero secreto é menor que ${chute}!!!`);
            tentativas++;
            limparCampo();
        }
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value='';
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()* elementosLimite + 1);

    let quantidadeElementeosLista = listaNumeroSorteado.length;

    if(quantidadeElementeosLista == elementosLimite){
        listaNumeroSorteado=[];
    }
    if(listaNumeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumeroSorteado.push(numeroEscolhido);
        console.log(listaNumeroSorteado)
        return numeroEscolhido;
    }
}

function tentarNovamente(){
    exibicaoMsgInicial()
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    document.getElementById('reiniciar').setAttribute('disabled', true)
}