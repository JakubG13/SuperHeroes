const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f6d6e89aa5mshe5ce7c0d079fd71p11933djsnb5619368c7e1",
    "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
  },
};

let name = "";
let img = "";
let stats = [];
const api = "https://superhero-search.p.rapidapi.com/api/heroes";
const generateCard = () => {
  fetch(api, options)
    .then((response) => response.json())
    .then((response) => response[0])
    .then((response) => response["images"])
    .then((response) => (img = response["md"]));

  fetch(api, options)
    .then((response) => response.json())
    .then((response) => response[0])
    .then((response) => (name = response["name"]));

  fetch(api, options)
    .then((response) => response.json())
    .then((response) => response[0])
    .then((response) => response["powerstats"])
    .then((response) => Object.entries(response))
    .then((response) => {
      stats = [];
      for (let i = 0; i < 6; i++) {
        let stat = response[i].toString();
        stats.push(stat);
      }
    });
};

generateCard();

// fetch("https://superhero-search.p.rapidapi.com/api/heroes", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
