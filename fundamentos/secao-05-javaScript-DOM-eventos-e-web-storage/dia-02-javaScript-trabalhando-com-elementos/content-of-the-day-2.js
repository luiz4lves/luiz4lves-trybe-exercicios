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

*/

//>>>>>>>>>>>>>>>> PARTE I <<<<<<<<<<<<<<<<<<<<<<<<<<<<
/*

console.log(document.getElementById('start').nextSibling);
console.log(document.getElementById('start').nextElementSibling);

//Primeiro, foi selecionado o elemento div utilizando o seu id, ‘start’. Na sequência, aplicadas as propriedades nextSibling e nextElementSibling. Você pode ver que nextSibling retornará o texto “nó” que representa o próximo nó do DOM a partir da div, enquanto nextElementSibling retornará o próximo elemento propriamente, ou seja, o elemento <p>.


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

//>>>>>>>>>>>>>>>> PARTE II <<<<<<<<<<<<<<<<<<<<<<<<<<<<
/*

// Crie um irmão para elementoOndeVoceEsta.

const pai = document.getElementById('pai');
const novoIrmao = document.createElement('section');
novoIrmao.id = 'irmaoMaisNovo';
pai.appendChild(novoIrmao);
console.log(document.getElementById('pai'));

// Crie um filho para elementoOndeVoceEsta.

const filho = document.getElementById('elementoOndeVoceEsta');
const novoFilho = document.createElement('section');
novoFilho.id = 'filhoMaisNovo';
filho.appendChild(novoFilho);

// Crie um filho para primeiroFilhoDoFilho.

const filhoDoFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const outroFilho = document.createElement('section');
outroFilho.id = 'filhoDoFilhoDoFilho';
filhoDoFilhoDoFilho.appendChild(outroFilho);

// A partir desse filho criado, acesse terceiroFilho.

console.log(filhoDoFilhoDoFilho.parentElement.nextElementSibling);
*/

//>>>>>>>>>>>>>>>> PARTE III <<<<<<<<<<<<<<<<<<<<<<<<<<<<
/*

// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

let pai = document.getElementById('pai');
const todosOsFilhos = pai.childNodes;

for(let index = todosOsFilhos.length -1 ; index >= 0; index -= 1){
    const filhoAtual = todosOsFilhos[index];
    if(filhoAtual.id !== 'elementoOndeVoceEsta'){
        filhoAtual.remove();
    }
}
const segundoEUltimoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilho.remove();

console.log(paiDoPai);

//>> OBS.: só funcionou utilizando o decremento de "index"

*/