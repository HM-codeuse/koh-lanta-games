//


// 1.Nouvelle partie : choix du nom des équipes et règles du jeu 
var newGameBtn = document.getElementById('new-game');
// function myRegistration(event){
//   document.getElementById('player1Input').innerHTML = event.data;
// }
var registrationNames = () => {
  $('#SelectionOfTeam').modal('show');
  var player1Name = document.getElementById('player1Input').value;
  var player2Name = document.getElementById('player2Input').value;
  document.getElementById('player1-name').textContent = player1Name; 
  document.getElementById('player2-name').textContent = player2Name;
}
newGameBtn.addEventListener('click', registrationNames)

var rulesBtn = document.getElementById('rules');
rulesBtn.addEventListener('click', ()=>{
  $('#gamesRules').modal('show');
})

// 2. Eclairage du joueur actif 
const yellowTotem = document.getElementById('player1');
const redTotem = document.getElementById('player2');
function enlightened(){
  if(activePlayer === 1){
    redTotem.style.opacity = '0.6';
    yellowTotem.style.opacity = '1';
  } else {
    yellowTotem.style.opacity = '0.6'; 
    redTotem.style.opacity = '1';
  }
}

// 3. Préparation du jeu (mise à zéro)

function start(){
  player1RoundPoints = 0; 
  player1GlobalPoints = 0; 
  player2RoundPoints = 0; 
  player2GlobalPoints = 0; 
  document.getElementById('player1-round-points').textContent = player1RoundPoints;
  document.getElementById('player2-round-points').textContent = player2RoundPoints;
  document.getElementById('player1-global-points').textContent = player1GlobalPoints;
  document.getElementById('player2-global-points').textContent = player2GlobalPoints;
  activePlayer = 1; 
  enlightened();
}

start();

// 4. Lancer du dé et ajout des points du tour;
var btnRollDice = document.getElementById('roll-dice');
var dice = document.getElementById('dice');

function getAleatoryNumber(number) {
  var number = Math.floor(Math.random() * 6) + 1;
  var imgDice = document.querySelector('#imgDice');
  imgDice.src = './images/' + number + '.gif';
  if(number !== 1 && activePlayer === 1){
    player1RoundPoints += number;
  } else if (number === 1 && activePlayer === 1){
    player1RoundPoints = 0
    activePlayer+=1
    enlightened();
  } else if(number !== 1 && activePlayer === 2){
    player2RoundPoints +=number;
  } else {
    player2RoundPoints = 0;
    activePlayer -= 1;
    enlightened();
  }

  document.getElementById('player1-round-points').textContent = player1RoundPoints;
  document.getElementById('player2-round-points').textContent = player2RoundPoints;

}
btnRollDice.addEventListener('click', getAleatoryNumber);

//5. Sauvegarde des points du tour dans le score global, arrêt du jeu, déclaration du vainqueur et remise à zéro des compteurs 
var btnHold = document.getElementById('hold');
function getRoundPoints (){
  if(activePlayer === 1){
    player1GlobalPoints += player1RoundPoints;
    player1RoundPoints = 0;
    document.getElementById('player1-round-points').textContent = player1RoundPoints;
    activePlayer += 1;
    enlightened();
      if(player1GlobalPoints >= 100 && player2GlobalPoints < 100) {
      alert('L\'équipe jaune remporte l\'aventure et cette sentence est irrévocable!!');
      start(); 
    }
    
  } else {
    player2GlobalPoints += player2RoundPoints;
    player2RoundPoints = 0;
    document.getElementById('player2-round-points').textContent = player2RoundPoints;
    activePlayer -= 1;
    enlightened();
      if(player2GlobalPoints >= 100 && player1GlobalPoints < 100){
      alert ('L\'équipe rouge remporte l\'aventure et cette sentence est irrévocable!!');
      start(); 
    }
  }

  document.getElementById('player1-global-points').textContent = player1GlobalPoints;
  document.getElementById('player2-global-points').textContent = player2GlobalPoints;
}
btnHold.addEventListener('click', getRoundPoints)


