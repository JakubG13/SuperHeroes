class Card {
  constructor(name, stats, img) {
    this.name = name;
    this.stats = stats;
    this.img = img;
  }
  // metody
  createCard() {
    const card = document.createElement("div");
    card.classList.add("card");
    const cardImg = document.createElement("div");
    cardImg.classList.add("card__img");
    card.appendChild(cardImg);
    const cardDescription = document.createElement("div");
    cardDescription.classList.add("card__description");
    cardDescription.classList.add("description");
    card.appendChild(cardDescription);
    const descriptionName = document.createElement("p");
    descriptionName.classList.add("description__name");
    descriptionName.textContent = this.name;
    cardDescription.appendChild(descriptionName);
    const descriptionInfo = document.createElement("div");
    descriptionInfo.classList.add("description__info");

    for (let i = 0; i < 6; i++) {
      const p = document.createElement("p");
      p.textContent = stats[i];
      descriptionInfo.appendChild(p);
    }
    cardDescription.appendChild(descriptionInfo);

    const main = document.querySelector(".main-content");
    main.appendChild(card);
  }
}

// const img =
//   "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/628-spyke.jpg";

// const stats = [
//     "combat: 50",
//     "durability: 80",
//     "intelligence: 81",
//     "power: 100",
//     "speed: 25",
//     "strength: 16",
//   ];
//   const hero = new Card("spyke", stats);
//   hero.createCard();
