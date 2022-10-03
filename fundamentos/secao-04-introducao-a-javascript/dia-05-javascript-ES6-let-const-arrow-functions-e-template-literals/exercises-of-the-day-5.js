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

  