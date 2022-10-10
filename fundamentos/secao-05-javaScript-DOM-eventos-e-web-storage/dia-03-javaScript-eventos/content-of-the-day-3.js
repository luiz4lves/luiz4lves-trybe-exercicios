const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// RE.: ocorre devido a utilização da função -> transform: translateY(-20px);
// RE.: Notei também que existe uma transição assim que a página é carregada. Isso acontece devido ao uso de -> transition: all 0.25s ease; ainda não sei manipular isso, mas achei interessante alterar os valores de tempo de transição.

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function addOrRemoveClass(event){
    const li = document.querySelector('.tech');
    li.classList.remove('tech');
    event.target.classList.add('tech');
    // input.value = '';
    console.log(document.getElementsByTagName('li'));
}

firstLi.addEventListener('click', addOrRemoveClass);
secondLi.addEventListener('click', addOrRemoveClass);
thirdLi.addEventListener('click', addOrRemoveClass);

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('input', function(event) {
    const changeText = document.querySelector('.tech');
    changeText.innerText = event.target.value;
});

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
myWebpage.addEventListener('dblclick', function() {
    window.location.replace('https://blog.betrybe.com/');
  });


// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', function(event) {
    event.target.style.color = 'red';
  });
  
// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.