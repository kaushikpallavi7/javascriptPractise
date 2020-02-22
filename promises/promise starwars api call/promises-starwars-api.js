const API_URL = "https://starwars.egghead.training/";
const output = document.getElementById("output");
output.innerText = "Loading ....";

//films is an array of objects
const responsePromise = fetch(API_URL + "films");
//following is the promise chain
responsePromise.then(response =>  {
return response.json() //returns the body in json but this also returns a promise
}).then(films => {
    //display episode id and title
let filmDetails = films
                .sort((a,b) => a.episode_id - b.episode_id)
                .map(currentFilm => `${currentFilm.episode_id}. ${currentFilm.title}`)
                .join("\n");
output.innerText = filmDetails;
})