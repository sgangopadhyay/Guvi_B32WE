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

let my_promise = new Promise(function (resolve, reject) {
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function () {
    if (request.status == 200) {
      resolve(request.responseText);
    } else {
      reject(request.status);
    }
  };
  request.send();
});

my_promise.then(
  function (value) {
    Suman(value);
  },
  function (error) {
    Suman(error);
  }
);

// PROMISE CHAINING

let my_promise = new Promise(function (resolve, reject) {
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function () {
    if (request.status == 200) {
      resolve(request.responseText);
    } else {
      reject(request.status);
    }
  };
  request.send();
});

// Promise chaining 

my_promise
  .then(function (value) {
    // success of promise
    Suman(value);
  })
  .catch(function (error) {
    // failure of promise
    Suman(error);
  })
  .finally(function () {
    // promise ran with and without success/failure
    console.log("Promise ran successfully");
  });

