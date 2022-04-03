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

// FETCH WITH ASYNC / AWAIT

const url = "https://623d55e87efb5abea68ce31d.mockapi.io/suman/friends/";

async function Suman(url) {
  let data = await fetch(url);
  if (data.ok) {
    return data.json();
  } else {
    return data.status;
  }
}

Suman(url)
  .then(function (value) {
    console.log(JSON.stringify(value));
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("fetch() worked successfully !");
  });


// SIMPLE EXAMPLE

async function Suman() {
  let data = await "my name is suman";
  console.log(data);
}

console.log("patna");
Suman();
console.log("bangalore");




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

// async / await

function Suman() {
  console.log("suman gangopadhyay");
}

async function Guvi() {
  console.log("this is the guvi function");
}


Guvi().then(function () {
  Suman();
});

// ASYNC/AWAIT

let data = [
  { name: "suman gangopadhyay", location: "bangalore" },
  { name: "nitin", location: "delhi" },
];

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

async function India() {
  let new_data = { name: "rahul", location: "shimla" };
  await Guvi(new_data);
  Suman();
}

India();

