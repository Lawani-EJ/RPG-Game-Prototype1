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
const weapons = [
    {
        name: "stick",
        power: "5",
    },

        {
        name: "dagger",
        power: "30",
    },

        {
        name: "claw hammer",
        power: "50",
    },

        {
        name: "sword",
        power: "100",
    }
];
const locations = [
    {
    name: "town square", //added an object property name
    "button text": ["Go to store", "Go to cave", "Fight dragon"], //added a button text object property with an empty string value
    // then gave 3 string values
    "button functions": [goStore, goCave, fightDragon], // created the button function property  and assigned it a value of an array containing three different functions
    "text": "You are in the town square. You see a sign that says \"Store\"." //created the text  property and assigned it a value
},

    {
    name: "store", //added an object property name
    "button text": ["Buy 10 health (10 gold)","Buy weapon (30 gold)","Go to town square"], //added a button text object property with an empty string value
    // then gave 3 string values
    "button functions": [buyHealth, buyWeapon, goTown], // created the button function property  and assigned it a value of an array containing three different functions
    "text": "You enter the store." //created the text  property and assigned it a value
},

// Added 3rd object   to array of objects for new location
{
    name: "cave",
    "button text": ["Fight slime","Fight fanged beast","Go to town square"],
    "button functions": [fightSlime,fightBeast,goTown],
    "text": "You enter the cave. You see some monsters."
}
]; //Declared empty variable and added an empty object 

//moved the function above the go store function and added the content from the goStore Function
function goTown () {
update (locations[0]);  //the update function will use the the data from the location that is used to it.
//added the locations function as an argument
//added a bracket notation
}


function goStore () {
  update(locations[1]);  //the update function will use the the data from the location that is used to it.
}

function goCave () {
    update(locations[2]);
}

function fightDragon () {
    console.log("Fighting dragon.");
}

//created 3 empty functions 
function buyHealth() {
    if (gold >= 10) {
    gold -= 10;
    health += 10;
      goldText.innerText = gold;
    healthText.innerText = health;
    } 
    
    else{
text.innerText = "You do not have enough gold to buy health.";
    }
}

function buyWeapon () {
    if (gold >= 30) {
        gold -= 30
    }
}

function fightSlime(){  // These 2 functions will be used in my cave object

}

function fightBeast(){

}
//initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

//created another empty function
//Copied function of the goTown function
function update (location){
     const button1 = document.querySelector("#button1");
    button1.innerText = location["button text"][0];  //updated button element
    button1.onclick = location["button functions"][0]; //updated onclick property
    button2.innerText = location["button text"][1];  //updated button element
    button2.onclick =location["button functions"][1];//updated onclick property
    button3.innerText = location["button text"][2]; //updated button element
    button3.onclick = location["button functions"][2];//updated onclick property
      text.innerText = location.text;  // modified the display text by using dot notation
}