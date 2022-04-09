// CRUD operations using Fetch API()

"use strict";

const url = "https://62511ff6977373573f448b61.mockapi.io/suman/friends";

// FETCH Data from the MockAPI Server
async function Suman(url) {
  let data = await fetch(url);
  if (data.ok) {
    return data.json();
  } else {
    return data.status;
  }
}

let suman_object = Suman(url);

suman_object
  .then(function (value) {
    console.log(JSON.stringify(value));
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("fetch api ran successfully !");
  });
  
// FETCH API in a new way
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(JSON.stringify(data)));

// POST Data into Mock API Server


const data = {
  first_name: "suman",
  last_name: "gangopadhyay",
  location: "bangalore",
  image_url: "www.example.com",
};

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})

// UPDATE DATA into your MockAPI server using fetch API
const data = {
  first_name: "shalini",
  last_name: "shukla",
  location: "delhi",
  image_url: "www.guvi.in",
};

const url_1 = "https://62511ff6977373573f448b61.mockapi.io/suman/friends/10";

fetch(url_1, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});

// DELETE data based on its ID

fetch(url_1, {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
  body:JSON.stringify({message:'data deleted !'})
});
