'use strict';
//Note: Code has been passed through babel to make it cross browser compatible

//Code for our competition
var competitionForm = document.getElementById('competition-form');
var competitionResults = document.querySelector('.results');
competitionForm.addEventListener('submit', function (event) {
  event.preventDefault(); //Get values

  var select = document.getElementById('name');
  var selectedName = select.options[select.selectedIndex].value;
  var wins = document.getElementById('wins');
  var loses = document.getElementById('loses'); //Show the results

  if (wins.checked) {
    //Win is selected
    competitionResults.innerText = ''.concat(selectedName, ' Wins!');
  } else {
    //Lose is selected
    competitionResults.innerText = ''.concat(selectedName, ' Loses');
  }
});
