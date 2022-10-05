/*
// parentNode: retorna o nó pai.

// parentElement: retorna o elemento pai.

// childNodes: retorna um NodeList com todos os nós filhos.

// children: retorna um HTMLCollection com todos os elementos filhos.

// firstChild: retorna o primeiro nó filho.

// firstElementChild: retorna o primeiro elemento filho.

// lastChild: retorna o último nó filho.

// lastElementChild: retorna o último elemento filho.

// nextSibling: retorna o próximo nó.

// nextElementSibling: retorna o próximo elemento.

// previousSibling: retorna o nó anterior.

// previousElementSibling: retorna o elemento anterior.

//Primeiro, foi selecionado o elemento div utilizando o seu id, ‘start’. Na sequência, aplicadas as propriedades nextSibling e nextElementSibling. Você pode ver que nextSibling retornará o texto “nó” que representa o próximo nó do DOM a partir da div, enquanto nextElementSibling retornará o próximo elemento propriamente, ou seja, o elemento <p>.

console.log(document.getElementById('start').nextSibling);
console.log(document.getElementById('start').nextElementSibling);

*/
/*

// Acesse o elemento elementoOndeVoceEsta.

console.log(document.getElementById('elementoOndeVoceEsta'));

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

elementoOndeVoceEsta.parentElement.style.color = 'red';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

elementoOndeVoceEsta.firstElementChild.innerText = 'Acessando elemento atravéz do firstElementChild'

// Acesse o primeiroFilho a partir de pai.

console.log(pai.firstElementChild);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

console.log(elementoOndeVoceEsta.previousElementSibling);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

console.log(elementoOndeVoceEsta.nextSibling);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

console.log(elementoOndeVoceEsta.nextElementSibling);

// Agora acesse o terceiroFilho a partir de pai.

console.log(pai.lastElementChild.previousElementSibling);

*/

