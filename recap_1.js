// callback revision

function Suman(data, callback_function) {
  console.log("this is the Suman function");
  console.log(data);
  callback_function(data);
}

function Guvi(data) {
  console.log(data);
}

setTimeout(Suman, 5000, "Suman Gangopadhyay", Guvi);

// promise & promise chaining

function Guvi(data) {
  for (let i = 1; i <= 10; i++) {
    let result = data * i;
    console.log(result);
  }
}

let suman_promise = new Promise(function (resolve, reject) {
  let number = 2;
  if (number % 2 == 0) {
    resolve(Guvi(number));
  } else {
    reject("odd number # rejected");
  }
});

// console.log(suman_promise);

// call a promise object

suman_promise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  });

// fetch ()

"use strict";

const url = "https://62513902977373573f4567fb.mockapi.io/pizza/pizza_names";

const Suman = async () => {
  const response = await fetch(url);
  // await for the response to come 
  const data = await response.json();
  console.log(data);
};

Suman();


