//Code for our competition
const competitionForm = document.getElementById('competition-form');
const competitionResults = document.querySelector('.results');

competitionForm.addEventListener('submit', (event) => {
  event.preventDefault();

  //Get values
  const select = document.getElementById('name');
  const selectedName = select.options[select.selectedIndex].value;
  const wins = document.getElementById('wins');
  const loses = document.getElementById('loses');

  //Show the results
  if (wins.checked) {
    //Win is selected
    competitionResults.innerText = `${selectedName} Wins!`;
  } else {
    //Lose is selected
    competitionResults.innerText = `${selectedName} Loses`;
  }
});
