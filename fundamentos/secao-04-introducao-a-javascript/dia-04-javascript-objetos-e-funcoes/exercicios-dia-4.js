//Imprime no console "Bem vinda, Margarida"

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem vinda, ' + info.personagem);
console.log('Bem vinda,' + info['personagem']);

console.log('-----------------------------');

//Insira no objeto uma nova propriedade com o nome da chave "recorrente" e o valor "sim"

info.recorrente = 'Sim';
//info['recorrente2'] = 'Sim';

console.log(info);

console.log('-----------------------------');

//Faça um for/in que mostre todas as chaves do objeto

for (let index in info) {
    console.log(index);
}
console.log('-----------------------------');

//Faça um for/in que mostre todos os valores das chaves do objeto

for (let index in info) {
    console.log(info[index]);
}

console.log('-----------------------------');

//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'o último McPatinhas',
    recorrente: 'Sim',
};

for (let index in info) {
    if (index === 'recorrente' && info[index] === 'Sim' && info2[index] === 'Sim') {
        console.log('Ambos recorrentes');
    }
    else {
        console.log(info[index] + ' e ' + info2[index]);
    }
}

console.log('-----------------------------');

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

  console.log('O livro favorito da ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama "' + leitor.livrosFavoritos[0].titulo +'"');
