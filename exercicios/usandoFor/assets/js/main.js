const elementos = [
    {tag:'p', texto: 'frase 1'},
    {tag:'div', texto: 'frase 2'},
    {tag:'footer', texto: 'frase 3'},
    {tag:'section', texto: 'frase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++) {
    const { tag, texto } = elementos[i];
    let element = document.createElement(tag);
    // InnerText ou InnerHTHML
    element.innerText = texto;
    div.appendChild(element);

    // Com createTextNode
    let textCreate = document.createTextNode(texto)
    element.appendChild(textCreate)
    div.appendChild(element)
}

container.appendChild(div);