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
/*
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
*/
/*
const numbers = [3,8,1];
let mod = [(numbers[0]%2), (numbers[1]%2), (numbers[2]%2)];

if (mod[0] == 0 || mod[1] == 0 || mod[2] == 0){
    console.log('true');
}
else {
    console.log('false');
}
*/
/*
const numbers = [2,8,2];
let mod = [(numbers[0]%2), (numbers[1]%2), (numbers[2]%2)];

if (mod[0] !== 0 || mod[1] !== 0 || mod[2] !== 0){
    console.log('true');
}
else {
    console.log('false');
}
*/
/*
const custo = 37.45;
const venda = 65.99;
const imposto = (custo*0.2);
const lucro = (venda - custo + imposto);

console.log('Este será o lucro com a venda de 1000 exemplares: R$' + lucro*1000);
*/

const salarioBruto = 3000.00;
let salarioBase = 0;
let valorIr = 0

if (salarioBruto <= 1556.94){
    salarioBase = (salarioBruto - salarioBruto*0.08);
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    salarioBase = (salarioBruto - salarioBruto*0.09);
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    salarioBase = (salarioBruto - salarioBruto*0.11);
}
else if (salarioBruto > 5189.82){
    salarioBase = (salarioBruto - 570.88);
}
else {
    console.log('Valor incorreto.');
}
if (salarioBase <= 1903.98){
    valorIr = 0;
}
else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
    valorIr = (salarioBase*0.075 - 142.80);
}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
    valorIr = (salarioBase*0.15 - 354.80);
}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
    valorIr = (salarioBase*0.225 - 636.13);
}
else if (salarioBase > 4664,68){
    valorIr = (salarioBase*0.275 - 869,36);
}
else {
    console.log('Valor incorreto');
}
console.log('Salário bruto: R$' + salarioBruto);
console.log('Salario base: R$' + salarioBase);
console.log('IR: R$' + valorIr);
console.log('Salário líquido: R$' + (salarioBase - valorIr));
