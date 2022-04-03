// Classic example of MACRO TASK 

console.log("suman gangopadhyay");

setTimeout(function Guvi() {
  console.log("i live in bangalore");
}, 2000);

console.log("this is the third line");

// MACRO TASK # The function() that runs after all the functions have runned in the event loop. Examples are setInterval() setTimeout()

// callback example
let data = [
  { name: "suman gangopadhyay", location: "bangalore" },
  { name: "nitin", location: "delhi" },
];

// display of the dictionary / hashmap
function Suman() {
  console.log(data);
}

function Guvi(info, callback_function) {
  setTimeout(function () {
    data.push(info);
    callback_function();
  }, 5000);
}

Suman();

let new_data = { name: "tanushree", location: "kolkata" };

Guvi(new_data, Suman);


// Promise example

let data = [
  { name: "suman gangopadhyay", location: "bangalore" },
  { name: "nitin", location: "delhi" },
];

let new_data = { name: "rahul", location: "shimla" };

// display of the dictionary / hashmap
function Suman() {
  console.log(data);
}

function Guvi(info) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      data.push(info);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("error in your code !");
      }
    }, 4000);
  });
}

Guvi(new_data).then(Suman);

//
