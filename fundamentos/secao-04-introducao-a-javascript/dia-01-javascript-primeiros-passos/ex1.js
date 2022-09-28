/*let patientId = 50;
let isEnrolled = true;
const patientInf = {
    firstName: 'Ana',
    lastName: 'Santos',
};
const patientEmail = 'ana@email.com'

console.log('patientId');


const base = 5;
const heigth = 8;
const area = (base * heigth);
console.log(area);
const perimeter = (2 * base + 2 * heigth);
console.log(perimeter);


const note = 99;

if (note >= 80) {
    console.log('Parabéns, você foi aprovado!!');
}
else if (note < 80 && note >= 60) {
    console.log('Você está em nossa lista de espera.');
}
else {
    console.log('Você está REPROVADO');
}

const conditionOne = true;
const conditionTwo = true;

console.log(conditionOne && conditionTwo);


const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;
console.log(listaDeCompras);



const currentHour = 5;
let message = null;

if (currentHour > 22) {
    console.log('Não deveríamos comer nada, é hora de dormir');
}
else if (currentHour >= 18 && currentHour < 22) {
    console.log('Rango da noite, vamos jantar :D');
}
else if (currentHour >=14 && currentHour < 18) {
    console.log('Vamos fazer um bolo pro café da tarde?');
}
else if (currentHour > 11 && currentHour < 14) {
    console.log('Hora do almoço!');
}
else if (currentHour > 4 && currentHour < 11) {
    console.log('Hmmmmm, cheirinho de café passado!');
}
else{
    console.log('Horário não está entre 4 e 24');
}

console.log(message);



let weekDay = "sabado";

if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
    console.log('Dia de TRYBE')
}

else if (weekDay === 'sabado' || weekDay === 'domingo') {
    console.log('FINALMENTE');
}

else {}




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




mes = 'Trybe';
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


let status = 'lista';

switch (status){
    case 'aprovada':
    console.log('Aprovada!');
    break;

    case 'lista':
    console.log('Você está em nossa lista de espera!');
    break;

    case 'reprovada':
    console.log('Você foi reprovada.');
    break;

    default: 
    console.log('?');
}

*/

