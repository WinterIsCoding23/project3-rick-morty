export const form = document.querySelector("[data-js='search-bar']");

import { fetchCharacters } from "../../index.js";
import {setSearchQuery} from "../../index.js";

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    console.log(event);
    console.log( data.query);
    
    setSearchQuery (data.query);
    console.log();
    
    fetchCharacters();
})


