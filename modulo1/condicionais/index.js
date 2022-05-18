//Exercícios de interpretação de código

//1 - 

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }


//a) Explique o que o código faz. Qual o teste que ele realiza? 
//R: Se for um número % 2 === 0, passará no teste, se não for, não passará.

//b) Para que tipos de números ele imprime no console "Passou no teste"? 
//R: Tem que ser igual a 0

//c) Para que tipos de números a mensagem é "Não passou no teste"?
//R: Números diferentes de 0

//2 - 

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) Para que serve o código acima?
//R: Ele dá o preço da fruta escolhida

//b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//R:O preço da fruta  Maçã  é  R$  2.25

//c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? 
//R: O preço da fruta  Pêra  é  R$  5

//3- 

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//a) O que a primeira linha está fazendo?
//R:A primeira linha está pedindo para o usuário digitar um número

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//R: 10- Esse número passou no teste, -10 msg não definida

//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//R: A mensagem só irá retornar se inserirmos um número maior que 0, sendo assim, -10 nos retorna uma mensagem com erro.


//Exercícios de escrita de código

//1-

// const idade= Number(prompt("Qual sua idade?"))

// if(idade >= 18) {
// console.log("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir")
// }


//2-

// let turnoAluno= prompt("Digite M par matutino, V para vespertino ou N para noturno")


// if(turnoAluno === "M") {
//    console.log("Bom dia!")
// } else if(turnoAluno === "V") {
//     console.log("Boa tarde!")
// } else if(turnoAluno === "N") {
//     console.log("Boa noite!")
// } else {
//     console.log("Deu ruim")
// }

//3- 

// let turnoAluno= prompt("Digite M par matutino, V para vespertino ou N para noturno")

// let retornaTurno= (turno) => {
//     switch (turno) {
//         case 'M':
//             return "Bom dia!"
//             break;
//             case 'V':
//                 return "Boa tarde!"
//                 break;
//                 case 'N':
//                     return "Boa noite!"
//                     break;
//     }
// }

// console.log(retornaTurno(turnoAluno))

//4-

// let generoFilme= prompt("Qual o genero do filme?")
// let precoIngresso= prompt("Qual o preço do ingresso?")



// if(generoFilme === "fantasia", precoIngresso <= 15) {
//    console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")

// }
    




