let listaDeNumerosSorteados = [];
let limiteNumero = 100;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
let elemento = document.querySelector(tag);
elemento.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
{rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Digite um número entre 1 e 100');   
}

exibirMensagemInicial();

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Digite um número entre 1 e 10';

function verificarChute() {
    let chute = document.querySelector('input').value
    if(chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O Número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O Número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * limiteNumero + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista = limiteNumero) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroSecreto();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    exibirMensagemInicial();
    gerarNumeroSecreto();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}