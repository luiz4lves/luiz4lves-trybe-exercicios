/*
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList);

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

tasksList.push ('Exercícios da trybe')

tasksList.unshift('Acordar');

console.log(tasksList);

tasksList.pop();

tasksList.shift()

console.log(tasksList);

let indexOfTask = tasksList.indexOf('Reunião');

console.log(indexOfTask);

//procura por posição através do valor "serviços"

let menu =['home', 'serviços', 'portfólio', 'links'];

let menuServices = menu.indexOf('serviços');

console.log(menuServices);


//procura por posição do valor "portfólio"

let menu =['home', 'serviços', 'portfólio', 'links'];

let menuServices = menu.indexOf('portfólio');

console.log(menuServices);


//adiciona o valor "contato" ao final do array

let menu =['home', 'serviços', 'portfólio', 'links'];

menu.push('contato');

console.log(menu);


//utilizando loop for para imprimir valores de um array
let cars = ['Saab', 'Volvo', 'BMW'];

for (let index = 0; index < cars.length; index += 1){
    console.log(cars[index]);
}

let groceryList = ['arroz', 'feijão', 'alface', 'melancia'];

for (let index = 0; index < groceryList.length; index += 1){
    console.log(groceryList[index]);
}

let n = [1,2,3,4,5,6,7,8,9];
for (let n2 of n){
    console.log(n2)
}

let h = 'helo';
for (let h2 of h){
    console.log(h2);
}


let arrOfNumbers  = [11, 12, 13];
for (let sum of arrOfNumbers){
    sum += 1;
    console.log(sum);
}



let names = ['Luiz', 'Vitor', 'Augusto', 'Daniel', 'Thaysa', 'Carol'];

for (let display of names) {
    console.log(display);
}


//o while é usado principalmente quando não sei quantas vezes o loop irá se repetir. 

let counter = 0;

while (counter !== 5){
    counter += 1;
    console.log(counter);
}
console.log('Último valor atribuído: ' + counter);

function dice () {
    return Math.ceil(Math.random() * 6)
}
let d1 = dice();
let d2 = dice();
while (d1 !== d2) {
    d2 = dice()
    console.log(d2);
}
console.log(d2);


const peoples = ['luiz', 'vitor', 'marina', 'larissa'];
const escolhida = 0;

peoples [0] = 'antonio';
console.log(peoples);

peoples.pop();
console.log(peoples);
 console.log(peoples.length)



 const n = 9;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado);

 */