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

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let days = document.getElementsByTagName('div')[0];
const createUl = document.createElement('ul');
createUl.id = 'days';
days.appendChild(createUl);

const daysOfMonth = document.getElementById('days');

function dias(){

  for (let index = 0; index < decemberDaysList.length; index += 1){
    const containerDay = decemberDaysList[index];
    const createLi = document.createElement('li');
    createLi.className = 'day';
    createLi.innerHTML = containerDay;

    daysOfMonth.appendChild(createLi);
    
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
  
function buttonHoliday(buttonName){
  const containerButton = document.getElementsByClassName('buttons-container')[0];
  const button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerText = buttonName;

  containerButton.appendChild(button);
}

buttonHoliday('Feriado');