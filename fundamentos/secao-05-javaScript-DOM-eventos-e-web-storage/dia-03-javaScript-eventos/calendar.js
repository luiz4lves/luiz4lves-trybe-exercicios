function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
const containerButtons = document.getElementsByClassName('buttons-container')[0];
const ulDays = document.getElementById('days');
const divMyTasks = document.getElementsByClassName('my-tasks')[0];

// //>>>>>>>>>>>>>>>>>>> PARTE I <<<<<<<<<<<<<<<<<<<
// Crie um calendário dinamicamente.

// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.

// Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.

// A tag <ul> deve conter o id 'days'
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>


const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let days = document.getElementsByTagName('div')[0];
const createUl = document.createElement('ul');
createUl.id = 'days';
days.appendChild(createUl);

function dias(){

  for (let index = 0; index < decemberDaysList.length; index += 1){
    const containerDay = decemberDaysList[index];
    const createLi = document.createElement('li');
    createLi.className = 'day';
    createLi.innerHTML = containerDay;

    ulDays.appendChild(createLi);
    
    let holiday = decemberDaysList[index] === 24 || decemberDaysList[index] === 25 || decemberDaysList[index] === 31;
    
    if (holiday){
      createLi.className += ' ' + 'holiday';
    }
  
    let friday = decemberDaysList[index] === 4 || decemberDaysList[index] === 11 || decemberDaysList[index] === 18 || decemberDaysList[index] === 25;

    if (friday){
      createLi.classList += ' ' + 'friday';
    }
  }
}
dias();

//>>>>>>>>>>>>>>>>>>> PARTE II <<<<<<<<<<<<<<<<<<<

// Implemente uma função que crie dinamicamente um botão com o nome “Feriados”.
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

function buttonHoliday(buttonName){
  
  const buttonHoliday = document.createElement('button');
  buttonHoliday.id = 'btn-holiday';
  buttonHoliday.innerText = buttonName;

  containerButtons.appendChild(buttonHoliday);
}

buttonHoliday('Feriado');

//>>>>>>>>>>>>>>>>>>> PARTE III <<<<<<<<<<<<<<<<<<<

// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".

// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor “rgb(238,238,238)”.

function changeColorHolidays(){

  const divButtonHoliday = document.getElementsByTagName('button')[0];
  const allHolidays = document.getElementsByClassName('holiday');
  const backgroundColorInitial = 'rgb(238,238,238)';
  const backgroundColorChange = 'pink';
  
  divButtonHoliday.addEventListener('click', function() {
    for(let index = 0; index < allHolidays.length; index += 1){
      if(allHolidays[index].style.backgroundColor === backgroundColorChange){
        allHolidays[index].style.backgroundColor = backgroundColorInitial;
        
      }
      else {
      allHolidays[index].style.backgroundColor = backgroundColorChange;
      }
    }
  })
}
changeColorHolidays();

//>>>>>>>>>>>>>>>>>>> PARTE IV <<<<<<<<<<<<<<<<<<<

// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira".
// Sua função deve receber como parâmetro a string “Sexta-feira”;
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

function friday(buttonName){

  const buttonFriday = document.createElement('button');
  
  buttonFriday.id = 'btn-friday';
  buttonFriday.innerHTML = buttonName;
  containerButtons.appendChild(buttonFriday);

}
friday('Friday')

//>>>>>>>>>>>>>>>>>>> PARTE V <<<<<<<<<<<<<<<<<<<

// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.

function changeText(){

  const allFridays = document.getElementsByClassName('friday');
  const divButtonFriday = document.getElementById('btn-friday');
  const textChange = 'Sextou';
  const arrayInitial = [4, 11, 18, 25];
  divButtonFriday.addEventListener('click', function(){ 
    
      for (let index = 0; index < allFridays.length; index += 1){   
          
        if(allFridays[index].innerHTML !== textChange){
        allFridays[index].innerHTML = textChange;
        }
        else {
        allFridays[index].innerHTML = arrayInitial[index];
      }
    }

  })

}
changeText();

