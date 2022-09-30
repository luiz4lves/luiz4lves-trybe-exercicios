/*
// crie um algoritmo que imprima na tela o fatorial de 10;

let f = 1;

for (let index = 10; index > 0; index -= 1){
        f *= index;
}
console.log(f);

*/
/*

//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tudo que eu escrever vai ser retornado ao contrário'
let invertedWord = '';

for (let index = 0; index < word.length; index += 1){
    invertedWord += word[word.length - 1 - index];
}
console.log(invertedWord);

*/
/*

//Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css', 'agora eu sou o maiorzão', 'oi'];
let bigger = [array[0]];
let small = [array[0]];

for(let index = 0; index < array.length; index += 1){
    if (array[index].length > bigger[0].length){
        bigger[0] = array[index];
    }
    if (array[index].length < small[0].length){
        small[0] = array[index];
    }
}
console.log('Maior palavra: ' + bigger);
console.log('Menor palavra: ' + small);

*/
/*
//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50

let biggerPrime = 0;

for (let index = 2; index <= 50; index += 1){
    let isPrime = true;
    for (let index2 = 2; index2 < index; index2 += 1){
        if (index % index2 === 0){
            isPrime = false;
        }
    }
    if (isPrime){
        biggerPrime = index;
        console.log(index);
    }
}
console.log('Maior primo:' + biggerPrime);

*/
let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);