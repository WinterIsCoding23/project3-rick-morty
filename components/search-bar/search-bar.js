export const form = document.querySelector("[data-js='search-bar']");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    //console.log(event);

    // let searchQuery = "";
    let searchQuery = data["query"];    
    console.log(searchQuery);

    
    const response = fetch ("https://rickandmortyapi.com/api/character&name=<searchQuery>");

    fetchCharacters();
})


