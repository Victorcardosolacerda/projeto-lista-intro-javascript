// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
// let num1 = 2
// let num2 = 5
// function soma(num1, num2) {
  
//   return num1 + num2
// }

// // EXERCÍCIO 0B
// function imprimeMensagem() {
//   // implemente sua lógica aqui
//   const mensagem = prompt('Sejam bem vindos!')

//   console.log(mensagem)
// }
// imprimeMensagem('Sejam bem vindos!')
// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

// function calculaAreaRetangulo(altura, largura) {
//   altura = prompt("Qual a altura do retangulo?")
//   largura = prompt("Qual a largura do retangulo?")
//   let area = altura * largura
//   console.log (area)
// }
// calculaAreaRetangulo(3, 5)

// // EXERCÍCIO 02
// function imprimeIdade(anoAtual, anoDeNascimento) {
//   anoAtual = prompt("Qual o ano atual?")
//   anoDeNascimento = prompt ("Qual a sua data de nascimento?")
//   let idade = anoAtual - anoDeNascimento
//   console.log(idade)

// }
// imprimeIdade()

// // EXERCÍCIO 03
// function calculaIMC(peso, altura) {
//   peso = prompt("Qual seu peso?")
//   altura = prompt("Qual sua altura?")
//   return peso/(altura*altura)

// }
// calculaIMC()

// EXERCÍCIO 04
//function imprimeInformacoesUsuario(nome, idade, email) {
  //nome = prompt("Como você se chama?")
  //idade = prompt("Qual sua idade?")
  //email = prompt("Qual seu e-mail?")
  //console.log("Meu nome é",{nome},",tenho",{idade},"anos, e o meu e-mail é,",{email})

//}
//imprimeInformacoesUsuario()

//EXERCÍCIO 05
// function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
//   cor1 = prompt("Qual a sua cor favorita?")
//   cor2 = prompt("Qual sua segunda cor favorita?")
//   cor3 = prompt("Qual sua terceira cor favorita?")
//  console.log()
//}
//imprimeTresCoresFavoritas()

// // EXERCÍCIO 06
// function retornaStringEmMaiuscula(string) {
//   string = prompt("Digite uma frase")
//   const fraseMaiuscula = string.toUpperCase()
//   return fraseMaiuscula

// }
// retornaStringEmMaiuscula()

// EXERCÍCIO 07
// function calculaIngressosEspetaculo(custo, valorIngresso) {
//   custo = prompt("Qual valor das despesas gastas?")
//   valorIngresso = prompt("Qual valor será vendido os ingressos?")
//   let necessarioVender = custo/valorIngresso
//   return necessarioVender

// }
// calculaIngressosEspetaculo()
// EXERCÍCIO 08
// function checaStringsMesmoTamanho(string1, string2) {
//   string1 = prompt("Digite sua primeira string")
//   string2 = prompt("Digite sua segunda string")
//   return string1.length === string2.length

// }
// checaStringsMesmoTamanho()

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  array 
  return array[0]

}
retornaPrimeiroElemento("abc","ola")

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  array
  ultimo = array[array.length - 1]
  return ultimo

}
retornaUltimoElemento("ola", "abc")

// EXERCÍCIO 11

function trocaPrimeiroEUltimo(array) {
  const primeiroElemento = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = primeiroElemento
  return array

}
trocaPrimeiroEUltimo("ola", "abc")


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {

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