const printToDom = (divId, stringToPrint) => {
    const element = document.getElementById(divId);
    element.innerHTML = stringToPrint
}

export {printToDom}