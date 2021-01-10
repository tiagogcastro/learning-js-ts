function saudacao(nome) {
    return `bom dia, ${nome}`
}
const valor = saudacao('luiz');
console.log(valor)

// 
function soma(x, y) {
    const result = x + y
    return result
}
console.log(soma(2, 2))

// 
const raiz = function (numero) {
    return numero ** 0.5;
};
console.log(raiz(9))

// 
const raiz2 = (numero) => {
    return numero ** 0.5
}
console.log(raiz2(25))
// ou

const raiz2 = (numero) => numero ** 0.5
console.log(raiz2(25))
