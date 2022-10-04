// o const é imutável - ao declarar const favoriteLanguage = 'Javascript', o valor de favoriteLanguage não pode ser alterado. Mas quando usamos o const para criar um objeto, o Javascript nos permite alterar as suas propriedades sem, contudo, reatribuir um novo objeto;
/*
const userInfo = {
    name: 'Cláudio',
    id: '5489-2',
    email: 'claudio@email.com',
  };
  
  userInfo.name = 'João';
  
  console.log(userInfo); 

  //Esse raciocínio também se aplica a um array. Podemos alterá-lo indiretamente adicionando/removendo um novo item sem sobrescrever o que já foi declarado

  const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro
*/

// >>>>>>>>>>>>>> TEMPLATE LITERALS <<<<<<<<<<<<<<<<<<

//A sintaxe do template literals pede para usarmos o sinal de crases no início e no final da frase, e variáveis dentro de um ${...}. Você também pode adicionar uma expressão dentro das chaves, como ${a + b}. Outra novidade é poder adicionar quebras de linha com o template literals sem a necessidade de concatená-las com o operador + e \n para trocar de linha.

/*

const myName = 'Isabella';
console.log('Hello' + ' ' + myName + '!');
//Com o uso do template literals
console.log(`Hello ${myName}!`);

// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
);

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

*/
/*

let pessoa = {
    nome: 'Luiz Antonio',
    sobrenome: 'Alves dos Santos',
    ano: '1990'
}
//Detalhe para "\n" para quebrar a linha
console.log(`Aluno: ${pessoa.nome} ${pessoa.sobrenome}\nIdade: ${2022 - pessoa.ano}`);

//Detalhe para quebra de linha com a quebra de linha dentro do log
console.log(`Aluno: ${pessoa.nome} ${pessoa.sobrenome}
Idade: ${2022 - pessoa.ano}`);

*/

// >>>>>>>>>>>>>> ARROW FUNCTION <<<<<<<<<<<<<<<<<<

// Declaração tradicional de função
/*
function printName() {
    const myName = 'Lucas';
    return myName;
  };

  console.log(printName());

*/

// Atribuindo uma função a uma variável

/*
    const printName = function () {
    const myName = 'Lucas';
    return myName;
  };
  
  console.log(printName());

*/  
/*

// Arrow function 

const printName = () => {
    const myName = 'Lucas';
    return myName;
  };
  
  console.log(printName());

//ou 

const printName1 = () => 'Lucas';
console.log(printName1());

// Podemos omitir os parênteses apenas quando a função recebe apenas um argumanto:

const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

// Aqui não há maneira de omitir os parênteses

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));

// Função para contar palavras com arrow function

const contaPalavras = frase => frase.split(' ').length;
console.log(contaPalavras('Testando função de contar palavrsa'));

// Função que cria um objeto

const objeto = (nome, idade) => ({nome: nome, idade: idade});
console.log(objeto('Luiz', 31));

*/

// >>>>>>>>>>>>>> TERNARY OPERATOR <<<<<<<<<<<<<<<<<<

/*

// A sintaxe básica do operador ternário é muito simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression); // isso é mentira

*/

//A vantagem do operador ternário é que ele é fácil de entender quando se pega o jeito, e é muito mais sucinto do que escrever um bloco condicional com if/else ou switch, gerando um código mais limpo e simples. Por outro lado, é bom saber que o operador ternário não substitui as expressões condicionais tradicionais! Em qualquer situação onde exista mais de uma condição a ser avaliada, gerando três ou mais resultados possíveis, o mais simples será utilizar as opções já aprendidas anteriormente

// Situação em que é mais simples usar o operador ternário:

/*

const checkIfElse = (age) => {
    if (age >= 18) {
      return `Você tem idade para dirigir!`;
    } else {
      return `Você ainda não tem idade para dirigir...`;
    }
  };
  
  // veja a diferença:

  const checkTernary = (age) => (
    age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`
  );
  
*/  
/*

  //Outra forma de utilização 

    let idade = 31;
    console.log(idade >= 18 && 'Você possui maior idade.');

*/
/*
  // ------------------------
  
  // Situação em que usar o operador ternário não faz muito sentido:
  const checkIfElse = (fruit) => {
    if (fruit === `maçã`) {
      return `Essa fruta é vermelha`;
    } else if (fruit === `banana`) {
      return `Esta fruta é amarela`;
    } else {
      return `Não sei a cor`;
    }
  };
  
  const checkTernary = (fruit === `maçã`) ? `Essa fruta é vermelha` 
    : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);
  
  // Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática,
  // pois torna o seu código truncado e difícil de ler, tirando todo o sentido de um
  // operador cujo objetivo é facilitar a sua vida e a da pessoa que lerá seu código
  // no futuro!

 */

