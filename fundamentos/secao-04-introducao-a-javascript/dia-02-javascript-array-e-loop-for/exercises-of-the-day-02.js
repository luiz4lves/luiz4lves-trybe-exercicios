//sobre arrays -> 
//.length traz a quantidade de elementos (sempre iniciando em zero);
// .push() adiciona item na última posição do array;
//.unshift() adiciona item à primeira posição do array;
//.pop() remove o último item do array;
//.shift() remove o primeiro item do array;
//indexOf() procura índice de um item no array;

// >>>>>>>>>>>>>>ARRAYS

/*
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
*/
/*
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro
*/
/*
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']
*/
/*
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.pop();  // remove a última tarefa
console.log(tasksList);

// [ 'Tomar café', 'Reunião' ]
*/
/*
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);
*/
/*
// >>>>>>>>>>>>>>>>>>PARA FIXAR

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf('Serviços');
let indexOfPortfolio = menu.indexOf('Portfólio');

menu.push('Contato');

console.log(menuServices);
console.log(indexOfPortfolio);
console.log(menu);
*/

// >>>>>>>>>>>>>>>>>>>FOR
/*
let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}
*/

//>>>>>>>>>>>>>>>PARA FIXAR
/*
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1){
    console.log(groceryList[index]);
}
*/

// >>>>>>>>>>>>>>>>>>>FOR/OF
/*
let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}
*/
/*
let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
*/
/*
let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 5;
  console.log(sum);
}
*/

//>>>>>>>>>>PARA FIXAR
/*
let nomes = ['Luiz', 'Karla', 'Luiza', 'Vitor', 'Caio'];

for (let n of nomes){
    console.log(n);
}
*/

// >>>>>>>>>>>>>>EXERCÍCIOS
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let average = 0;

for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
    sum = sum + numbers[index];
}
average = sum/numbers.length
console.log('Soma: ' + sum);
console.log('Média: ' + average);

if (average > 20){
    console.log('Média maior que 20.');
}
else if (average <= 20){
    console.log('Média menor ou igual a 20');
}
else {}
*/

let numbers = [5, 9, 101, 19, 70, 8, 100, 2, 35, 27];
let bigger = 0;

for (let index1 = 0; index1 < numbers.length; index1 +=1){
    if (numbers[index1] > bigger){
        bigger = numbers[index1];
    }
}
console.log(bigger);