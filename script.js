// Import fruits and flowers
import { fruits, flowers } from './data.js';
console.log("script.js is loaded!");


// Create the main components
const createTitle = () => {
    const title = document.createElement("h1");
    title.textContent = "Fruits and Flowers";
    document.body.appendChild(title);
};

const createSmallContainer = () => {
    const smallContainer = document.createElement("div");
    smallContainer.id = "small-container";

    const selectBox = document.createElement("select");
    selectBox.innerHTML = `
        <option value="fruits">Fruits</option>
        <option value="flowers">Flowers</option>
    `;
    smallContainer.appendChild(selectBox);

    const inputBox = document.createElement("textarea");
    smallContainer.appendChild(inputBox);

    const inputBtn = createButton("Insert", () => handleInsert(inputBox));
    const makeListBtn = createButton("Make List", () => handleMakeList(selectBox.value));
    smallContainer.append(inputBtn, makeListBtn);

    return smallContainer;
};

const createListContainer = () => {
    const listContainer = document.createElement("div");
    listContainer.id = "list-container";
    return listContainer;
};

const createButton = (text, onClick) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", onClick);
    return button;
};

// State and Handlers
let inputedItems = [];

const handleInsert = (inputBox) => {
    inputedItems = [...new Set(inputBox.value.split(",").map(item => item.trim().toLowerCase()))];
};

const handleMakeList = (type) => {
    const listContainer = document.getElementById("list-container");
    listContainer.innerHTML = "";

    const items = type === "fruits" ? fruits : flowers;
    const filteredItems = inputedItems.filter(item => items.includes(item));

    const list = document.createElement(type === "fruits" ? "ol" : "ul");
    filteredItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });

    listContainer.appendChild(list);
};

// Initialize the App
const init = () => {
    createTitle();

    const mainContainer = document.createElement("div");
    mainContainer.id = "main-container";

    const smallContainer = createSmallContainer();
    const listContainer = createListContainer();

    mainContainer.appendChild(smallContainer);
    mainContainer.appendChild(listContainer);

    document.body.appendChild(mainContainer);
};

init();
