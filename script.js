// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const hello = 37;
// console.log(hello);

const printForecast = function (arr) {
  let forcastString = '';
  //debugger;
  for (let i = 0; i < arr.length; i++) {
    //   forcastString = forcastString + `... ${arr[i]}• in day ${(i = 1)}`;
    forcastString =
      forcastString + '... ' + arr[i] + '•C in ' + (i + 1) + ' days ';
    console.log(forcastString);
  }

  return forcastString + '...';
};

const temps = new Array(17, 21, 23);
console.log('Forecast is :' + printForecast(temps));

const temps2 = new Array(12, 5, -5, 0, 4);
console.log('Forecast is :' + printForecast(temps2));
