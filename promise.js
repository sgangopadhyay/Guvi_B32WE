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
