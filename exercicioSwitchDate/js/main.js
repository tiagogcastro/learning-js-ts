const getH1 = document.querySelector('.myDate');
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
    const diasSemana = ['Domingo', 'Segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];

    return diasSemana[diaSemana];
}

function getNameMonth(numberMonth) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    return meses[numberMonth];
}
function zeroAEsquerda(num) {
    num >= 10 ? num : `0${num}`;
}

function createDate(data) {
    const diaSemana = data.getDay();
    const NumberMonth = data.getMonth();
    const year = data.getFullYear();

    const nameDay = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNameMonth(NumberMonth);
    
    const hour = data.getHours();
    const minutes =data.getMinutes();

    return (
        `${nameDay}, ${data.getDate()} de ${nomeMes}
        de ${year} ${hour}:${minutes}`
    )
}
getH1.innerHTML = createDate(data);


// const getH1 = document.querySelector('.myDate');
// const data = new Date();

// getH1.innerHTML = data.toLocaleDateString('pt-BR', {
// });


