function mudaTexto(){
    return document.getElementsByTagName('p')[1].innerText = 'Tantas coisas tem acontecido que dois anos me parecem distante, tudo tem mudado muito, inclusive eu. Mas daqui a dois anos espero estar muito bem!';
}
mudaTexto ();

function mudaCor(){
    const fundo = document.getElementsByClassName('main-content')[0];
    fundo.style.backgroundColor = 'rgb(76,164,109)' 
}
mudaCor();
