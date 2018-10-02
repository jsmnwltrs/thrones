import {printToDom} from "../helpers/util.js"

const detailsBuilder = (character) => {
let domString = 
    `<div class="col-6 offset-md-3">
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
};

export {detailsBuilder};