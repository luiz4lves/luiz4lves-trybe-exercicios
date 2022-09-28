/*
const myName = 'Luiz Antonio';
const birthCity = 'Rio de Janeiro';
let birthYear = 1990;

birthYear = 2030;

console.log(birthCity + ' ' + birthYear);
*/
/*
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
*/
/*
const base = 5;
const heigth = 8;
const area = (base * heigth);
const perimeter = (2*base + 2*heigth)

console.log(area);
console.log(perimeter);
*/
/*
const nota = 0;

if (nota >= 80 && nota <= 100){
    console.log('Parabéns, você foi aprovad@!');
}
else if (nota < 80 && nota >= 60){
    console.log('Você está em nossa lista de espera');
}
else if (nota < 60){
    console.log('Você foi reprovad@');
}
else {
    console.log('Entre com uma nota de 0 à 100.');
}
*/
/*
const currentHour = 19;
let message = '';

if (currentHour >= 22){
    console.log('Não deveríamos comer nada, é hora de dormir');
}
else if (currentHour >= 18 && currentHour < 22){
    message = 'Rango da noite, vamos jantar :D';
}
else if (currentHour >= 14 && currentHour < 18){
    message = 'Vamos fazer um bolo pro café da tarde?';
}
else if (currentHour >= 11 && currentHour < 14){
    message = 'Hora do almoço!!!';
}
else if(currentHour >= 4 && currentHour < 11){
    message = 'Hora do almoço!!!';
}

console.log(message);
*/
/*
let weekDay = 'domingo';

if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira'){
    console.log('Oba, mais um dia de aprendizado na Trybe >:D');
}
else if (weekDay === 'sábado' || weekDay === 'domingo'){
    console.log('Finalmente!');
}
else {
    console.log('Entre com um dia da semana');
}
*/
/*
// Nesse exemplo o "switch/case" deverá imprimir no terminal a classificação de quais filmes podem ser assistidos
// de acordo com a faixa etária de uma pessoa.

let faixaEtaria = 'adulto';

switch (faixaEtaria) {
  case 'adolescente':
    // Caso a variável seja "adolescente" então entraremos na lógica abaixo.

    console.log('Consulte a classificação do filme');
    // Quando a pessoa for adolescente essa será a mensagem impressa no console.

    break;
    
    // O "break" serve para que o código não continue rodando caso seu resultado já tenha sido atingido
  case 'adulto':
    // Após implementar a lógica de um case, você pode abrir outro case.
    // Agora vamos fazer a lógica do que deve ocorrer se a pessoa for adulta

    console.log('A pessoa adulta é classificada para assistir qualquer filme')
    //caso seja adulto essa mensagem deverá aparecer no terminal

    break;
    // Interrompemos o fluxo novamente caso a pessoa seja adulta
    case 'idoso':
      // Repetimos o mesmo processo para o case "idoso"
      console.log('A pessoa idosa é classificada para assistir qualquer filme');
      break
  default:
    // O "default" é utilizado como um retorno padrão caso o valor passado não encaixe em nenhum dos cases
    // Ou seja, se a pessoa, for criança, recém nascida, ou pertencente à qualquer outra faixa etária, essa será a lógica implementada.
    console.log('só pode assistir filmes livres');
    // note que não é necessário utilizar o break após o default. Como todo o código já foi executado, não precisamos interromper o funcionamento do mesmo.
}
*/
/*
mes = 'abril';
let estacaoDoAno = '?';

switch (mes) {
    case 'janeiro':
    case 'fevereiro':
    case 'março':
        estacaoDoAno = 'Verão';
        break;
    case 'abril':
    case 'maio':
    case 'junho':
        estacaoDoAno = 'Outono';
        break;
    case 'julho':
    case 'agosto':
    case 'setembro':
        estacaoDoAno = 'Inverno';
        break;
    case 'outubro':
    case 'novembro':
    case 'dezembro':
        estacaoDoAno = 'Primavera';
}

console.log(estacaoDoAno); // 'Outono'
*/

let status = 'reprovada';

switch (status) {
    case 'aprovada':
        console.log('Parabéns, você foi aprovada!');
        break;
    case 'lista':
        console.log('Você está em nossa lista de espera');
        break;
    case 'reprovada':
        console.log('Você foi eliminada.');
        break;
    default:
        console.log('Opção inválida.');
}
