export const cardContainer = document.querySelector('[data-js="card-container"]');

import { createCharacterCard } from "./components/card/card.js";
import {form} from "./components/search-bar/search-bar.js"; 

const searchBarContainer = document.querySelector('[data-js="search-bar-container"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
export const pagination = document.querySelector('[data-js="pagination"]');

// States
export let maxPage = 42;
export let page = 1;
// Add page-function
export function setPage (number){
  page = number; 
}

let searchQuery = "";
export function setSearchQuery (text) {
  searchQuery = text;
}

// Fetch Data
export async function fetchCharacters() {

  try {
    const response = await fetch (`https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`);

    // Added: pagination 1/42:
    pagination.textContent = `${page}/${maxPage}`;    

    if (response.ok) {
      const promise = await response.json();
      const cardsData = promise.results;

      // Added: 
      const maxPageValue= promise.info.pages;
      console.log(maxPageValue);
      maxPage = maxPageValue;

      cardContainer.innerHTML = "";

      cardsData.forEach(cardsData => {

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

        createCharacterCard(characterInformation);
        // Added following line: pagination...
        pagination.innerHTML = `${page}/${maxPage}`;
      });
    } else {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error("An Error occurred");
  }
}


fetchCharacters();

nextButton.addEventListener("click", () => {
  console.log("I clicked!!");
  if (page < maxPage) {
    page++;
    fetchCharacters();
    // Change .innerHTML to .textContent
    pagination.textContent = `${page}/${maxPage}`;
  }
});

prevButton.addEventListener("click", () => {
  console.log("I clicked!!");
  if (page > 1) {
    page--;
    fetchCharacters();
    pagination.textContent = `${page}/${maxPage}`;
  }
});
