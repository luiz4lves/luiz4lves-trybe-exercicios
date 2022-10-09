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

//>>>>>>>>>>>>>>>>>>> PARTE I <<<<<<<<<<<<<<<<<<<
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

//>>>>>>>>>>>>>>>>>>> PARTE II <<<<<<<<<<<<<<<<<<<
function buttonHoliday(buttonName){
  
  const buttonHoliday = document.createElement('button');
  buttonHoliday.id = 'btn-holiday';
  buttonHoliday.innerText = buttonName;

  containerButtons.appendChild(buttonHoliday);
}

buttonHoliday('Feriado');

//>>>>>>>>>>>>>>>>>>> PARTE III <<<<<<<<<<<<<<<<<<<
function changeColorHolidays(){

  const divButtonHoliday = document.getElementsByTagName('button')[0];
  const allHolidays = document.getElementsByClassName('holiday');
  const backgroundColorInitial = 'rgb(238,238,238)';
  const backgroundColorChange = 'purple';
  
  divButtonHoliday.addEventListener('click', function() {
    for(let index = 0; index < allHolidays.length; index += 1){
      if(allHolidays[index].style.backgroundColor === backgroundColorChange){
        allHolidays[index].style.backgroundColor = backgroundColorInitial;
        console.log(allHolidays);
      }
      else {
      allHolidays[index].style.backgroundColor = backgroundColorChange;
      }
    }
  })
}
changeColorHolidays();

//>>>>>>>>>>>>>>>>>>> PARTE IV <<<<<<<<<<<<<<<<<<<
function friday(buttonName){

  const buttonFriday = document.createElement('button');
  
  buttonFriday.id = 'btn-friday';
  buttonFriday.innerHTML = buttonName;
  containerButtons.appendChild(buttonFriday);

}
friday('Friday')

//>>>>>>>>>>>>>>>>>>> PARTE V <<<<<<<<<<<<<<<<<<<
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