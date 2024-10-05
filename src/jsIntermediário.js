const mensagem = 'Olá'
console.log(mensagem)

// console.log(pais2)

// var pais //declaração
// pais = 'Brasil' //atribuição

// var pais2 = 'China' //duas instruções separadas, mas, na mesma linha
// console.log(pais2)

// function somar(numero1, numero2){
//     return numero1 + numero2
// }

// let resultadoDaSoma = somar(12, 5)

// console.log(resultadoDaSoma)

let resultadoDaSoma = (numero1, numero2) => numero1 + numero2

console.log(resultadoDaSoma(12, 5))

const incentivarQuester = nomeQuester => {
    console.log('Parabéns ' + nomeQuester + ', Você chegou ao módulo de JS Intermediário!')}

    incentivarQuester('Flávia')

const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir){
    const mesAtual = 10
    let anoDeNascimento = 2024 - idade
    if(mesDeNascimento > mesAtual) anoDeNascimento--
    imprimir(anoDeNascimento)
}

let imprimirAnoDeNascimento = anoDeNascimento => {
    console.log('Seu ano de nascimento é: ' + anoDeNascimento)
}

calcularAnoDeNascimento(35, 7, imprimirAnoDeNascimento)

function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(dobrar(3))
console.log(triplicar(3))
console.log(quadruplicar(3))