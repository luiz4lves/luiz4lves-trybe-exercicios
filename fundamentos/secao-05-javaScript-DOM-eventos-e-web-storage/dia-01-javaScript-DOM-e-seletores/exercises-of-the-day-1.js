function mudaTexto(){
    return document.getElementsByTagName('p')[1].innerText = 'Tantas coisas tem acontecido que dois anos me parecem distante, tudo tem mudado muito, inclusive eu. Mas daqui a dois anos espero estar muito bem!';
}
mudaTexto ();

function mudaCorDoQuadroAmarelo(){
    const fundo = document.getElementsByClassName('main-content')[0];
    return fundo.style.backgroundColor = 'rgb(76,164,109)' 
}
mudaCorDoQuadroAmarelo();

function mudaCorDoQuadroVermelho(){
    const fundo = document.getElementsByClassName('center-content')[0];
    return fundo.style.backgroundColor = 'white'
}
mudaCorDoQuadroVermelho()

function corrigeH1(){
    if (document.getElementsByClassName('title')[0].innerText !== 'Exercício - JavaScripit'){
        document.getElementsByClassName('title')[0].innerText = 'Exercício - JavaScripit';
    }
}
corrigeH1();

function maiusculas(){
    let texto = document.querySelector('.center-content p');
    texto.innerText = texto.innerText.toUpperCase();
}
maiusculas();

function exibeTudo(){
    const array = document.getElementsByTagName('p');
    for (let index = 0; index < array.length; index += 1){
        console.log(array[index].innerHTML);
    }
}
exibeTudo();