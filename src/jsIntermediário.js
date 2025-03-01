// 01/03/2025 4

/* 
    Dica: Começar pensando no objetivo do que precisa fazer e no passo a passo pra chegar lá é essencial.
    
    NÂO SAIA TENTANDO ESCREVER CÓDIGO! Antes disso você precisa saber O QUE precisa ser feito e só depois COMO fazer.

    Objetivo do exercício: Ao preencher alguma informação nos inputs, deve ser verificado se estão vazios ou não. 
													 Caso tiver algum valor, será adicionada a borda verde. Se não tiver, é removida a borda.

        Passo 1 - Pegar todos os inputs que tenham a mesma classe.

        Passo 2 - Dar um jeito de percorrer cada input.

        Passo 3 - Quando o usuário preencher algo, precisamos disparar a ação para verificar se o input foi alterado.
			
				Passo 4 - Realizar a verificação se o valor do input é diferente de vazio.

				Passo 5 - Se o input tiver alguma informação, adicionamos a classe de campo-preenchido que vai dar a borda verde ao input.

				Passo 6 - Se o input estiver vazio, removemos a classe campo-preenchido.
*/


// Passo 1 - Pegar todos os inputs que tenham a mesma classe com o querySelectorAll.
const inputText = document.querySelectorAll(".input-text");

// Passo 2 - Dar um jeito de percorrer cada input - vamos utilizar o laço de repetição forEach para percorrer cada input.
inputText.forEach(input => {
		// Passo 3 - Quando o usuário preencher algo, precisamos disparar a ação para verificar se o input foi alterado.
    input.addEventListener('change', () => {
				// Passo 4 - Realizar a verificação se o valor do input é diferente de vazio.
        if (input.value !== "") {
						// Passo 5 - Se o input tiver alguma informação, adicionamos a classe de campo-preenchido que vai dar a borda verde ao input.
            input.classList.add("campo-preenchido")
        } else {
						// Passo 6 - Se o input estiver vazio, removemos a classe campo-preenchido.
            input.classList.remove("campo-preenchido")
        }
    });
});

// 01/03/2025 2

/*
		Dica: Começar pensando no objetivo do que precisa fazer e no passo a passo pra chegar lá é essencial.
    
    NÂO SAIA TENTANDO ESCREVER CÓDIGO! Antes disso você precisa saber O QUE precisa ser feito e só depois COMO fazer.

		Objetivo do exercício: Verificar se o elemento possui uma classe, se não tiver deverá ser adicionada. Caso existir, remover essa classe.
	
		Passo 1 - Pegar o elemento do quadrado azul no JS.

		Passo 2 - Quando o usuário clicar no quadrado, precisamos disparar a ação de verificar se a cor do quadrado é a cor azul.

		Passo 3 - Criamos uma varíavel que irá verificar se a classe contém a cor azul. 

		Passo 4 - Fazer a verificação utilizando essa varíavel criada, se ela existir, é removida a classe azul do quadrado. 
							
		Passo 5 - Caso não ter a cor azul, é adicionada a classe e o alerta deve ser disparado.
		
*/

// Passo 1 - Pegar o elemento do quadrado azul aqui no JS.
const quadrado = document.querySelector(".quadrado");

// Passo 2 - Quando o usuário clicar no quadrado, precisamos disparar a ação de verificar se a cor do quadrado é a cor azul.
quadrado.addEventListener('click', () => {
		// Passo 3 - Criamos uma varíavel que irá verificar se a classe contém a cor azul.
    const classeAzulExiste = quadrado.classList.contains('azul');

		// Passo 4 - Fazer a verificação utilizando essa varíavel criada, se ela existir, é removida a classe azul do quadrado. 
    if (classeAzulExiste) {
        quadrado.classList.remove("azul");
    } else {
				// Passo 5 - Caso não ter a cor azul, é adicionada a classe e o alerta deve ser disparado.
        quadrado.classList.add("azul");
    }
});

//01/03/2025 1

