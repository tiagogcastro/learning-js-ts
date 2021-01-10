// Função fábrica - factory function

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`            
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' '); // Separa
            this.nome = valor.shift(); // Pega primeiro do array
            this.sobrenome = valor.join(' '); // Junta
        },

        fala(assunto = 'falando sobre NADA') {
            return `${this.nome} está ${assunto}.`;
        },
        // altura,
        // peso,
        // // Getter
        // get imc() {
        //     const indice = this.peso / (this.altura ** 2);
        //     return indice.toFixed(2);
        // },
    };
}
const p1 = criaPessoa('Tiago', 'Gonçalves', 1.80, 80);
p1.nomeCompleto = 'Luiz Otávio Miranda';
console.log(p1.nomeCompleto);
console.log(p1.fala());