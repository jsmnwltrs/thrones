import {setCharacters, charactersBuilder} from "../components/characters.js"

function executeThisCodeAfterFileLoaded () {
    // console.log("request", this.responseText);  //arrow functions change what 'this' means. It is the request itself. We need to use this function format.
    const data = JSON.parse(this.responseText);    // Takes a JSON string and makes it an object
    setCharacters(data.characters);                  // gets the array
    charactersBuilder();
};

function executeThisCodeIfXhrFails () {
    console.log("shit broke");
};

const getCharacters = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
    myRequest.addEventListener("error", executeThisCodeIfXhrFails);
    myRequest.open("GET", "./db/characters.json");  //on execution what's the path? it's from index.html, not relative to this file location.
    myRequest.send();
};

export {getCharacters};