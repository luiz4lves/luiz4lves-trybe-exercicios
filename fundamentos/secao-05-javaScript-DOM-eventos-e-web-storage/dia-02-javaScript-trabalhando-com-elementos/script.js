// 1. Onde quero posicionar os elementos?

const container = document.querySelector('.main-box');

// 2. Qual é o elemento? Crio este elemento.
function createElement(form){
    const element = document.createElement('div');
    element.className = form;
    return element;
}
createElement()

// 3. Adiciono o elemento na estrutura HTML
function addElement(element){
    container.appendChild(createElement(element));
}

let features = ['green square small', 'red circle small', 'yellow square small'];

for (let i = 0; i < features.length; i += 1){
    addElement(features[i]);
}

//ou 

// for (let i of features){
//     addElement(i);
// }