import {printToDom} from "../helpers/util.js";
import {detailsBuilder} from "./details.js";

const characterClick = (e) => {
    const characterId = e.target.closest('.character-card').id;
    const currentCharacter = characters.find(x => x.id === characterId)
    detailsBuilder(currentCharacter);
}

const createEvents = () => {
    const characterCards = document.getElementsByClassName('character-card');
    for (let i = 0; i < characterCards.length; i++){
        characterCards[i].addEventListener('click', characterClick);
    }
}

const charactersBuilder = () => {
    let domString = "";
    characters.forEach((character) => {
        domString += 
        `<div class="col-2 character-card" id="${character.id}">
            <div class="card">
                <img class="card-img-top" src="${character.imageUrl}" alt="${character.name}">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                    </div>
            </div>
        </div>`;
    });
    printToDom(domString);
    createEvents();
}

export {charactersBuilder}