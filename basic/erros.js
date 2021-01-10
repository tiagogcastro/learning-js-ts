// Try, catch, throw
// function soma(x, y) {
//     if(typeof x !== 'number' || typeof y !== 'number') {
//         throw new Error('x e y precisam ser números');
//     }

//     return x + y;
// }

// try {
//     console.log(soma(1, 2));
//     console.log(soma('1', 2));
// } catch(err) {
//     console.log(err)
// }

// // try, catch, finally 

// try {
//     // É executada quando não há erros
//     console.log('Abri um arquivo')
// } catch (err) {
//     // quando há erros
// } finally {
//     console.log('FINALLY: Eu sempre sou executado')
//     // sempre
// }

function retornaHora(data) {
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if(!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch(err) {
    // Tratar erro
    console.log(err)
}
