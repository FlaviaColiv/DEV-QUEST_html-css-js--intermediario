// const mensagem = 'Olá'
// console.log(mensagem)

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

// let resultadoDaSoma = (numero1, numero2) => numero1 + numero2

// console.log(resultadoDaSoma(12, 5))

const incentivarQuester = nomeQuester => {
    console.log('Parabéns ' + nomeQuester + ', Você chegou ao módulo de JS Intermediário!')}

    incentivarQuester('Flávia')

// const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir){
//     const mesAtual = 10
//     let anoDeNascimento = 2024 - idade
//     if(mesDeNascimento > mesAtual) anoDeNascimento--
//     imprimir(anoDeNascimento)
// }

// let imprimirAnoDeNascimento = anoDeNascimento => {
//     console.log('Seu ano de nascimento é: ' + anoDeNascimento)
// }

// calcularAnoDeNascimento(35, 7, imprimirAnoDeNascimento)

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
'use strict' //evita escopo vazando ou síntese indevida (coloca isso no inicio do documento)
// console.log(this)
// console.log(window === this)

// this.name = 'Flavia'

// function saudar() {
//     console.log('this no contexto da função', this)
//     console.log('Olá, ' + this.name)
// }

// saudar()

// let usuario2 = {
//     nome: 'Flavia',
//     saudar: function() {
//         console.log('this no contexto do metodo', this)

//         console.log('this no contexto do metodo', this.nome)
//     }
// }

// usuario2.saudar()

let comida = {
    nome: 'Brócolis',
    temperatura: 0
}

// comida.cozinhar = function(comidaParaCozinhar, temperaturaDeCozimento) {
//     comidaParaCozinhar.temperatura = temperaturaDeCozimento;
// } OU

// comida.cozinhar = function(temperaturaDeCozimento) {
//     this.temperatura = temperaturaDeCozimento;
// }

// console.log(comida)

// comida.cozinhar(100)
// console.log(comida)

// let frutas2 = ['uva', 'banana', 'melão']

// let videoGame = {
//     nome: 'Xbox',
//     valor: 3000
// }
// let videoGame2 = {
//     nome: 'Playstation',
//     valor: 5000
// }

// let videoGames = [videoGame, videoGame2]

// console.log(videoGames)
// console.log(videoGames[1]) //representação de um objeto
// console.log(videoGames[1].nome) //chama só o nome de um objeto

// let jogo1 = {
//     nome: 'Final fantasy'
// }
// let jogo2 = {
//     nome: 'Falout'
// };

// let videoGame = {
//     nome: 'Xbox',
//     valor: 3000,
//     // jogos: ['Final fantasy', 'Falout', 'Fifa'] OU
//     jogos: [jogo1, jogo2]
// };

// let jogo3 = {
//     nome: 'Fifa'
// };

// videoGame.jogos.push(jogo3) //adiciona mais um item à lista de jogos

// console.log(videoGame)

// let cliente = {
//     nome: 'Flavia',
//     ultimoPedido: {
//         produto: 'Xbox',
//         valor: 3000,
//         jogos: [
//             { nome: 'Fifa' }
//         ]
//     }
// }

// console.log(cliente.ultimoPedido.jogos[0].nome) 

// let p = document.getElementById('paragrafo1')
// console.log(p)

// let inputPorClasse = document.getElementsByClassName('tag-de-input')
// console.log(inputPorClasse[1])

// let inputPorTag = document.getElementsByTagName('h1')
// console.log(inputPorTag)

// let inputPorName = document.querySelectorAll("input[name='email']"); // por nome - busca todos os elementos a partir de uma QUERY (consulta) - consulta mais complexa
// console.log(inputPorName)

// function adicionarComentario() {
//     // seleciona o item
//     let inputComentario = document.getElementsByName('novo-comentario');
//     // ter acesso ao valor preenchido
//     let textoDigitado = inputComentario[0].value;
//     // pegar o valor e adicionar como um html novo, adicionar na tela
//     let novosComentarios = document.getElementById('novos-comentarios');
//     //inserir alguma porção de html dentro de outro elemento
//     // novosComentarios.innerHTML = `<p>Novo Comentário: ${textoDigitado} </p>`;
//     // para adicionar mais de um comentário += - concatena textos no html
//     novosComentarios.innerHTML += `<p>Novo Comentário: ${textoDigitado} </p>`;
// }

function alterarCorDeFundoPrimeiroPost() {
    let posts = document.getElementsByClassName('post');

    let primeiroPost = posts[0];
    primeiroPost.style.backgroundColor = 'violet';
}

// adcionar uma classe 
function aumentarFonteSegundoPost() {
    let textoPosts = document.getElementsByClassName('texto-post');

    textoPosts[1].classList.add('fonte-grande')
}

function marcarRadio(genero) {
    let radioMasculino = document.getElementById('genero-masculino');
    let radioFeminino = document.getElementById('genero-feminino');

    if(genero === 'M') {
        radioMasculino.checked = true;
    } else if(genero === 'F') {
        radioFeminino.checked = true;
    }
}