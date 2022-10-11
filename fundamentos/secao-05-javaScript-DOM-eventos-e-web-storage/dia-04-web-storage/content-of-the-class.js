window.onload = function () {
    let button = document.querySelector("#start-race-btn");
    // console.log(button);
  
    let player1 = document.getElementById('player1');
    let player2 = document.getElementById('player2');
  
    player1.style.marginLeft = 0; //0px
    player2.style.marginLeft = 0;
  
    button.addEventListener('click', function () {
      // console.log(event.target.className);
      player1.style.marginLeft = parseInt(player1.style.marginLeft) + Math.random() * 300 + 'px';
      player2.style.marginLeft = parseInt(player2.style.marginLeft) + Math.random() * 300 + 'px';
  
      let player1Win = parseInt(player1.style.marginLeft) > window.innerWidth;
      let player2Win = parseInt(player2.style.marginLeft) > window.innerWidth;
  
      if (player1Win) {
        alert("PLAYER 1 VENCEU!!!!!!!");
        addWinToLocalStorage(player1.className);
  
        resetCars(player1, player2);
      }
      if (player2Win) {
        alert("PLAYER 2 VENCEU!!!!!!!");
        addWinToLocalStorage(player2.className);
  
        resetCars(player1, player2);
      }
    });
  
    let alternatives = document.getElementById('players');
    let carSelected = 1;
  
    alternatives.addEventListener('click', function(){
      let captura = event.target.className;
  
      if(carSelected === 1){
        player1.className = `${captura}`;
        addClassToLocalStorage(captura, carSelected); // ('alternative-ca1', 1)
  
        carSelected = 2;
      }else {
        player2.className = `${captura}`;
        addClassToLocalStorage(captura, carSelected);
  
        carSelected = 1;
      }
    })
  
    function resetCars(player1, player2) {
      player1.style.marginLeft = 0;
      player2.style.marginLeft = 0;
  
      addWinToPage();
    }
  
    checkKey();
  } // Termina o escopo do window.onload
  
  function checkKey() {
    if (localStorage.getItem('classOne') === null) {
      localStorage.setItem('classOne', 'startCar');
      localStorage.setItem('classTwo', 'startCar');
  
      let playersScore = ['yoshiScore', 'marioScore', 'luigiScore', 'peachScore'];
  
      for (let score of playersScore) {
        localStorage.setItem(score, 0);
      }
  
    } else {
      player1.className = localStorage.getItem('classOne');
      player2.className = localStorage.getItem('classTwo');
    }
  }
  
  function addClassToLocalStorage(capturedClass, carSelected) { // ('alternative-car1', 1)
    if (carSelected === 1) {
      localStorage.setItem('classOne', capturedClass);
    } else {
      localStorage.setItem('classTwo', capturedClass);
    }
  }
  
  function addWinToLocalStorage(className) {
    switch(className) {
      case 'alternative-car1':
        let numberWinYoshi = JSON.parse(localStorage.getItem('yoshiScore'));
        localStorage.setItem('yoshiScore', numberWinYoshi += 1);
        break;
      case 'alternative-car2':
        let numberWinMario = JSON.parse(localStorage.getItem('marioScore'));
        localStorage.setItem('marioScore', numberWinMario += 1);
        break;
      case 'alternative-car3':
        let numberWinLuigi = JSON.parse(localStorage.getItem('luigiScore'));
        localStorage.setItem('luigiScore', numberWinLuigi += 1);
        break;
      case 'alternative-car4':
        let numberWinPeach = JSON.parse(localStorage.getItem('peachScore'));
        localStorage.setItem('peachScore', numberWinPeach += 1);
        break;
    }
  }
  
  function addWinToPage() {
    let score1 = document.getElementById('score1');
    score1.innerText = localStorage.getItem('yoshiScore');
  
    let score2 = document.getElementById('score2');
    score2.innerText = localStorage.getItem('marioScore');
  
    let score3 = document.getElementById('score3');
    score3.innerText = localStorage.getItem('luigiScore');
  
    let score4 = document.getElementById('score4');
    score4.innerText = localStorage.getItem('peachScore');
  }