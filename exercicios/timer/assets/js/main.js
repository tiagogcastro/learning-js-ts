const relogio = () => {
    function getTimeFromSeconds(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    const relogio = document.querySelector('.relogio');
    let seconds = 0, timer;

    function startRelogio() {
        timer = setInterval(() => {
            seconds++;
            relogio.innerHTML = getTimeFromSeconds(seconds);
        }, 1000);
    }

    document.addEventListener('click', (event) => {
        const element = event.target;

        if(element.classList.contains('iniciar')) {
            clearInterval(timer);
            relogio.classList.remove('pausado');
            relogio.classList.remove('pausadoPiscando');
            startRelogio();
        }

        if(element.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
            relogio.classList.add('pausadoPiscando');
        }

        if(element.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.classList.remove('pausado');
            relogio.classList.remove('pausadoPiscando');
            seconds = 0;
            relogio.innerHTML = '00:00:00';
        }

    })
}

relogio()