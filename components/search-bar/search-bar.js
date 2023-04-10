export const form = document.querySelector("[data-js='search-bar']");

import { fetchCharacters } from "../../index.js";
import {setSearchQuery, pagination} from "../../index.js"; //deleted import "page"
import { setPage } from "../../index.js";

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Added: page-counter starts from 0: 
    pagination.textContent = "";
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    setSearchQuery (data.query);
        
    fetchCharacters();
    //Added setPage to 1 after searchQuery:
    setPage (1);
})


