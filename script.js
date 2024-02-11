//Declared variables
let xp = 0;
let health =100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

//JavaScript interacts with the HTML using the Document Object Model, or DOM. 
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text    = document.querySelector("#text");
const xpText  = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const locations = [{
    name: "town square", //added an object property name
    "button text": ["Go to store", "Go to cave", "Fight dragon"] //added a button text object property with an empty string value
    // then gave 3 string values
}]; //Declared empty variable and added an empty object 


//moved the function above the go store function and added the content from the goStore Function
function goTown () {
        const button1 = document.querySelector("#button1");
    button1.innerText = "Go to store";  //updated button element
    button1.onclick = goStore; //updated onclick property
    button2.innerText = "Go to cave";  //updated button element
    button2.onclick = goCave;//updated onclick property
    button3.innerText = "Fight dragon"; //updated button element
    button3.onclick = fightDragon;//updated onclick property
    text.innerText = "You are in the town square. You see a sign that says \"Store\".";  // modified the display text
}


function goStore () {
    const button1 = document.querySelector("#button1");
    button1.innerText = "Buy 10 health (10 gold)";
    button1.onclick = buyHealth;
    button2.innerText = "Buy weapon (30 gold)";
    button2.onclick = buyWeapon;
    button3.innerText = "Go to town square";
    button3.onclick = goTown;
    text.innerText = "You enter the store";  // modified the display text
}

function goCave () {
    console.log("Going to cave.");
}

function fightDragon () {
    console.log("Fighting dragon.");
}

//created 3 empty functions 
function buyHealth () {

}

function buyWeapon () {
    
}

//initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

//created another empty function
function update (location){

}