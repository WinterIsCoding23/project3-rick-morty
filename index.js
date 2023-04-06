//import createCharacterCard from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
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
async function fetchCharacters() {

  try {
    const response = await fetch ("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error("An Error occurred");
  }   
}
console.log (fetchCharacters());


// createCharacterCard
data.