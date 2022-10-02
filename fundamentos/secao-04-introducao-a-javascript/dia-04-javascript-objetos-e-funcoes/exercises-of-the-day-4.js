/*
    //Um objeto em JavaScript é uma entidade independente, com propriedades e tipos. Uma propriedade é a associação entre uma chave e um valor, são essas as características do objeto. Pense em um objeto da vida real, um carro, por exemplo. Cada carro tem sua cor, peso, tamanho, quantidade de portas e etc. Essas são suas características, suas propriedades. E, da mesma forma que funciona um objeto da vida real, funcionam os objetos em JavaScript. Objetos são estruturas ou coleções compostas por pares chave-valor. Também é possível armazenar um objeto dentro de outro, ou até mesmo dentro de um array.

    let car = {
        type: 'Fiat',
        model: '500',
        color: 'white',
    };
    console.log(car);
*/
/*
    //Para acessar as chaves dentro de um objeto, temos duas formas: notação de ponto: car.type / notação de colchetes: car[type]

    let diasDaSemana = {
        1: 'domingo',
        2: 'segunda',
        3: 'terça',
        4: 'quarta',
        5: 'quinta',
        6: 'sexta',
        7: 'sábado',
    };
*/
 /*  
    //diasDaSemana.1; //erro - precisa ser chamado dentro de colchetes como abaixo (no caso de números):
    console.log(diasDaSemana['1']);

    let conta = {
        agencia: '0000',
        banco: {
        cod: '012',
        id: 4,
        nome: 'TrybeBank',
        },
    };
    
    let infoDoBanco = 'banco';
    console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
    console.log(conta[infoDoBanco]['nome']); // TrybeBank
    
    console.log(conta.agencia); // 0000
    console.log(conta['agencia']); // 0000
    
    console.log(conta.banco.cod); // 012
    console.log(conta['banco']['id']); // 4
*/
/*
    let usuario = {
        id: 99,
        email: 'jakeperalta@gmail.com',
        infoPessoal: {
        nome: 'Jake',
        sobrenome: 'Peralta',
        endereco: {
            rua: 'Smith Street',
            bairro: 'Brooklyn',
            cidade: 'Nova Iorque',
            estado: 'Nova Iorque',
        },
        },
    };
    
    console.log(usuario['id']); // 99
    console.log(usuario.email); // jakeperalta@gmail.com
    
    console.log(usuario.infoPessoal.endereco.rua); // Smith Street
    console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque
*/
/*
    //Agora, e se o nosso objeto está dentro de um array? Como acessamos as propriedades do objeto? Veja este exemplo:

    let moradores = [
        {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
        },
        {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
        },
        {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
        },
        {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
        },
    ];
    
    let primeiroMorador = moradores[0];
    console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
    console.log(primeiroMorador['andar']); // 10
    
    let ultimoMorador = moradores[moradores.length - 1];
    console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
    console.log(ultimoMorador.nome); // Zoey
*/
/*
    // >>>>>>> Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo

    let player = {
        nome: 'Marta',
        lastName: 'Silva',
        age: 34,
        medals: {
            golden: 2,
            silver: 3,
        },
    };
    console.log(player);
*/
/*
    // FOR/IN

    let cars = ['Saab', 'Volvo', 'BMW'];

    for (let index in cars) {
    console.log(cars[index]);
    }
*/
/*
    let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
    };

    for (let index in car) {
    console.log(index, car[index]);
    }
*/

    //Como dito no vídeo, o for/in percorre as propriedades dos objetos que forem enumeráveis com base na ordem de inserção, e não nos valores das propriedades, ou seja, nos retorna o índice. Por exemplo, se tivermos um array com três strings dentro: 

    //let food = ['hamburguer', 'bife', 'acarajé'];

    //As propriedades dos elementos do array serão os índices de cada posição, começando por zero. É por isso que os números retornados pelo console.log são 0, 1 e 2: as propriedades que correspondem ao índice de cada posição do array.
    
    //let food = ['hamburguer', 'bife', 'acarajé'];
    //for (let value of food) {
    //  console.log(value);
    //};
    //resultado: hamburguer, bife, acarajé;

    // >>>>>>>>> Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
