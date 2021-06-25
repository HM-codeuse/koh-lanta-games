//
// 1.Nouvelle partie : choix du nom des équipes
var newGameBtn = document.getElementById('new-game');
var registrationNames = () => {
  var yellowTeamName = prompt('Ecris le nom de l\'équipe jaune');
  var redTeamName = prompt('Ecris le nom de l\'équipe rouge');
  document.getElementById('yellow-team-name').textContent = yellowTeamName; 
  document.getElementById('red-team-name').textContent = redTeamName;
}
newGameBtn.addEventListener('click', registrationNames)

// 2. Lancer du dé
var btnRollDice = document.getElementById('roll-dice');
var dice = document.getElementById('dice');

function getAleatoryNumber(number) {
  var number = Math.floor(Math.random() * 6) + 1;
  // console.log(number);
  var imgDice = document.querySelector('#imgDice');
  imgDice.src = './images/' + number + '.gif';
  let sum = 0;
  if(number !== 1){
    sum += number;
  }
  
  document.getElementById('yellow-currents-points').textContent = sum;
}
btnRollDice.addEventListener('click', getAleatoryNumber);





// 3. Gérer les scores courants et les scores globaux
// Comment faire pour déclarer la variable number à l'extérieur de sa fonction?


// var pointsWond = number; 
// var redCurrentPoints = document.getElementById('red-currents-points'); 
// redCurrentPoints.innerHTML = pointsWond;