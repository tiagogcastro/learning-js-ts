function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        paragraphError: document.querySelector('.error'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        clearDisplay() {
            this.display.value = ''
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    this.paragraphError.innerHTML = 'Conta inválida!';
                    return
                }

                this.display.value = String(conta.toFixed(2));
                this.paragraphError.innerHTML = '';
            } catch(err) {
                this.paragraphError.innerHTML = 'Conta inválida!';
                return;
            }
        },
        
        pressionaEnter() {
            this.display.addEventListener('keyup', (event) => {
                if(event.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },

        cliqueBotoes() {
            // this -> calculadora
            // Se o this precisar ser document, n usar arrow
            document.addEventListener('click', (event) => {
                const element = event.target;

                if(element.classList.contains('btn_num')) {
                    this.btnParaDisplay(element.innerText);
                };

                if(element.classList.contains('btn_clear')) {
                    this.clearDisplay();
                };

                if(element.classList.contains('btn_del')) {
                    this.apagaUm();
                };

                if(element.classList.contains('btn_eq')) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(value) {
            this.display.value += value;
        },

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();