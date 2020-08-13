'use strict';
//Note: Code has been passed through babel to make it cross browser compatible

//Code for our competition
var competitionForm = document.getElementById('competition-form');

competitionForm.addEventListener('submit', function (event) {
  event.preventDefault(); //Get values

  var select = document.getElementById('name');
  var selectedName = select.options[select.selectedIndex].value;
  var wins = document.getElementById('wins');

  if (wins.checked) {
    //Win is selected
    alert(''.concat(selectedName, ' Wins!'));
  } else {
    //Lose is selected
    alert(''.concat(selectedName, ' Loses'));
  }
});
