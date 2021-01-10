function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    }    
}

const pessoa = criaPessoa('Luiz', 'Otavio', 25)

const pessoa1 = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++
    }
}

pessoa1.fala();
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()