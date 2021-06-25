//


// 1.Nouvelle partie : choix du nom des équipes
var newGameBtn = document.getElementById('new-game');
var registrationNames = () => {
  var player1Name = prompt('Ecris le nom de l\'équipe jaune');
  var player2Name = prompt('Ecris le nom de l\'équipe rouge');
  document.getElementById('player1-name').textContent = player1Name; 
  document.getElementById('player2-name').textContent = player2Name;
}
newGameBtn.addEventListener('click', registrationNames)


// 2. Initialiser le jeu 
function init(){
  player1RoundPoints = 0; 
  player1GlobalPoints = 0; 
  player2RoundPoints = 0; 
  player2GlobalPoints = 0; 
  document.getElementById('player1-round-points').textContent = player1RoundPoints;
  document.getElementById('player2-round-points').textContent = player2RoundPoints;
  document.getElementById('player1-global-points').textContent = player1GlobalPoints;
  document.getElementById('player2-global-points').textContent = player2GlobalPoints;
  activePlayer = 1; 
}

init();

// 3. Lancer du dé et ajout des points du tour;
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
    console.log(activePlayer)
  } else if(number !== 1 && activePlayer === 2){
    player2RoundPoints +=number;
  } else {
    player2RoundPoints = 0;
    activePlayer -= 1;
  }

  document.getElementById('player1-round-points').textContent = player1RoundPoints;
  document.getElementById('player2-round-points').textContent = player2RoundPoints;

}
btnRollDice.addEventListener('click', getAleatoryNumber);

//4. Sauvegarde des points du tour 
var btnHold = document.getElementById('hold');
function getRoundPoints (){
  if(activePlayer === 1){
    player1GlobalPoints += player1RoundPoints;
    player1RoundPoints = 0;
    activePlayer += 1;
  } else {
    player2GlobalPoints += player2RoundPoints;
    player2RoundPoints = 0;
    activePlayer -= 1;
  }
  document.getElementById('player1-global-points').textContent = player1GlobalPoints;
  document.getElementById('player2-global-points').textContent = player2GlobalPoints;
}
btnHold.addEventListener('click', getRoundPoints)