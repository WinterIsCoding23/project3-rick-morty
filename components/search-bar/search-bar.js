export const form = document.querySelector("[data-js='search-bar']");

import { fetchCharacters } from "../../index.js";
import { setSearchQuery, page, setMaxPage, pagination, setPage } from "../../index.js";

form.addEventListener("submit", (event) => {
    event.preventDefault();
    pagination.textContent = "";
    //console.log(pagination.textContent);
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    //console.log(data);
    //console.log(event);
    //console.log( data.query);
    
    setSearchQuery (data.query);
    //console.log();    
    
    fetchCharacters();    

    
    //pagination.textContent = `${page}/${maxPage}`;

})