/*
    let names = {
        person1: 'João',
        person2: 'Maria',
        person3: 'Jorge',
      };

      for (let index in names) {
        console.log('Olá ' + names[index] + '!');
      };
*/
/*
    //Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

      let car = {
      model: 'A3 Sedan',
      manufacturer: 'Audi',
      year: 2020
    };

    for (let index in car){
        console.log(car[index]);
    }
*/

        //FUNÇÕES 
 /*   
    let status = 'desligado';
    let aceleracao = 0;
    let rotacaoDoVolante = 0;

    function ligarDesligar() {
        if (status === 'desligado'){
            status = 'ligado';
        }
        else {
            status = 'desligado';
        }
        return status;
    }

    function acelera(a) {
        aceleracao = aceleracao + a;
        console.log('Acelerando à ' + aceleracao + 'm/s²'); 
    }

    function frear(f) {
        aceleracao = aceleracao - f;
        console.log('Desacelerando para ' + aceleracao + 'm/s²'); 
    }

    function volante(v) {
        rotacaoDoVolante = v;
        console.log('Volante girando ' + v + '°'); 
    }

    console.log(ligarDesligar()); 
    
    acelera(67);

    frear(12);

    volante(37.5);
*/
 /*
    let status = 'deslogado';

    function logarDeslogar() {
    if (status === 'deslogado') {
        status = 'logado';
    } else {
        status = 'deslogado';
    }
    }

    console.log(status); // deslogado

    logarDeslogar();
    console.log(status); // logado

    logarDeslogar();
    console.log(status); // deslogado

    console.log('O usuário está ' + status); // O usuário está deslogado
*/
/*
     function soma(a, b) {
     return a + b;
    }

    console.log(soma(1, 2)); // 7
*/
/*
    function maiorNum(primeiroNum, segundoNum) {
        if (primeiroNum > segundoNum) {
        return primeiroNum + ' é maior que ' + segundoNum;
        } else if (segundoNum > primeiroNum) {
        return segundoNum + ' é maior que ' + primeiroNum;
        } else {
        return 'Os números são iguais';
        }
    }
    
    console.log(maiorNum(10, 20)); // 20 é maior que 10
    console.log(maiorNum(2, -5)); // 2 é maior que -5
    console.log(maiorNum(1, 1)); // Os números são iguais
*/

    //>>>>>>>>>>>>>>>>>> EXERCÍCIOS DE FIXAÇÃO
    
    //Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para: Adição (a + b); Subtração (a - b); Multiplicação (a * b); Divisão (a / b); Módulo (a % b).
/*
    let a = 2;
    let b = 4;

    function sum(x, y){
        let soma = x + y;
        return soma;
    }

    function subtraction(x, y){
        let subtacao = x - y;
        return subtacao;
    }

    function multiplication(x, y){
        let multiplicacao = x * y;
        return multiplicacao;
    }

    function division(x, y){
        let divisao = x / y;
        return divisao;
    }

    function mod(x, y){
        let modulo = x % y;
        return modulo;
    }
    
    console.log('Soma: ' + sum(a, b));
    console.log('Subtração ' + subtraction(a, b));
    console.log('Multiplicação: ' + multiplication(a, b));
    console.log('Divisão: ' + division(a, b));
    console.log('Módulo: ' + mod(a, b));
*/
    //Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.
/*
    function maiorMenor(a, b){
        let small = [a];
        if (a < b){
            return '"a" é menor que "b"'
        }
        else if (a > b){
            return '"a" é maior que "b"'
        }
        else {
            return '"a" e "b" são iguais'
        }
    }
    console.log(maiorMenor(6, 5));
*/

    //Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

/*
    function bigger (a, b, c){
        let array = [a, b, c];
        let i = [array[0]];
        for (let index = 0; index < array.length; index += 1){
            if (i[0] < array[index]){
                i[0] = array[index];
            }
        }
        return i[0];
    }

    console.log(bigger (9, 2, -1));
*/

    //Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

/*

    function positiveOrNegative (z){
        if (z > 0){
            return 'positive';
        }
        else if (z < 0){
            return 'negative';
        }
        else {
            return 'zero'
        }
    }

    console.log(positiveOrNegative(0));

 */
