// Promise

function Suman(data) {
  console.log(data);
}

let suman_promise = new Promise(function (resolve, reject) {
  let number = 99;
  if (number % 2 == 0) {
    resolve("even number"); // callback function
  } else {
    reject("odd number"); // callback function
  }
});

suman_promise.then(
  // promise kept
  function (value) {
    Suman(value);
  },
  function (error) {
    // promise rejected
    Suman(error);
  }
);

// Code without Promise

const url = "https://restcountries.com/v3.1/all";

function Suman(data) {
  console.log(data);
}

function Guvi(url, my_callback_function) {
  let request = new XMLHttpRequest(); // object created 
  request.open("GET", url); // GET method with the URL 
  request.onload = function () {
    if (request.status == 200) {
      my_callback_function(JSON.stringify(request.response));
    } else {
      my_callback_function(request.status);
    }
  };
  request.send();
}

Guvi(url, Suman);

// Code With Promise
