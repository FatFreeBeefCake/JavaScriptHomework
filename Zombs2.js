var outcome;

window.alert("You just woke up. All you can hear are screams and grunts. All you can think to your self, is this it? is this the end? The last thing you want this to be is zombies. . .");
var beginningScenarios = ["BANG, you open your eyes and you dont want to look. Your head tilts to the side, its your worst nightmare. A zombie is trying to break through the window. You jumo up and try to run out side your room unfortunetly a zombie is blokcing your path for your escape.",
"It been a few months, towns and cities lie in ruin and burned. Your supplies are running low you head out into a store to loot some goods. You see some flamming hot cheetos on a shelf the only obstical a zombie wanting the same bag.",
"Your dazed and confused a zombie is standing 10 feet in front of you. "];

function randomNumber(range){
    "use strict";
    if(typeof range === "number"){
        return Math.round(Math.random() * range);
    }
}

alert(beginningScenarios[randomNumber(beginningScenarios.length - 1)]);

var character = {
    health: 5,
    strength: 0,
    stealth: 0,
    armour: "low",
    name: window.prompt("What is your name?"),
    characterClass: window.prompt("This is your fantasy, what would you like to be? (Soldier 47, Jedi, Paladin, Yourself)").toLowerCase()

};

if(!character.name){
    character.name = window.prompt("Oh dont want to play? Ill just name you my self!");

    if (!character.name){
        window.alert("Fine, The die has been cast Princess Piddle");
        character.name = "Princess Piddle";
    }
}

if (character.characterClass === "Soldier") {
    character.strength = 5;
}

if (character.characterClass === "Jedi") {
    character.stealth = 5;
    character.strength = 2;
}

if (character.characterClass === "Paladin") {
    character.health = 7;
}

if (character.characterClass === "Yourself") {
    character.armour = "low";
}

var choice = window.prompt("Finding your self in this situation you have 3 options " + character.characterClass + " " + character.name + ". First option you may attack the thing infront of you. " + 
"Two you can try and sneak by, the smell will be awful. " + "or do absolutly nothing. " + "(Please type: Attack, Sneak, or Nothing)").toLowerCase();

if (choice === "attack") {
    if (character.strength === 5) {
        window.alert("With your fist you try to punch straight through the zombies skull!");
        outcome = "win";
        character.strength++;
    } else if(character.stregth <= 5) {
        window.alert("You try and punch straight through the zombies skull!");
        window.alert("Your fist gets stuck in his jaw and he bites you, you are now infected");
        outcome = "lose";
    }
}

if (choice === "sneak" || choice === "sneak by the zombie"){
    if(character.stealth === 5){
        window.alert("2");
    }
    if (character.stealth < 5){
        window.alert("3");
    if (character.strength === 5) {
        window.alert("2");
        outcome = "win";
    }  else {
        window.alert("4");
        outome = "lose";

       }
    }
}

if (outcome === "lose"){
    window.alert("You lose!");
} else if (outcome === "win") {
    window.alert("You win!");
}

