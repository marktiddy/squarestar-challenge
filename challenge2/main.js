'use strict';
//Note: Code has been passed through babel to make it cross browser compatible

//Count to ten function
function countToTen() {
  var container = document.querySelector('.container');
  container.innerHTML = '';
  var i = 1;

  while (i <= 100) {
    var output = void 0;

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
} //Call our function

countToTen();
