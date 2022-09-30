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
//Percorra o array imprimindo todos os valores nele contidos com a função console.log(); Some todos os valores contidos no array e imprima o resultado; Calcule e imprima a média aritmética dos valores contidos no array; A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos. Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

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

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;

/*
let numbers = [5, 9, 101, 19, 70, 8, 100, 2, 35, 27];
let bigger = 0;

for (let index1 = 0; index1 < numbers.length; index1 +=1){
    if (numbers[index1] > bigger){
        bigger = numbers[index1];
    }
}
console.log(bigger);
*/
/*

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”; >>>>>>>>EMBRAZADO<<<<<<<<<<

let numbers = [50, 90, 1010, 191, 70, 8, 100, 2, 350, 270];
let odd = [0];
let cont = 0;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index]%2 !== 0){
        odd[cont] = numbers[index];
        cont += 1;
    }
    else {}       
}

if (odd.length === 1 && odd[0] === 0){
    console.log('Nenhum valor ímpar encontrado.');
}
else {
    console.log(odd);
}
*/
/*

//Utilizando for, descubra qual o menor valor contido no array e imprima-o; >>>Bem melhor que o primeiro!!!

let numbers = [1, 9, 101, 19, 70, 8, 100, 2, 35, -2];
let small = numbers[0];

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] < small){
        small = numbers[index];
    }
    else {}
}
console.log(small);
*/
/*

//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let array = [0];
let arrayDivision = [0]
for (let index = 0; array.length < 25; index += 1){
    array[index] = (index + 1);
    arrayDivision[index] = (index + 1)/2;
}
console.log('array: ' + array);
console.log('arrayDivision: ' + arrayDivision);
*/
/*

//Ordene o array numbers em ordem crescente e imprima seus valores; >>>>>>>>>>>>>>>>>>>>>>>>>>>COISA FINA

let array = [1, 3, 5, 2, 0];

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
        console.log(array);
      }
    }
  }
*/
/*
  //Ordene o array numbers em ordem decrescente e imprima seus valores;

  let numbers = [5, 9, 3, 0, 19, 70, 8, 100, 2, 35, 27];

  for (let index = 0; index < numbers.length; index += 1){
    for (let indexTwo = 0; indexTwo < index; indexTwo += 1){
        if (numbers[index] > numbers[indexTwo]){
            let box = numbers[index];
            numbers[index] = numbers[indexTwo];
            numbers[indexTwo] = box;
            console.log(numbers);
        }
    }
  }
*/

//Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array= [];

for (let index = 0; index < numbers.length; index += 1){
    if (index + 1 < numbers.length){
        array.push(numbers[index] * numbers[index +1]);
// Ou:       array[index] = (numbers[index] * numbers[index + 1]);
    }
    else {
        array.push(numbers[index]*2);
// Ou:        array[index] = numbers[index]*2;
    }
}
console.log(array);