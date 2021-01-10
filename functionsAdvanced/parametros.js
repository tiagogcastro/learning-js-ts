// Tem variavel especial chamada "arguments" que sustenta todos os argumentos enviados(so com function()).
function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
}

// funcao(1, 2, 3, 4, 5);

function funcao2(a, b = 2, c = 4) {
    console.log(a + b + c);
}
// undefined assume o valor padrao definido
// funcao2(2, undefined, 20);


function funcao3([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
let obj = {nome: 'Luiz', sobrenome: 'Otávio', idade: 20}
// funcao3(['Tiago', 'Gonçalves', 20]);

// Mesmo com hash operator continua tendo "arguments"
const conta = function(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if(operador === '+' ) acumulador += numero;
        if(operador === '-' ) acumulador -= numero;
        if(operador === '/' ) acumulador /= numero;
        if(operador === '*' ) acumulador *= numero;
    }
    console.log(acumulador);
    // console.log(operador, acumulador, numeros);
};

conta('+', 0, 20, 30, 40, 50);
conta('-', 0, 20, 30, 40, 50);
conta('/', 1, 20, 30, 40, 50);
conta('*', 1, 20, 30, 40, 50);
