const url = "https://623d55e87efb5abea68ce31d.mockapi.io/suman/friends/";

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(JSON.stringify(data)));


// MORE TRADATIONAL WAY


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
