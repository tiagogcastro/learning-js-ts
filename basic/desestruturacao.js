// let a = 'A';
// let b = 'B';
// let c = 'C';

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c) ;
// // 


// // ... => rest, ... spread
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

// const primeiroNumber = numeros[0];
// const [um, , tres, , cinco, , sete] = numeros;
// console.log(um, tres, cinco, sete);

// const number = [
// //      1          1          2
// //   0  1  2    0  1  2    0  1  2
//     [1, 2, 3], [4, 5, 6], [7, 8, 9]
// ];
// console.log(number[1][2])

// const [, [,, seis]] = numeros
// console.log(seis)


// Objeto
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: '320'
    }
} ;

const {endereco: {rua, numero}, endereco} = pessoa;

console.log(rua, endereco);