/*
    //Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.Um ângulo será considerado inválido se não tiver um valor positivo.

    function triangle(x, y, z){
        if (x > 0 && y > 0 && z > 0){
                let sum = x + y + z;
                if (sum === 180){
                return 'true';
            }
            else {
                return 'false';
            }
            }
        else {
        return 'Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.Um ângulo será considerado inválido se não tiver um valor positivo.';
        }
    }

    console.log(triangle(90, 45, 45));
*/
/*

// >>>>>>>>>>>>> EXERCÍCIOS: OBJETOS E FOR/IN

//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave.

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
console.log('Bem vinda, ' + info.personagem);
//ou
console.log('Bem vinda, ' + info['personagem']);

//Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor.

info.recorrente = 'Sim';
console.log(info['recorrente']);

//Faça um for/in que mostre todas as chaves do objeto.

for (let index in info){
    console.log(index);
};

//Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. 

for (let index in info){
    console.log(info[index]);
}; 

//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves.

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christimas on Bear Mountain, Dell' + "'s" + ' Four Color Comic #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

for (let index in info){
    if(index === 'recorrente' && info[index] === 'Sim' && info2[index] === 'Sim'){
        console.log('Ambos recorrentes');
}
    else {
        console.log(info[index] + ' e ' + info2[index]);
    }
};

*/
/*

// >>>>>>>>>>>>> LEITURA DE OBJETOS

//Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + 'se chama ' + "'" + leitor.livrosFavoritos[0].titulo + "'");

  //Adicione um novo livro favorito na chave livrosFavoritos, que é um array

  leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JR Rowling',
    editora: 'Rocco',
  });

  console.log(leitor.livrosFavoritos);

  //Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código

  console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');

  */

  // >>>>>>>>>>>>>>>>>>>>>>>>> FUNÇÕES

/*

  //Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

  
  function palindromo (word) {
    let invertedWord = '';
    for (index = 0; index < word.length; index += 1){
        invertedWord += word[word.length - 1 - index];
    }
    if (invertedWord === word){
        return true;
    }
    else {
        return false;
    }
  };
  
console.log(palindromo('arara'));

//ou

    function verificaPalindrome(word) {
    for(index in word) {
        if(word[index] != word[(word.length - 1) - index]) {
        return false;
        }
    }
    return true;
    }

console.log(verificaPalindrome('luiz'));

//Outra forma de resolver o exercício é utilizando os métodos split, reverse e join. Primeiro o método split transformará a string em um array onde cada posição será uma letra da string. Depois o método reverse fará o array ficar de trás pra frente. Em seguida o método join faz com que todo o array vire uma string novamente.

function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
  console.log(verificaPalindrome('arara'));
  console.log(verificaPalindrome('desenvolvimento'));


*/
/*

//Crie uma função que receba um array de inteiros e retorne o índice do maior valor

function positionBigger (array){
    let indexBigger = 0;
    for (let index in array){
        if (array[index] > array[indexBigger]){
            indexBigger = index;
        }
    }
    return indexBigger;
}
console.log(positionBigger([2, 3, 6, 7, 10, 1]));

*/
/*

//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function positionSmall (array){
    let indexBigger = 0;
    for (let index in array){
        if (array[index] < array[indexBigger]){
            indexBigger = index;
        }
    }
    return indexBigger;
}
console.log(positionSmall([2, 4, 6, 7, 10, 0, -3]));

*/
/*

//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function biggerWord (array){
    let bigger = array[0];
    for (let index = 0; index < array.length; index += 1){
        if (array[index].length > bigger.length){
            bigger = array[index];
        }
    }
    return bigger;
}
console.log(biggerWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// ou

function maiorPalavra(palavras) {
    let maiorPalavra = palavras[0];
    for (let indice in palavras) {
      if (maiorPalavra.length < palavras[indice].length) {
        maiorPalavra = palavras[indice];
      }
    }
  
    return maiorPalavra;
  }
  
  console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

*/
/*

  //Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function maisRepetido (array){
    let repeticoes = 0;
    let vezesRepetidas = 0;
    let indexNumeroRepetido = 0;

    for (let index in array) {
        let compara = array[index];
        for (let index2 in array) {
            if (compara === array[index2]){
            repeticoes += 1;
            }
        }
        if (repeticoes > vezesRepetidas) {
            vezesRepetidas = repeticoes;
            indexNumeroRepetido = array[index];
        }
        repeticoes = 0;
    }
    return indexNumeroRepetido;
}

console.log(maisRepetido([1, 2, 2, 3, 5, 6, 7, 7, 7, 8, 9, 3, 3, 3, 3, 3, 3, 3, 3, 3, 7, 90]));

*/
/*

//Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function somatorio(numero){
    let sum = 0;
    for (let index = 0; index <= numero; index += 1){
        sum += index;
    }
    return sum;
}
console.log(somatorio(3));

*/

//Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word. Valor de teste: 'trybe' e 'be' -> Valor esperado no retorno da função: true -> verificaFimPalavra('trybe', 'be'); -> Retorno esperado: true -> verificaFimPalavra('joaofernando', 'fernan'); -> Retorno esperado: false;

function verificaFinal(palavra, fim){
    palavra = palavra.split('');
    fim = fim.split('');
    let resposta = true;

    for(let index = 0; index < fim.length; index += 1){
        if( palavra[palavra.length - fim.length + index] != fim[index]){
            resposta = false;
        }
    }
    return resposta;
}

console.log(verificaFinal('luiz', 'iz'));