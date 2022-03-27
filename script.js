// callbacks

// to display the results
function Suman(info) {
  console.log(info);
}

// is where table of numbers is calculated
function Table_of_Number(data, sai) {
  for (let i = 1; i <= 10; i++) {
    let result = data * i;
    sai(result); // callback function Suman(result)
  }
}

Table_of_Number(15, Suman);