//>>>>>>>>>>>>>>>>>>> PARTE VI <<<<<<<<<<<<<<<<<<<

// Implemente duas funções que criem um efeito de “zoom”.
// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

// Dica - Propriedade: event.target.

function dayMouseOver(){

  ulDays.addEventListener('mouseover', function() {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
}
dayMouseOver();

function dayMouseOut(){
  ulDays.addEventListener('mouseout', function() {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
}

dayMouseOut();

//>>>>>>>>>>>>>>>>>>> PARTE VII <<<<<<<<<<<<<<<<<<<

// Implemente uma função que adicione uma tarefa personalizada ao calendário.
// A função deve receber como parâmetro a string com o nome da tarefa (ex: “cozinhar”) e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function personalizedTask (string){
  
  const span = document.createElement('span');
  span.innerHTML = string;

  divMyTasks.appendChild(span);
}
personalizedTask('Cozinhar');

//>>>>>>>>>>>>>>>>>>> PARTE VIII <<<<<<<<<<<<<<<<<<<

// Implemente uma função que adicione uma legenda com cor para a tarefa.
// Essa função deverá receber como parâmetro uma string (‘cor’) e criar dinamicamente um elemento de tag <div> com a classe task
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks"


function subtitleWithColor(color){

  const subtitle = document.createElement('div');
  subtitle.style.backgroundColor = color;
  
  subtitle.className = 'task';
  divMyTasks.appendChild(subtitle);
}
subtitleWithColor('magenta');

//>>>>>>>>>>>>>>>>>>> PARTE IX <<<<<<<<<<<<<<<<<<<

// Implemente uma função que selecione uma tarefa.
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.

function taskSelectedOrNotSelected() {
  let task = document.querySelector('.task');
  let selectedTask = document.getElementsByClassName('task selected');

  task.addEventListener('click', function(event){
      
    if (selectedTask.length === 0){
      event.target.className = 'task selected';
    }
    else{
      event.target.className = 'task';
    }
    console.log(task);
  })
}
taskSelectedOrNotSelected();

//>>>>>>>>>>>>>>>>>>> PARTE X <<<<<<<<<<<<<<<<<<<

// Implemente uma função que atribua a cor da tarefa ao dia do calendário.
// Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119)

function colorDayTask(){

  const selectedTask = document.getElementsByClassName('task selected');
  const taskDiv = document.querySelector('.task');
  const taskColor = taskDiv.style.backgroundColor;
  const colorOriginTask = 'rgb(119,119,119)';

  ulDays.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if( selectedTask.length > 0 && eventTargetColor !== taskColor){
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    }
    else if(eventTargetColor === taskColor){
      event.target.style.color = colorOriginTask;
    }
  })
}
colorDayTask();

//>>>>>>>>>>>>>>>>>>> PARTE BÔNUS <<<<<<<<<<<<<<<<<<<

// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto “COMPROMISSOS”, adiciona o item à lista “MEUS COMPROMISSOS” ao clicar no botão “ADICIONAR”.
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em “ADICIONAR”.
// Ao pressionar a tecla “enter” o evento também deverá ser disparado.
// Dica - Propriedade: key.

function commitments(){
  const getInputField = document.getElementById('task-input');
  const addInputButton = document.getElementById('btn-add');
  const getTaskList = document.getElementsByClassName('task-list')[0];

  addInputButton.addEventListener('click', function(){
    if (getInputField.value.length > 0){
     // Caso o input tenha um valor de caracteres maior que 0
     let newLi = document.createElement('li');
     getTaskList.appendChild(newLi);
     getInputField.value = '';
    }
    else{
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && getInputField.value.length > 0){
     // Aqui ele verifica se a tecla pressionada é o "Enter" e a quantidade de letras
     let newLi = document.createElement('li');
     newLi.innerText = getInputField.value;
     getTaskList.appendChild(newLi);
     getInputField.value = '';
    }
  })
}
commitments();