
// Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body; >>>UTILIZEI getElementsByTagName AQUI. Similar ao uso de  getElementsByClassName, precisa especificar "[0]" mesmo tendo apenas 1<<<
const body = document.getElementsByTagName('body')[0]
const h1 = document.createElement('h1');
h1.innerText = 'Exercício - JavaScript DOM';
body.appendChild(h1);

// Adicione a tag main com a classe main-content como filho da tag body;
const main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2; >>>Atribuindo filho chamando a constante criada anteriormente<<<
const section1 = document.createElement('section');
section1.className = 'center-content';
main.appendChild(section1);

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const p = document.createElement('p');
p.innerText = 'Texto do primeiro parágrafo (body->main->section->p)';
section1.appendChild(p);

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const section2 = document.createElement('section');
section2.className = 'letf-content';
main.appendChild(section2);

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const section3 = document.createElement('section');
section3.className = 'right-content';
main.appendChild(section3);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
section2.appendChild(img);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;
const listaNaoOrdenada = document.createElement('ul');
section3.appendChild(listaNaoOrdenada);

const array = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let index in array){
    const li = document.createElement('li');
    listaNaoOrdenada.appendChild(li);
    li.innerHTML = array[index];
}

//ou
// for (let index = 0; index < array.length; index += 1){
//     const li = document.createElement('li');
//     listaNaoOrdenada.appendChild(li);
//     li.innerHTML = array[index];
// }

// Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
for (let index = 0; index < 3; index += 1){
    const h3 = document.createElement('h3');
    main.appendChild(h3);
}

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

// Adicione a classe title na tag h1 criada;
h1.className = 'title';

// Adicione a classe description nas 3 tags h3 criadas;
for (let index = 0; index < document.getElementsByTagName('h3').length; index += 1){
    const classe = document.getElementsByTagName('h3')[index];
    classe.className = 'description';
}

// Remova a section criada no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
const sectionClassLeftContent = main.firstElementChild.nextElementSibling;
main.removeChild(sectionClassLeftContent);

//ou

// const sectionClassLeftContent = document.getElementsByClassName('letf-content')[0];
// main.removeChild(sectionClassLeftContent);

// Centralize a section criada no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
const sectionRightContent = document.getElementsByClassName('right-content')[0];
sectionRightContent.style.marginRight = 'auto';

// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
const papiPink = document.getElementsByClassName('center-content')[0];
papiPink.parentNode.style.backgroundColor = 'pink';

// Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
const arrayLi = document.getElementsByTagName('li');
for (let index = arrayLi.length - 1; index >= 0; index -= 1){
    const li = arrayLi[index];
    if(li.innerHTML === 'nove' || li.innerHTML === 'dez'){
        li.remove();
    }
}
