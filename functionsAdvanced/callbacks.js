function rand(min = 1000, max = 3000) {
    const numero = Math.random() * (max - min) + min;
    return Math.floor(numero);
}
function f1(callback) {
    setTimeout(() => {
        console.log('f1');
        if(callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(() => {
        console.log('f2');
        if(callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(() => {
        console.log('f3');
        if(callback) callback();
    }, rand());
}

f1(f1Callback);

function f1Callback() {
    f2(f2Cllback);
}

function f2Cllback() {
    f3(f3Cllback);
}

function f3Cllback() {
    console.log('Olá mundo!')
}