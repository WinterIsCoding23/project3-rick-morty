export const form = document.querySelector("[data-js='search-bar']");

import { fetchCharacters } from "../../index.js";
import {setSearchQuery, pagination} from "../../index.js"; //added: import "pagination"

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Added: page-counter starts from 0: 
    pagination.textContent = "";
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    console.log(event);
    console.log( data.query);
    
    setSearchQuery (data.query);
    console.log();
    
    fetchCharacters();
})


