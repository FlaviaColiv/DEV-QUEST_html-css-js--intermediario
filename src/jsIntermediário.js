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