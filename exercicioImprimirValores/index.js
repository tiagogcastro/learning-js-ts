function meuEscopo() {
    const form = document.querySelector('.form')
    const result = document.querySelector('.result')

    const pessoas = []
    function recebeEventForm(event) {
        event.preventDefault()
        const nome = form.querySelector('.nome'),
        sobrenome = form.querySelector('.sobrenome'),
        peso = form.querySelector('.peso'),
        altura = form.querySelector('.altura')
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        })
        console.log(pessoas)
        result.innerHTML += `
        <p> O nome é: ${nome.value}, seu sobrenome é: ${sobrenome.value}, seu peso: ${peso.value} e sua altura: ${altura.value}.</p>`
    }
    form.addEventListener('submit', recebeEventForm)
}

meuEscopo();

