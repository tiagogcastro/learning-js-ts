function retornaFuncao(nome) {
    return function() {
        return nome;
    }
}
// Habilidade que a função tem em acessar seu escopo lexico
const funcao = retornaFuncao('Tiago');
console.dir(funcao)