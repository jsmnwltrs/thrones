const printToDom = (stringToPrint) => {
    const element = document.getElementById("characters");
    element.innerHTML = stringToPrint;
}

export {printToDom};