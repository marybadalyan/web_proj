document.body.style.backgroundColor = "lightblue"; //sets the background color
document.body.style.color = "blue"; //sets the color of the letters
document.body.style.display = "flex"; //makes it a flex contatiner 
document.body.style.flexDirection = "column"; //the direction of which children are aligned
document.body.style.alignItems = "center";   // Centers elements horizontally
document.body.style.justifyContent = "center"; // Centers elements vertically
document.body.style.height = "100vh";  // Make sure the body takes up full height of the viewport
document.body.style.backgroundImage = "url('image.jpg')"; //sets a background image 

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


const title = document.createElement("h1"); //makes a header 

title.textContent = "Fruits and Flowers"; //gives tge content 
title.style.color = "white"; //and the color of the content
title.style.textAlign = "center"; //alignment of the content

document.body.appendChild(title);  //and makes it a child of body to be displayed 

const smallContainer = document.createElement("div"); //we will make a smaller container that'll have the selectbox,and buttons
smallContainer.style.paddingTop = "20px";  // the top padding from the inside use margin for outer 
smallContainer.style.paddingBottom = "20px"; // bottom padding
smallContainer.style.display = "flex"; 
smallContainer.style.flexDirection = "column";  
smallContainer.style.gap = "10px"; // Add space between child elements
smallContainer.style.alignItems = "center"; 
smallContainer.style.width = "400px"; //sets the containers width 
smallContainer.style.height = "360px"; //sets height
smallContainer.style.borderRadius = "15px"; //makes curved borders
smallContainer.style.backgroundColor = "lightblue";

const selectBox = document.createElement("select"); //makes a select element 
selectBox.style.width = "300px";  
selectBox.style.height = "30px";
selectBox.style.fontSize = "16px"; 

const fruitOption = document.createElement("option"); //add options
fruitOption.text = "fruits";    //specify text
selectBox.appendChild(fruitOption); //push them as a child to a container

const flowerOption = document.createElement("option");
flowerOption.text = "flowers";
selectBox.appendChild(flowerOption);


smallContainer.appendChild(selectBox);

const containter = document.createElement("div"); 
containter.style.display = "flex";
containter.style.flexDirection = "row"; // Align items vertically
containter.style.alignItems = "center"; 
containter.style.height = "400px";
containter.style.width = "800px";
containter.style.gap = "10px"; 



const inputBox = document.createElement("textarea");

inputBox.style.width = "250px"; 
inputBox.style.height = "190px"; 
inputBox.style.borderRadius = "15%"; 
inputBox.style.outline = "none"; // Removes focus outline when you start typing
inputBox.style.padding = "15px"; // to avoid text touching the edges
inputBox.style.lineHeight = "1.5"; // height space between lines
inputBox.style.fontSize = "16px";
inputBox.style.color =  "#FFC0CB";

smallContainer.appendChild(inputBox);


const inputBtn = document.createElement("button");
inputBtn.textContent = "Insert";
inputBtn.style.width = "300px";
inputBtn.style.height = "30px";
inputBtn.style.borderRadius = "5px";
inputBtn.style.border = "none"; //removes deafault button endges
inputBtn.style.backgroundColor = "#4682b4";
inputBtn.style.color = "white";
inputBtn.style.fontSize = "16px";
inputBtn.addEventListener("mouseover", () => inputBtn.style.backgroundColor = "#5a9bd8"); //these expressions ensure colorcahnge to the button 
inputBtn.addEventListener("mouseout", () => inputBtn.style.backgroundColor = "#4682b4");  //in case of hovering overit or unfocusing
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
listContainter.style.width = "400px";
listContainter.style.height = "400px";
listContainter.style.borderRadius = "15px";
listContainter.style.color = "white";
listContainter.style.paddingLeft = "10px";
listContainter.style.backgroundColor = "pink";
listContainter.style.overflowY = "auto";
listContainter.style.fontSize = "20px";
listContainter.style.paddingLeft = "20px";


containter.appendChild(listContainter);

let inputedItems = []; //we'll need to take the input text 

inputBtn.addEventListener("click",function(){ //calling a function when the button is clicked 
    /*
    the text uses commas and  might have unnecessary spaces will need to remove
    split returns a list of items while map maps them ito their trimmed versions
    whitch we will add to a set  to only take unique items  
    */ 
    inputedItems = [...new Set(inputBox.value.split(",").map(item => item.trim().toLowerCase()))]; 

});


makeListBtn.addEventListener("click",function() {

    listContainter.innerHTML = "";  //rests the contents of the list div , we could also set an id than call it by that

    //depending of the slectbox value make a list 
    if(selectBox.value === "fruits"){ 
        // Create an ordered list
        const ol = document.createElement("ol");
        //filter function returns  a list of items that fruits list includes 
        const filterdFruits = inputedItems.filter(item => fruits.includes(item));

        // Add each item as a list element
        filterdFruits.forEach(item => {
            const li = document.createElement("li"); // Create a list item
            li.textContent = item; // Set the text of the list item
            ol.appendChild(li); // Add the list item to the unordered list
        });

        ol.style.listStyleType = "upper-roman";  
        ol.style.paddingLeft = "20px";  

        listContainter.appendChild(ol);
    } else if(selectBox.value === "flowers"){
        //ul is for unordered list
        const ul = document.createElement("ul");
        const filterdFlowers = inputedItems.filter(item => flowers.includes(item));

        filterdFlowers.forEach(item => {
            const li = document.createElement("li"); 
            li.textContent = item; 
            ul.appendChild(li); 
        });
        
        ul.style.paddingLeft = "20px"; 
        listContainter.appendChild(ul);
    }

});

document.body.appendChild(containter);