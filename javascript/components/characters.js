import {printToDom} from "../helpers/util.js"

const characters = [
    {name: "John Snow",
    house: "Stark",
    imageUrl: "https://pbs.twimg.com/profile_images/901947348699545601/hqRMHITj_400x400.jpg"},
    {name: "Daenerys Targaryen",
    house: "Targaryen",
    imageUrl: "https://vignette.wikia.nocookie.net/gameofthrones/images/5/5f/Daenerys_Dragonpit.jpg/revision/latest?cb=20171015095128"},
    {name: "Tyrion Lannister",
    house: "Lannister",
    imageUrl:"https://vignette.wikia.nocookie.net/gameofthrones/images/5/58/Tyrion_main_s7_e6.jpg/revision/latest?cb=20170818050344"},
    {name: "Arya Stark",
    house: "Stark",
    imageUrl:"https://vignette.wikia.nocookie.net/gameofthrones/images/5/54/Arya_the_dragon_and_the_wolf_s7.jpg/revision/latest?cb=20170828062911"}
]

const charactersBuilder = () => {
    let domString = "";
    characters.forEach((character) => {
        domString += 
        `<div class="col-2 character">
            <div class="card">
                <img class="card-img-top" src="${character.imageUrl}" alt="${character.name}">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                        <h6 class="card-title">${character.house}</h6>
                    </div>
            </div>
        </div>`;
    });
    printToDom(domString);
}

export {charactersBuilder}