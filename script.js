//TO GRIFFIN: CHANGE THESE TO CHANGE THE PREDETERMINED COMBINATIONS
const predeterminedValues = [
  [1, 5],
  [4, 2],
  [3, 4],
  [1, 6],
  [6, 5]
];
let valCursor = Math.floor((Math.random() * predeterminedValues.length));

document.addEventListener("DOMContentLoaded", function() {
  var elDiceOne       = document.getElementById('dice1');
  var elDiceTwo       = document.getElementById('dice2');
  var elComeOut       = document.getElementById('roll');

  elComeOut.onclick   = function () {rollDice();};

  function rollDice() {

    var diceOne   = predeterminedValues[valCursor][0];
    var diceTwo   = predeterminedValues[valCursor][1];
    valCursor = (valCursor + 1) % predeterminedValues.length;

    for (var i = 1; i <= 6; i++) {
      elDiceOne.classList.remove('show-' + i);
      if (diceOne === i) {
        elDiceOne.classList.add('show-' + i);
      }
    }

    for (var k = 1; k <= 6; k++) {
      elDiceTwo.classList.remove('show-' + k);
      if (diceTwo === k) {
        elDiceTwo.classList.add('show-' + k);
      }
    }
  }
});



