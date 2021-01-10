function qualquerCoisa() {
    console.log(11123123131);
}
// qualquerCoisa();

(function(idade) {
    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return `${nome} ${sobrenome}`;
    }
    function falaNome() {
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(idade);
})(30);

const nome = 'Qualquer coisa';
