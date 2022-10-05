// >>>>>>>>>>>>>>>>>> getElementById getElementsByClassName getElementsByTagName querySelector querySelector querySelectorAll <<<<<<<<<<<<<<<<<<<

//Retorna todo o objeto inclusive tags
// console.log(document.getElementById('paragraph'));

//Retorna conteúdo de texto do objeto inclusive tags
//console.log(document.getElementById('paragraph').innerHTML);

//Retorna apenas o texto sem as tags
//console.log(document.getElementById('paragraph').innerText);

document.getElementById('page-title').innerText = 'Sete anos no Tibet';

//Estilizando diretamente através do document.getElementById

document.getElementById('second-paragraph').style.border = 'solid 1px red';

// Declarando como constante do parágrafo para adicionar estilização
const secondParagraph = document.getElementById('second-paragraph');

secondParagraph.style.color = 'blue';
secondParagraph.style.backgroundColor = 'grey'

const paragraph = document.getElementById('paragraph');

paragraph.style.color = 'purple';
paragraph.style.backgroundColor = 'green';

const subtitle = document.getElementById('subtitle');

subtitle.style.fontSize = '40px'

//Troca texto do bloco 2 acessando a posição do arrat [1]
//document.getElementsByClassName('b2')[1].innerText = 'Troca texto no JS'

//Troca todos os valores dos blocos com um loop for chamando o valor pelo getElementByClassName

let blocos = document.getElementsByClassName('b2');

for (let index = 0; index < blocos.length; index += 1){
    blocos[index].innerText = 'Bloco alterado no loop for acessado pelo getElementBtClassName'
};

let blocoDiv = document.getElementsByTagName('div');

for (let index = 0; index < blocoDiv.length; index += 1){
    blocoDiv[index].innerText = 'Bloco de "divs" alterado em loop for com acesso pelo getElementByTagName'
}

// Para chamar um Id com o querySelector -> document.querySelector('#descricaoDoId');
// Para chamar uma classe com o querySelector -> document.querySelector('.descricaoDoId');
// Para chamar uma tag com o querySelector -> document.querySelector('tag'); OBS.: neste caso irá buscar a primeira ocorrência da tag.

// Para acessar a classe bx com querySelector seria: document.querySelector('.b p')
// ou
// document.querySelector('.b .bx')

// <div class="b">
//     <p class="bx">1</p>
//     <p class="bx">2</p>
// </div>

//No caso acessaria APENAS A PRIMEIRA OCORRÊNCIA de "bx" dentro de "b"

//Utilizando o querySelectorAll no exemplo acima, se quisermos trocar o texto do segundo parágrafo:

//document.querySelectorAll('p')[1].innerText = 'Troca com querySelectorAll"






