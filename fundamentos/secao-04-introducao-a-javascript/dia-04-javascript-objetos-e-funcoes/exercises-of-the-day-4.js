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

    let names = {
        person1: 'João',
        person2: 'Maria',
        person3: 'Jorge',
      };

      for (let index in names) {
        console.log('Olá ' + names[index] + '!');
      };
      for (let index of names){
        console.log(names[index]);
      }

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