/*
		Dica: Começar pensando no objetivo do que precisa fazer e no passo a passo pra chegar lá é essencial.
    
    NÂO SAIA TENTANDO ESCREVER CÓDIGO! Antes disso você precisa saber O QUE precisa ser feito e só depois COMO fazer.

		Objetivo do exercício: Multiplicar itens de uma array por 10.

		Passo 1 - Criar a array de itens.
		
		Passo 2 - Utilizar essa array declarada para utilizar o laço forEach.

		Passo 3 - No forEach, utilizamos uma variável para iterar cada elemento da array.

		Passo 4 - Imprimir os elementos já multiplicados por 10, utilizando o console.log().
*/

// Passo 1 - Criar a array de elementos.
const numeros = [65, 44, 12, 4];

//Passo 2 - Utilizar essa array declarada para utilizar o laço ForEach.
numeros.forEach((item) => {
		// Passo 3 - No  ForEach, utlizamos uma variável para iterar cada elemento da array.
		console.log(item * 10);
		// Passo 4 - Imprimir os elementos já multiplicados por 10, utilizando o console.log.
});


// 28/02/2025

/* 
    Dica: Começar pensando no objetivo do que precisa fazer e no passo a passo pra chegar lá é essencial.
    
    NÂO SAIA TENTANDO ESCREVER CÓDIGO! Antes disso você precisa saber O QUE precisa ser feito e só depois COMO fazer.

    Objetivo do exercício: ao clicar no botão o fundo do quadrado azul deve trocar para a cor amarela

        Passo 1 - Pegar o elemento do botão aqui no JS

        Passo 2 - Pegar o elemento do quadrado azul aqui no JS

        Passo 3 - Quando o usuário clicar no botão precisamos disparar a ação de mudar a cor do fundo do quadrado azul

        Passo 4 - Para mudar a cor de fundo podemos adicionar e remover as classes que o elemento tem
*/

// Passo 1 - Pegar o elemento do botão aqui no JS
const btnTrocaCor = document.getElementById("btn-troca-cor");

// Passo 2 - Pegar o elemento do quadrado azul aqui no JS
const quadradoAzul = document.querySelector(".azul");

// Passo 3 - Quando o usuário clicar no botão precisamos disparar a ação de mudar a cor do fundo do quadrado azul
btnTrocaCor.addEventListener("click", trocarCor);

// Passo 4 - Para mudar a cor de fundo podemos adicionar e remover as classes que o elemento tem
function trocarCor() {
  quadradoAzul.classList.remove("azul");
  quadradoAzul.classList.add("amarelo");
}

// let valorBoleto = 100;

// console.log(valorBoleto)

let inputTelefone = document.getElementById('telefone');

function habilitarTelefone() {
    let inputTelefone = document.getElementById('telefone');
    inputTelefone.disecled = false;
}

// // Deixar tudo de marcação no HTML e de ação no JS

// // pegar o select

// let selectDeEstado = document.querySelector("select[name='estado']");

// // função para seleção - escuta um evento

// selectDeEstado.addEventListener('change', function () {
//     alert('mudou o select')
// })

// console.log(selectDeEstado)

// // versão encadeada da função acima

document
    .querySelector("select[name='estado']")
    .addEventListener('change', function (event) {
        console.log(event.target.value)
    })


// *************************************************** //

// 2024

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
    console.log('Parabéns ' + nomeQuester + ', você chegou ao módulo de JS Intermediário!')
}

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
    excluir: function () {
        console.log('A usuária ' + this.nome + ' é incrível!!! E nasceu em 6 de julho de 1989.')
    }
}

usuario.excluir()

////this
// 'use strict' //evita escopo vazando ou síntese indevida (coloca isso no inicio do documento)
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
    primeiroPost.style.backgroundColor = '#F5EEDC';
}

// adcionar uma classe em um elemento que se quer estilizar
function aumentarFonteSegundoPost() {
    let textoPosts = document.getElementsByClassName('texto-post');

    textoPosts[1].classList.add('fonte-grande')
}


// Começar pelo elemento que se quer alterar
function marcarRadio(genero) {
    let radioMasculino = document.getElementById('genero-masculino');
    let radioFeminino = document.getElementById('genero-feminino');

    if (genero === 'M') {
        radioMasculino.checked = true;
    } else if (genero === 'F') {
        radioFeminino.checked = true;
    }
}
