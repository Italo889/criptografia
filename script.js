var cifraCesar = document.getElementById('cesar');
var base = document.getElementById('base');
var incremento = document.getElementById('incremento')
var btnCode = document.getElementById('botaoCode');
var btnDescode = document.getElementById('botaoDecode');
var botao = document.getElementById('botao');
var mensagemRetorno = '';
var div = document.getElementById('mensagemFinal');

var encode = document.querySelector('#encode')
var decode = document.querySelector('#decode')
var mensagem = document.querySelector('#mensagem');

encode.addEventListener('click', () => {
    div.innerText = btoa(mensagem.value) 
})

decode.addEventListener('click', () => {
    div.innerText = atob(mensagem.value) 
})