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

// function multiplicar(multiplicador){
//     return function(numero){
//         return numero * multiplicador
//     }
// }

// let dobrar = multiplicar(2)
// let triplicar = multiplicar(3)
// let quadruplicar = multiplicar(4)

// console.log(dobrar(3))
// console.log(triplicar(3))
// console.log(quadruplicar(3))

// let filmes = [
//     ['Vingadores', 4.5, true], 
//     ['Mulher Maravilha', 4.6, false, ['Gal Gabot', 25]]
// ]
// // let avaliações = [1, 4.6, 5]
//04/10/2024
// console.table(filmes)

// console.table(filmes[1][3][0]);

let frutas = ['banana', 'maçã', 'laranja', 'pêra']
// let frutasTamanho = frutas.length

// for(let i = 0; i < frutasTamanho; i++){
//     console.log('Fruta: ' + frutas[i])
// }

// frutas.forEach(function(item){
//     console.log('Fruta: ' + item)
// })

// frutas.push('manga')
// console.log(frutas)

// frutas.unshift('morango')
// console.log(frutas)

// let posicaoLaranja = frutas.indexOf('laranja')
// console.log(posicaoLaranja)

//09/10/2024
// console.log(frutas)
// let frutasExtraídas = frutas.slice(1,3)
// console.log(frutasExtraídas)

// let frutasExtraídas2 = frutas.splice(1, 2)
// console.log(frutasExtraídas2)
// console.log(frutas)

// let removeEAdcionaFrutas = frutas.splice(1, 2, "goiaba", "abacaxi", "uva")

// console.log(frutas)

////Objetos

// let tenis = { 
//     // chave: valor
//     cor: 'branco',
//     temanho: 36,
//     emEstoque: true
// }

// console.log(tenis.cor)
// console.log(tenis)

// tenis.valor = 200

// console.log(tenis)

////MÉTODOS: Adicionando funções a objetos

let usuario = {
    nome: 'Flavia',
    idade: '35',
    excluir: function() {
        console.log('A usuária ' + this.nome + ' é incrível!!! E nasceu em 6 de julho de 1989.')
    }
}

usuario.excluir()

////this

