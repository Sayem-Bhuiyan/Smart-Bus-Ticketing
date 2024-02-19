// get element by id
const getElementById = (elementId) => {
    const element = document.getElementById(elementId);
    return element;
}

// set innerText by id
const setInnerTextById = (elementId, value) => {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// get element innerText value
const getElementInnerTextValue = (elementId) => {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementValue = parseInt(elementText);
    return elementValue;
}

