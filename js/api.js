const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "62da9f3eeamsh3845601a94a8d35p17648fjsn81e9f988af40",
    "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
  },
};

fetch("https://superhero-search.p.rapidapi.com/api/heroes", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
