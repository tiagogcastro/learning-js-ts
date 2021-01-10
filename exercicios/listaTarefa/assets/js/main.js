const input_tarefa = document.querySelector('.input_tarefa');
const btn_tarefa = document.querySelector('.btn_tarefa');
const tarefas = document.querySelector('.tarefas');

const error = document.querySelector('.error');

function createNewElement(element) {
    const createLi = document.createElement(element);
    return createLi
}

input_tarefa.addEventListener('keypress', (event) => {
    if(event.keyCode === 13) {
        if(!input_tarefa.value) return;
        criaTarefa(input_tarefa.value);
    }
})

function limpaInput(){
    input_tarefa.value = '';
    input_tarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar essa tarefa');
    li.appendChild(botaoApagar);
}

function criaTarefa(textInput) {
    const elementLi = createNewElement('li');
    elementLi.innerHTML = textInput;
    tarefas.appendChild(elementLi);
    limpaInput();
    criaBotaoApagar(elementLi);
    salvarTarefas();
}

btn_tarefa.addEventListener('click', () => {
    if(!input_tarefa.value) {
        error.innerHTML =  'Você não pode adicionar uma tarefa sem conteudo!';
    } else {
        error.innerHTML = '';
        criaTarefa(input_tarefa.value);
    } 
    
});

document.addEventListener('click', (element) => {
    const el = element.target;
    if(el.classList.contains('apagar')) {
        if(!confirm(`Tem certeza que deseja apagar a tarefa ?`)) return;
        el.parentElement.remove();
        salvarTarefas()
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    if(!listaDeTarefas) {

    }
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();