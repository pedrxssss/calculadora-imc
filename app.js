/* EXERCÍCIO DE JAVASCRIPT */

//Elementos de input do formulario
let cxNome = document.querySelector('#nome')
let cxIdade = document.querySelector('#idade')
let cxPeso = document.querySelector('#peso')
let cxAltura = document.querySelector('#altura')
let cxImc = document.querySelector('#resultadoimc')

//Elementos de tela
let aviso = document.querySelector('.aviso')
let resultado = document.querySelectorAll('.pessoa')

//Elementos de botões submit e reset
let btnEnviar = document.querySelector('.btnEnviar')
let btnLimpar = document.querySelector('.btnReset')

//Funcionamento
btnEnviar.addEventListener('click', function (e) {
    
    //Valores dos inputs
    let nome = cxNome.value
    let idade = cxIdade.value
    let peso = cxPeso.value
    let altura = cxAltura.value
    let imc = (peso / (altura * altura)).toFixed(1)

    cxImc.value = imc

    //Testes unitários
    console.log(nome)
    console.log(idade)
    console.log(peso)
    console.log(altura)
    console.log(imc)

    
    let sit = situacaoDoPeso(imc)
    aviso.textContent = sit

    //Prevent Default do botão submit
    e.preventDefault()

    //Criacao do objeto pessoa
    let pessoa = {
        nome: nome,
        idade: idade,
        peso: peso,
        altura: altura,
        imc: imc,
        sit: sit,
    }

    console.log(pessoa)

    resultado[1].textContent = `${pessoa.nome}`
    resultado[2].textContent = `${pessoa.idade} anos.`
    resultado[3].textContent = `${pessoa.peso} Kg.`
    resultado[4].textContent = `${pessoa.altura} m.`
    resultado[5].textContent = `${pessoa.imc+ ' ' +pessoa.sit}`
})

//Funcao da situacao do peso ( imc )
function situacaoDoPeso(imc) {
    let situacao = ''

    if ( imc <= 18 ) {
        situacao = 'Baixo peso'
    } else if ( imc >= 18.5 && imc <= 24.9) {
        situacao = 'Peso normal'
    } else if ( imc >= 25 && imc <= 29.9 ) {
        situacao = 'Sobrepeso'
    } else if ( imc >= 30 && imc <= 34.9) {
        situacao = 'Obesidade 1'
    } else if ( imc >= 35 && imc <= 39.9) {
        situacao = 'Obesidade 2'
    } else if ( imc >= 40) {
        situacao = 'Obesidade 3'
    } else {
        situacao = 'Informe seu peso corretamente.'
    }

    return situacao
}