/*
const a = 7;
const b = 5;
let sum = (a + b);
let subtraction = (a - b);
let multiplication = (a *  b);
let division = (a / b);
let mod = (a % b);

console.log(sum);
console.log(subtraction);
console.log(multiplication);
console.log(division);
console.log(mod);
*/
/*
const n1 = 10;
const n2 = 2;

if (n1 < n2) {
    console.log('Número maior: ' + n2);
}
else {
    console.log('Número maior: ' + n1);
}
*/
/*
const n1 = 1;
const n2 = 4;
const n3 = 3;

if (n1 > n2 && n1 > n3){
    console.log('Número maior: ' + n1);
}
else if (n2 > n1 && n2 > n3){
    console.log('Número maior: ' + n2);
}
else {
    console.log('Número maior: ' + n3);
}
*/
/*
const number = 1;

if (number < 0){
    console.log('negative');
}
else if (number > 0){
    console.log('positive');
}
else {
    console.log('zero');
}
*/
/*
const angleA = 45;
const angleB = 45;
const angleC = 90;

let answer

if (angleA + angleB + angleC == 180){
    answer = true;
}
else {
    answer = false;
    console.log('Os valores dos ângulos não somam 180º para serem um triângulo');
}
console.log(answer);
*/
/*
let part = 'CaVaLo'

part = part.toLowerCase()

switch (part){
    case 'rainha':
        console.log('Mova-se em qualquer direção.');
        break;
    case 'rei':
        console.log('Mova-se em qualquer direção.');
        break;
    case 'torre':
        console.log('Mova-se em linha reta.');
        break;
    case 'bispo': 
        console.log('Mova-se em diagonal.');
        break;
    case 'cavalo':
        console.log('Mova-se em "L".');
        break;
    case 'peão':
        console.log('Mova-se em linha reta a diante.');
        break;
    default:
        console.log('Peça indefinida.');
}
*/

const score = 0;

if ( score >= 90 && score <= 100){
    console.log('A');
}
else if (score >= 80 && score < 90){
    console.log('B');
}
else if (score >= 70 && score < 80){
    console.log('C');
}
else if (score >= 60 && score < 70){
    console.log('D');
}
else if (score >= 50 && score < 60){
    console.log('E');
}
else if (score < 50 && score >=0){
    console.log('F');
}
else {
    console.log('Valor incorreto.');
}