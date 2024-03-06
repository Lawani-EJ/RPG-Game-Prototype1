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

const monsters = [
  {name: "Slime", level:2, health:15},
  {name: "Fanged Beast", level:8, health:60},
  {name: "Dragon", level:20, health:300}
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
},

{
  name : "fight",
  "button text": ["Attack", "Dodge", "Run"],
  "button functions": [attack, dodge, goTown],
  "text": "You are fighting a monster."
},

  {
    name: "kill monster",
    "button text": ["Go to town square","Go to town square","Go to town square"],
    "button functions": [goTown,goTown,easterEgg],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
  },

  {
    name: "lose",
    "button text": ["REPLAY?","REPLAY?","REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You die. &#x2620;"
  },

  {
    name: "win",
        "button text": ["REPLAY?","REPLAY?","REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;"
  },

  {
    name: "eater egg",
    "button text": ["2", "8", "Go to town square?"],
    "button functions": [pickTwo, pickEight, goTown],
    text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
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



function goFight () {
  update (locations[3]);
  monsterHealth = monsters[fighting].health; //Using dot notation at this section
  monsterStats.style.display = 'block'; //Using inline styling in JS 
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
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

function buyWeapon() {
    if (currentWeapon < weapons.length - 1){

  if (gold >= 30) {
    gold -= 30;
    currentWeapon++;
    goldText.innerText = gold;
    let newWeapon = weapons[currentWeapon].name;
    text.innerText = "You now have a " + newWeapon + ".";
    inventory.push(newWeapon);
    text.innerText += " In your inventory you have: " + inventory;
  }

  else{
    text.innerText = "You do not have enough gold to buy a weapon.";
  }
    }
     else{
  text.innerText = "You already have the most powerful weapon!"
  button2.innerText = "Sell weapon for 15 gold";
  button2.onclick = sellWeapon
  }

}

function sellWeapon (){
  if (inventory.length > 1){
gold += 15;
goldText.innerText = gold;
let currentWeapon
currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventory;
  }
  else {
    inventory < 1;
    text.innerText = "Don't sell your only weapon!";
  }
}

function fightSlime(){  // These 2 functions will be used in my cave object
  fighting = 0;
  goFight();
}

function fightBeast(){
  fighting = 1;
  goFight();
}

function fightDragon () {
    fighting = 2;
    goFight();
}
//initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

//created another empty function
//Copied function of the goTown function
function update (location){
    monsterStats.style.display = "none";
     const button1 = document.querySelector("#button1");
    button1.innerText = location["button text"][0];  //updated button element
    button1.onclick = location["button functions"][0]; //updated onclick property
    button2.innerText = location["button text"][1];  //updated button element
    button2.onclick =location["button functions"][1];//updated onclick property
    button3.innerText = location["button text"][2]; //updated button element
    button3.onclick = location["button functions"][2];//updated onclick property
      text.innerHTML = location.text;  // modified the display text by using dot notation
}

function attack(){
  text.innerText = "The " +monsters[fighting].name+ " attacks";
    text.innerText = "You attack it with your " +  weapons[currentWeapon].name + ".";
    health -= getMonsterAttackValue(monsters[fighting].level);
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;

    if (isMonsterHit()){
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
    }
    else {
      text.innerText += " You Miss!"
    }

    if (health <= 0) {
      lose();
    } else if (monsterHealth <= 0) {
            defeatMonster();
      if (fighting === 2) {
        winGame();
      } else {
        defeatMonster ();
      }
    }

    if (Math.random() <= .1 && inventory.length !==1 ) {
      text.innerText += " Your " + inventory.pop() + " Breaks. "
      currentWeapon --;
    }
}

function getMonsterAttackValue(level) {
const hit = (level * 5) - (Math.floor(Math.random() * xp));

console.log(hit);
return hit > 0 ? hit: 0;
}

function dodge(){
  text.innerText = "You dodge attack from the " + monsters[fighting].name;
}

function defeatMonster(){
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;

  update(locations[4]);
}

function lose(){
  update(locations[5]);
}

function winGame(){
  update(locations[6]);
}

function restart (){
  xp = 0;
  health = 100;
  gold= 50;
  currentWeapon = 0;
  inventory = ["stick"];

  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  
  goTown()
}

function easterEgg (){
  update(locations[7]);
}

function isMonsterHit (){
  return Math.random() > .2 || health < 20;
}

function pick (guess){
  numbers = [];
  while (numbers.length < 10){
numbers.push(Math.floor(Math.random() *11))
text.innerText = "You Picked" + guess + ". Here are the random numbers:\n";
  }

  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n"
}

if (numbers.includes(guess)) {
  text.innerText += "Right! You win 20 gold!";
  gold += 20;
  gold.innerText = gold;
} else {
  text.innerText += "Wrong! You lose 10 health!";
  health -= 10;
  healthText.innerText = health;

  if (health <= 0){
    lose();
  }
}
}

function pickTwo (){
  pick(2)
}

function pickEight (){
  pick(8)
}