window.onload = function(){
    let botton = document.querySelector('#start-race-btn');
    let player1 = document.getElementById('player1');
    let player2 = document.getElementById('player2');

    player1.style.marginLeft = 0;
    player2.style.marginLeft = 0;
    
    // dois parâmetros da função EventListener: 1º é o evento que a função vai "escutar". Nesse caso será o "click"; 2º é a função que vai ser executada quando o elemento receber o evento.
    //parseInt converte strings que possuem números, em números inteiros.
    //Math.random()*300 gera valores aleatórios entre 0 e 300
    //innerWidth define o tamanho da tela. Dê um log no console do navegador. Só escreva innerWidth e "enter"

    botton.addEventListener('click', function(){
        
        player1.style.marginLeft = parseInt(player1.style.marginLeft) + Math.random()*300 +'px';
        player2.style.marginLeft = parseInt(player2.style.marginLeft) + Math.random()*300 +'px';
        
        //A variável retorna TRUE caso a condição seja verdadeira. Caso contrário, retorna FALSE.
        
        let player1Win = parseInt(player1.style.marginLeft) > window.innerWidth;
        let player2Win = parseInt(player2.style.marginLeft) > window.innerWidth;

        if(player1Win){
            alert('PLAYER 1 VENCEU!!');
            resetCars(player1, player2);
        }
        if(player2Win){
            alert('PLAYER 2 VENCEU!!');
            resetCars(player1, player2);
        }

    })    
        function resetCars(player1, player2){
            player1.style.marginLeft = 0;
            player2.style.marginLeft = 0;    
        }
      
        let alternative = document.getElementById('players');
        let carSelected = 1;
        let text = document.getElementById('selectPlayer');

        //event.target.className retorna a classe do objeto que foi "clickado"; teste console.log(captura)
        alternative.addEventListener('click', function(){
            let captura = event.target.className;
            if (carSelected ===1){
                player1.className = `${captura}`;
                carSelected = 2;
                text.innerText = 'PLAYER 2';
            }
            else {
                player2.className = `${captura}`;
                carSelected = 1;
                text.innerText = 'PLAYER 1';
            }
    })
    
}

    