import { createCharacterCard } from "./components/card/card.js";
export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 42;
let page = 1;
let searchQuery = "";

// Fetch Data
async function fetchCharacters(page) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );

    if (response.ok) {
      const promise = await response.json();
      const cardsData = promise.results;
      console.log(promise);
      console.log(cardsData);

      cardsData.forEach((cardsData) => {
        const characterInformation = {
          cardImage: "",
          cardTitle: "",
          cardStatus: "",
          cardType: "",
          cardOcurrences: "",
        };

        characterInformation.cardStatus = cardsData.status;
        characterInformation.cardType = cardsData.type;
        characterInformation.cardTitle = cardsData.name;
        characterInformation.cardImage = cardsData.image;
        characterInformation.cardOcurrences = cardsData.episode.length;

        console.log(characterInformation);

        createCharacterCard(characterInformation);
      });
    } else {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error("An Error occurred");
  }
}

console.log(fetchCharacters());

//console.log(fetchCharacters());

//console.log(array);

// createCharacterCard
// const test =Object.values(data).forEach(key => {
//   console.log(test);
// })

//cardContainer.append(newCards);
