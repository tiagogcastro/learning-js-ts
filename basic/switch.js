const data = new Data();
const diaSemana = data.getDay();

let diaSemanaTexto;

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda'
        break;
    case 3:
        diaSemanaTexto = 'Terça';
        break;
    case 4:
        diaSemanaTexto = 'Quarta'
        break;
    case 5:
        diaSemanaTexto = 'Quinta';
        break;
    case 6:
        diaSemanaTexto = 'Sexta'
        break;
    case 7:
        diaSemanaTexto = 'Sabado'
        break;
    default:
        diaSemanaTexto = 'Dia errado';
        break;
}

console.log(diaSemana, diaSemanaTexto)