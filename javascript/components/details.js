import {printToDom} from "../helpers/util.js"
import { charactersBuilder } from "./characters.js";

const closeButton = () => {
    const closeButton = document.getElementById('close');
    closeButton.addEventListener("click", charactersBuilder)
};

const detailsBuilder = (character) => {
let domString = 
    `<div class="col-6 offset-md-3">
        <div class="row">
            <button class="btn btn-danger" id="close">X</button>
        </div>
        <div class="row">
            <div class="col">
                <img src="${character.imageUrl}" alt="${character.name}"/>
            </div>
            <div class="col">
                <h1>${character.name}</h1>
                <h3>House: ${character.house}</h3>
            </div>
        </div>
    </div>`;
    printToDom(domString);
    closeButton();
};

export {detailsBuilder};