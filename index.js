export const cardContainer = document.querySelector(

  '[data-js="card-container"]');


import { createCharacterCard } from "./components/card/card.js";
import {form} from "./components/search-bar/search-bar.js"; 



const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
export const pagination = document.querySelector('[data-js="pagination"]');

// States
export let maxPage = 42;
export let page = 1;
let searchQuery = "";
export function setSearchQuery (text) {
  searchQuery = text;
}

export function setPage (value){
  page = value;
}

export function setMaxPage (value){
  maxPage = value;
}

// export function getPage (){
//   return page;
// }

// Fetch Data

export async function fetchCharacters() {

  try {
    const response = await fetch (`https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`);

    pagination.textContent = `${page}/${maxPage}`;
    

    if (response.ok) {
      const promise = await response.json();
      const cardsData = promise.results;
      console.log(promise);
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

        //console.log(characterInformation);

        createCharacterCard(characterInformation);
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
    //pagination.textContent = `${page}/${maxPage}`;
  }
});


prevButton.addEventListener("click", () => {
  console.log("I clicked!!");
  if (page > 1) {
    page--;
    fetchCharacters();
    //pagination.textContent = `${page}/${maxPage}`;
  }
});
