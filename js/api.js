const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "62da9f3eeamsh3845601a94a8d35p17648fjsn81e9f988af40",
    "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
  },
};
// fetch("https://superhero-search.p.rapidapi.com/api/heroes", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
let name = "";
let img = "";
let stats = [];
const generateCard = () => {
  fetch("https://superhero-search.p.rapidapi.com/api/heroes", options)
    .then((response) => response.json())
    .then((response) => response[0])
    .then((response) => response["images"])
    .then((response) => (img = response["md"]));

  fetch("https://superhero-search.p.rapidapi.com/api/heroes", options)
    .then((response) => response.json())
    .then((response) => response[0])
    .then((response) => (name = response["name"]));

  fetch("https://superhero-search.p.rapidapi.com/api/heroes", options)
    .then((response) => response.json())
    .then((response) => response[0])
    .then((response) => response["powerstats"])
    .then((response) => Object.entries(response))
    .then((response) => {
      for (let i = 0; i < 6; i++) {
        let stat = response[i].toString();
        stats.push(stat);
      }
    });
};
