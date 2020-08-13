//Code for our competition
const competitionForm = document.getElementById('competition-form');

competitionForm.addEventListener('submit', (event) => {
  event.preventDefault();

  //Get values
  const select = document.getElementById('name');
  const selectedName = select.options[select.selectedIndex].value;
  const wins = document.getElementById('wins');

  //Show the results
  if (wins.checked) {
    //Win is selected
    alert(`${selectedName} Wins!`);
  } else {
    //Lose is selected
    alert(`${selectedName} Loses`);
  }
});
