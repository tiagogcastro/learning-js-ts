function zeroAEsquerda(num) {
     num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAesquerda(data.getDate());
    const mes = zeroAesquerda(data.getMonth() +1);
    const year = zeroAesquerda(data.getFullYear());
    const hour = zeroAesquerda(data.getHours());
    const min = zeroAesquerda(data.getMinutes());
    const seg = zeroAesquerda(data.getSeconds());

    return `${dia}/${mes}/${year} ${hour}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)