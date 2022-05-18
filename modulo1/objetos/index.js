// Exercícios de interpretação de código

// 1 - Leia o código abaixo 

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// a) O que vai ser impresso no console?

// Matheus Nachtergaele
// Virginia Cavendish
// canal: Globo, horario: 14h

//2 - Leia o código abaixo

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a) //{nome: 'Juca', idade: 3, raca: 'SRD'}
// {nome: 'Juba', idade: 3, raca: 'SRD'}
// {nome: 'Jubo', idade: 3, raca: 'SRD'}

//b) Clona as informações de um objeto

//3- Leia o código abaixo

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

//a) //false
// undefined

//b) false, pois puxou a informação "backender" de pessoa
//undefined, pois não foi atribuido uma "altura" de pessoa

//Exercícios de escrita de código

// 1- 
// a)
// const pessoa= {
//     nome: "Bruna",
//     apelidos: ["Bru", "Bruxa", "Zoh"]
// }

// function texto(obj){
//     console.log(`Eu sou ${obj.nome}, mas pode me chamar de: ${obj.apelidos}`)
// }

// texto(pessoa)



// //b) 
// const pessoa2= {
//     ...pessoa,
//         apelidos: ["Apelido1", "Apelido2", "Apelido3"]
// }

// texto(pessoa2)
    



//2 -
// const pessoa1= {
//     nome: "Cicrano",
//     idade: 30,
//     profissao: "cantor"
// }

// const pessoa2= {
//     nome: "Beltrano",
//     idade: 50,
// profissao: "bailarino"
// }

// function pessoas(obj) { 
//     console.log([obj.nome, obj.nome.length, obj.idade, obj.profissao, obj.profissao.length ])
// }

// pessoas(pessoa1)
// pessoas(pessoa2)
  



// 3 - 
 
// let carrinho= [];

// const fruta1= {
//     nome: "banana",
//     disponibilidade: true
// }

// const fruta2= {
//     nome: "melancia",
//     disponibilidade: false
// }

// const fruta3= {
//     nome: "carambola",
//     disponibilidade: true
// }

// function feira(obj){
//     carrinho.push(obj);
// }

// feira(fruta1);
// feira(fruta2);
// feira(fruta3);

// console.log(carrinho)