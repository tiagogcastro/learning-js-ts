// const numero = 10
// const frutas = ['banana', 'maçã', 'pêra']

// for(let i = 0; i < frutas.length; i++) {
//     console.log(`indice ${i}: ${frutas[i]}.`)
// }

// For in - lê os indicies ou chaves do obj
// const Frutas = ['Pera', 'maçã', 'Pêra'];
// const pessoa = {
//     nome: 'Tiago',
//     sobrenome: 'Gonçalves',
//     idade: 16
// };

// for (let chave in pessoa) {
//     console.log(`${chave}:`, pessoa[chave]);
// }


// For of - retorna o valor e não o index
// const nomes = ['Tiago', 'Gustavo', 'Davi']
// for (let valor of nomes ) {
//     console.log(valor); 
// }

// nomes.forEach((element, indice, array) => {
//     console.log(element, indice, array)
// })

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

for( let chave in pessoa ){
    console.log(chave, pessoa[chave]);
}