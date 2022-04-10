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


