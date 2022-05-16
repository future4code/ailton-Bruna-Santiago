// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura= Number(prompt("Digite a altura"))
  const largura= Number(prompt("Digite a largura"))

  const area= altura * largura
  console.log(area)}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual= Number(prompt("Qual é o ano atual?"))
  const anoNascimento= Number(prompt("Qual seu ano de nascimento?"))

  const idade= anoAtual - anoNascimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome= prompt("Qual seu nome?")
const idade= prompt("Qual sua idade?")
const email= prompt("Qual seu email?")

console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}
imprimeInformacoesUsuario("Alice", 28, "alice@gmail.com")

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1= prompt("Qual sua cor favorita1?")
const cor2= prompt("Qual sua cor favorita2?")
const cor3= prompt("Qual sua cor favorita3?")
const cores=[]
cores.push(cor1, cor2, cor3)
console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
 string= string.toUpperCase()
  return string

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const custo= Number(prompt("Valor custo"))
const valorIngresso= Number(prompt("Valor ingresso"))

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const primeiro= array.shift()
const ultimo= array.pop()
array.unshift(ultimo)
array.push(primeiro)

return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1= string1.toLoWerCaser()
  string2= string2.toLoWerCaser()
let comparacao= string1 === string2

return comparacao
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}