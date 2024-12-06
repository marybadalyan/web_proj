document.body.style.backgroundColor = "lightblue";
document.body.style.color = "blue"; //tarer
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";   // Centers elements horizontally
document.body.style.justifyContent = "center"; // Centers elements vertically
document.body.style.height = "100vh";  // Make sure the body takes up full height of the viewport
document.body.style.backgroundImage = "url('image.jpg')";

//for determining if its a fruit or flower we have to have th
let fruits = [
    "apple", "banana", "cherry", "date", "elderberry", 
    "fig", "grape", "honeydew", "kiwi", "lemon", 
    "mango", "nectarine", "orange", "papaya", "quince", 
    "raspberry", "strawberry", "tangerine", "ugli fruit", "watermelon"
];
let flowers = [
    "rose", "tulip", "daisy", "sunflower", "lily", 
    "orchid", "daffodil", "marigold", "lavender", "jasmine", 
    "peony", "chrysanthemum", "poppy", "hibiscus", "gardenia", 
    "camellia", "iris", "magnolia", "carnation", "bluebell"
];


const title = document.createElement("h1");

title.textContent = "Fruits and Flowers";
title.style.color = "white";
title.style.textAlign = "center";

document.body.appendChild(title);

const smallContainer = document.createElement("small_container");
smallContainer.style.paddingTop = "20px";
smallContainer.style.paddingBottom = "20px";
smallContainer.style.display = "flex"; // Enable flexbox
smallContainer.style.justifyContent = "space-between"; // Space between children
smallContainer.style.flexDirection = "column";
smallContainer.style.gap = "10px"; // Add space between child elements
smallContainer.style.alignItems = "center";
smallContainer.style.width = "400px";
smallContainer.style.height = "360px";
smallContainer.style.borderRadius = "15px";
smallContainer.style.backgroundColor = "lightblue";

const selectBox = document.createElement("select");
selectBox.style.width = "300px";
selectBox.style.height = "30px";
selectBox.style.fontSize = "16px";
const fruitOption = document.createElement("option");
fruitOption.text = "fruits";
selectBox.appendChild(fruitOption);

const flowerOption = document.createElement("option");
flowerOption.text = "flowers";
selectBox.appendChild(flowerOption);


smallContainer.appendChild(selectBox);

const containter = document.createElement("div");
containter.style.display = "flex";
containter.style.flexDirection = "row"; // Align items vertically
containter.style.alignItems = "center"; // Center items horizontally
//containter.style.justifyContent = "space-between"; // Add space between items
containter.style.height = "400px";
containter.style.width = "800px";
containter.style.gap = "10px"; // Add space between child elements



const inputBox = document.createElement("textarea");

inputBox.style.width = "250px"; // Width of the input box
inputBox.style.height = "190px"; // Height of the input box
inputBox.style.borderRadius = "15%"; // Rounded corners
inputBox.style.border = "none"; // Removes the black border
inputBox.style.outline = "none"; // Removes focus outline (if needed)
inputBox.style.textAlign = "left"; // Aligns the text to the left
inputBox.style.padding = "15px"; // Adds padding inside the box to avoid text touching the edges
inputBox.style.lineHeight = "normal"; // Normal line height (optional, adjusts spacing)
inputBox.style.verticalAlign = "top"; // Aligns the text at the top
inputBox.style.whiteSpace = "pre-wrap"; // Ensures text wraps within the box
inputBox.style.color =  "#FFC0CB";

smallContainer.appendChild(inputBox);


const inputBtn = document.createElement("button");
inputBtn.textContent = "Insert";
inputBtn.style.width = "300px";
inputBtn.style.height = "30px";
inputBtn.style.borderRadius = "5px";
inputBtn.style.border = "none";
inputBtn.style.backgroundColor = "#4682b4";
inputBtn.style.color = "white";
inputBtn.style.fontSize = "16px";
inputBtn.addEventListener("mouseover", () => inputBtn.style.backgroundColor = "#5a9bd8");
inputBtn.addEventListener("mouseout", () => inputBtn.style.backgroundColor = "#4682b4");
smallContainer.appendChild(inputBtn);

const makeListBtn = document.createElement("button");
makeListBtn.textContent = "Make List";
makeListBtn.style.width = "300px";
makeListBtn.style.height = "30px";
makeListBtn.style.borderRadius = "5px";
makeListBtn.style.border = "none";
makeListBtn.style.backgroundColor = "#4682b4";
makeListBtn.style.color = "white";
makeListBtn.style.fontSize = "16px";
makeListBtn.addEventListener("mouseover", () => inputBtn.style.backgroundColor = "#5a9bd8");
makeListBtn.addEventListener("mouseout", () => inputBtn.style.backgroundColor = "#4682b4");
smallContainer.appendChild(makeListBtn);


containter.appendChild(smallContainer);



const listContainter = document.createElement("div");
listContainter.style.backgroundColor = "white";
listContainter.style.width = "400px";
listContainter.style.height = "400px";
listContainter.style.borderRadius = "15px";
listContainter.style.color = "white";
listContainter.style.paddingLeft = "10px";
listContainter.style.backgroundColor = "pink";
listContainter.style.overflowY = "auto";
listContainter.style.fontSize = "20px";
listContainter.style.paddingLeft = "20px";
listContainter.setAttribute('id', 'list-container');

containter.appendChild(listContainter);

let inputedItems = [];

inputBtn.addEventListener("click",function(){
    inputedItems = [];
    inputedItems = [...new Set(inputBox.value.split(",").map(item => item.trim()))];
});


makeListBtn.addEventListener("click",function() {

    document.getElementById("list-container").innerHTML = "";

    if(selectBox.value === "fruits"){
        // Create an ordered list
        const ol = document.createElement("ol");
        const filterdFruits = inputedItems.filter(item => fruits.includes(item));

        // Add each item as a list element
        filterdFruits.forEach(item => {
            const li = document.createElement("li"); // Create a list item
            li.textContent = item; // Set the text of the list item
            ol.appendChild(li); // Add the list item to the unordered list
        });
        // Style the unordered list (optional)
        ol.style.listStyleType = "upper-roman"; // Use roman
        ol.style.paddingLeft = "20px";

        // Append the unordered list to the document body
        listContainter.appendChild(ol);
    } else if(selectBox.value === "flowers"){

        const ul = document.createElement("ul");
        const filterdFlowers = inputedItems.filter(item => flowers.includes(item));

        // Add each item as a list element
        filterdFlowers.forEach(item => {
            const li = document.createElement("li"); // Create a list item
            li.textContent = item; // Set the text of the list item
            ul.appendChild(li); // Add the list item to the unordered list
        });
        // Style the unordered list (optional)
        ul.style.paddingLeft = "20px"; 
        listContainter.appendChild(ul);

    }

});

document.body.appendChild(containter);