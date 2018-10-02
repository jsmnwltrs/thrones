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
        domString += `<h3>${character.name}</h3>
        <h4>House: ${character.house}</h4>
        <img src=${character.imageUrl}>`
    });
    printToDom(domString);
}

export {charactersBuilder}