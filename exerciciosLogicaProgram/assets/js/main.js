// Escreva uma função que recebe 2 números e retorne o maior deles
// const NumberBigger = (number1, number2) => {
//     return number1 > number2 ? number1 : number2;
// }
// console.log(NumberBigger(1, 10))
// console.log(NumberBigger(5, 1))


// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura, de uma imagem(number). Retorn true se a imagem estiver no modo paisagem

// const ePaisagem = (largura, altura ) => {
//     return largura > altura;
// } 

// console.log(ePaisagem(5, 10))


// Escreve uma função que recebe um número retorne o seguinte:
// Número é divisível por 3 = Fizz Yeah
// Número é divisível por 5 = Buzz Yeah
// Número é divisível por 3 e 5 = FizzBuzz Yeah
// Número não é divisível por 3 e 5 = retorna o próprio número Yeah
// Checar se o número é realmente um número = retorna o próprio número
// Use a função com números de 0 a 100

const isDivisible = (number) => {
    if (typeof number !== 'number') return 'Não é número!'
    if(number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
    if(number % 3 === 0) return 'Fizz';
    if(number % 5 === 0) return 'Buzz';
    return number
}
console.log('a', isDivisible('a'))

for(let i = 0; i <= 100; i++) {
    console.log(i, isDivisible(i))
}