// >>>>>>>>>>>>>>>>>>>>>>> EXERCÍCIOS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
/*
// Modifique a variável para que respeite o escopo onde está sendo declarada. Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.

      let pessoa = {
        nome: 'Henri',
        idade: 20
      }
      pessoa = {
        nome: 'Luna',
        idade: 19
      }
      console.log('Nome:', pessoa.nome);
      console.log('Idade:', pessoa.idade);
*/
 /*
// Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const: Assignment to constant variable.`
    
    const pessoa = {
        nome: 'Henri',
        idade: 20
      }
    // Altere essa estrutura para corrigir o erro.
    //   pessoa.push() = {
    //     nome: 'Luna',
    //     idade: 19
    //   } 
    pessoa.nome = 'Luna';
    pessoa.idade = 19;

      console.log('Nome:', pessoa.nome);
      console.log('Idade:', pessoa.idade);
*/
/*
//Transforme a função numeroAleatorio em uma arrow function

        // function numeroAleatorio() {
        //     return Math.random()
        // }
        // console.log(numeroAleatorio());
      
        const numeroAleatorio = () => Math.random()
        console.log(numeroAleatorio());
 */   
 /*
//Transforme a função hello em uma arrow function
        
        // function hello(nome) {
        //     return `Olá, ${nome}!`
        //   }
        //   let nome = 'Ivan';
        //   console.log(hello(nome));

        const hello = nome => `Olá, ${nome}!`
        console.log(hello('Luiz'));
*/
/*
//Transforme a função nomeCompleto em uma arrow function

    // function nomeCompleto(nome, sobrenome) {
    //     return `${nome} ${sobrenome}`
    // }
    // let nome = 'Ivan';
    // let sobrenome = 'Pires';
    // console.log(nomeCompleto(nome, sobrenome));

    const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
    console.log(nomeCompleto('Luiz Antonio', 'Alves dos Santos'));

*/
/*

//Altere a expressão if/else utilizando ternary operator
    // let speed = 90;
    // const speedCar = (speed) => {
    // if (speed >= 120) {
    //     return `Você ultrapassou o limite de velocidade`;
    // } else {
    //     return `Você está na velocidade permitida`;
    // }
    // };
    // console.log(speedCar(speed));

    let speed = 90;
    const speedCar = speed => (
        (speed >= 120) ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`
    );
    console.log(speedCar(speed));

*/
/*

//Crie uma função que ligue e desligue um motor de um carro. 1 - Crie uma variável para armazenar o valor de status do seu motor (lembre-se de armazenar o tipo de variável da forma correta); 2 - Crie a função ligarDesligar utilizando arrow functions. Ela não receberá nenhum parâmetro; 3 - Crie a lógica para ligar e desligar o motor (a lógica deverá utilizar uma condicional para ligar e desligar o motor); 4 - Imprima no terminal “O motor está ligado“ e “O motor está desligado“ (lembre-se de utilizar o template literals nesse momento). 5 - Bônus (opcional): tente fazer o mesmo exercício utilizando ternary operator.

        let status = 'desligado';
        
        const ligarDesligar = () => (
            status === 'desligado' ? status = 'ligado' : status = 'desligado'
        );

        console.log(`O motor está ${ligarDesligar()}`);
        console.log(`O motor está ${ligarDesligar()}`);
        console.log(`O motor está ${ligarDesligar()}`);

*/
/* 

// Crie uma função que calcule a área de um círculo. Na matemática, a fórmula para calcular a área de um círculo é: área = PI vezes o raio elevado ao quadrado. Com base nessa informação: 1 - Crie a função circleArea, que recebe o valor do raio como parâmetro, utilizando arrow functions; 2 - Crie uma variável para armazenar o valor de PI (lembre-se de armazenar o tipo de variável da forma correta); 3 - Crie a lógica para retornar a área do círculo; 4 - Imprima no terminal “Essa é a área do círculo: resultado da função“ (lembre-se de utilizar o template literals nesse momento).

        
        
        const circleArea = raio => {
            const pi = Math.PI;
            let area = pi*Math.pow(raio, 2);
            return console.log(`Área do circulo de raio ${raio}: ${area}`);
        }
        
        circleArea(5);

*/
/*

//Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

        const longestWord = text => {
            let wordArray = text.split(' ');
            let maxLength = 0;
            let result = '';

            for (const word of wordArray){
                if (word.length > maxLength){
                    maxLength = word.length;
                    result = word;
                }
            }
            return result;
        }
        console.log(longestWord('Eu estou estudando a mais de cinco horas consecutivas'));

*/
/*

//Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase. 1 - O nome da função deverá ser substituaX; 2 - A função deverá receber um nome por parâmetro; 3 - Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!'; 4 - A função deverá retornar uma nova frase em que o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.

    const substituaX = (nome) => {
        const frase = 'Tryber x aqui!';
        const fraseArray = frase.split(' ');
        for (let index = 0; index < fraseArray.length; index += 1) {
        if (fraseArray[index] === 'x') {
            fraseArray[index] = nome;
        }
        }  
        return fraseArray.join(' ');
    };
    
    //console.log(substituaX('Luiz'));

//Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string. 1 - O nome da função deverá ser minhasSkills; 2 - A função deverá receber o retorno da Função 1 - substituaX por parâmetro; 3 - Declare dentro da função uma variável com o nome skills, do tipo const; 4 - A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu. 5 - Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills
    
        const minhasSkills = (func) => {
        const skills = ['JavaScript', 'HTML', 'CSS'];
        let resultado = `
        ${func}
      
        Minhas três principais habilidades são:`;
        for (let index = 0; index < skills.length; index += 1) {
          resultado = `${resultado}
          - ${skills[index]}`; // reatribui e adiciona a skill atual à variável resultado
        }
        return resultado;
      };
      console.log(minhasSkills(substituaX('Luiz Antonio')));
*/
