//Count to ten function
function countToTen() {
  const container = document.querySelector('.container');
  container.innerHTML = '';
  let i = 1;
  while (i <= 100) {
    let output;
    if (i % 3 === 0 && i % 5 === 0) {
      //i is divisible by 3
      output = 'foobar <br>';
    } else if (i % 3 === 0) {
      output = 'foo <br>';
    } else if (i % 5 === 0) {
      output = 'bar <br>';
    } else {
      output = i + ' <br>';
    }

    container.innerHTML = container.innerHTML + output;
    i++;
  }
}

//Call our function
countToTen();
