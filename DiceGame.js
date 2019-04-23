let magicvalue= 150;
let strengthvalue = 100;
let rangevalue = 125;
let strengthdefensevalue = 150;
let magicdefensevalue = 80;
let rangedefensevalue =100;

let daysroll = diceroll(7);
let randomfactor = diceroll(100);
let randommelee = diceroll(300);
let randommagic = diceroll(200);
let randomrange = diceroll(250);
let randomenemymelee = diceroll(150);
let randomenemymagic = diceroll(80);
let randomenemyrange = diceroll(100);
let randommelee2 = diceroll(30)
let randommagic2 = diceroll(10)
let randomrange2 = diceroll(20)

let enemymagic = 80 + (5 * daysroll);
let enemystrength = 60 + (5 * daysroll);
let enemyrange = 70 + (5 * daysroll);
let enemystrengthdefense = 100 + (5 * daysroll);
let enemymagicdefense = 60 + (5 * daysroll);
let enemyrangedefense = 80 + (5 * daysroll);
let enemymeleeunits = diceroll(1000) + 1000;
let enemymagicunits = diceroll(1000) + 1000;
let enemyrangeunits = diceroll(1000) + 1000;
let meleeunits = diceroll(500) + 500;
let magicunits = diceroll(500) + 500;
let rangeunits = diceroll(500) + 500;


function start() {
let start = prompt("Do you wanna start training? Enter yes or no")
if (start == "yes") {
	starttraining()
} else if(start == "no") {

} else {
	alert("Please enter yes or no")
	start()
}

}


function diceroll(sides) {
	sides = parseInt(sides);
	 return Math.floor(Math.random() * (sides) + 1);
}
function preparation() {
let training = prompt("Which units would you like to train? Choose either melee, magic, range, or stop.")
if (training == "melee" || training =="magic" || training =="range"){ 
increasing(training);
}
	else if (training == "stop"){
		
	}
	else {
	alert("Please enter melee, magic, range, or stop!");
	preparation();
}
}

function increasestrength() {
	strengthvalue += (diceroll(25) + 10);
	console.log( "You have increase the strength of your melee units to" + " " + strengthvalue);
}

function increasemeleedefense() {
	strengthdefensevalue += (diceroll(25) + 10);
	console.log( "You have increase the defense of your melee units to" + " " + strengthdefensevalue);
}

function increasemagic() {
	magicvalue += (diceroll(25) + 10);
	console.log( "You have increase the magic of your magic units to" + " " + magicvalue);
}

function increasemagicdefense() {
	magicdefensevalue += (diceroll(25) + 10);
	console.log( "You have increase the defense of your magic units to" + " " + magicdefensevalue);
}

function increaserange() {
	rangevalue += (diceroll(25) + 10);
	console.log( "You have increase the range of your range units to" + " " + rangevalue);
}

function increaserangedefense() {
	rangedefensevalue += (diceroll(25) + 10);
	console.log( "You have increase the defense of your range units to" + " " + rangedefensevalue);
}

function increasing(training){
let type;
switch(training){
	case "melee":
		type = prompt("Would you like to train strength or defense?")
		switch(type){
			case "strength":
				increasestrength();
				break;
			case "defense":
				increasemeleedefense();
				break;
			default :
				alert("Please enter strength or defense!");
				increasing("melee");
				break;
		}
		break;
	case "magic":
		type = prompt("Would you like to train magic or defense?");
		switch(type){
			case "magic":
				increasemagic();
				break;
			case "defense":
				increasemagicdefense();
				break;
			default :
				alert("Please enter magic or defense!");
				increasing("magic");
				break;
		}
		break;
	case "range":
		type = prompt("Would you like to train range or defense?");
		switch(type){
			case "range":
				increaserange();
				break;
			case "defense":
				increaserangedefense();
				break;
			default :
				alert("Please enter range or defense!");
				increasing("range");
				break;							
		}
		break;
	default:
		break;
}		
}

alert("War is coming to your city, the neighboring city-state wants a expansion and sees your city as an easy target! You must prepare your limited troops and supplies, then face the enemy! Show them who is boss and slaughter them all!");


if ( daysroll == 1) {
	console.log("Ooh, too bad, you only have one day to prepare, hope you are lucky for the battle!");
}	else if (daysroll == 2) {
		console.log( "You got two days to prepare for battle! Good Luck!");
}	else if (daysroll == 3) {
		console.log ( "Three days to prepare against these invaders!");
}	else if (daysroll == 4) {
		console.log ("With four days to prepare, this battle will be legendary!");
}	else if (daysroll == 5) {
		console.log ( "Prepare for war in five days!");
}	else if (daysroll == 6) {
		console.log ( "Heads will roll in six days, or blasted into oblivion!");
}	else {
		console.log("Good job, you have a week to prepare for the siege, this will be an easy victory!");
}

alert("Your scout has determined the invading forces.");
alert(enemymeleeunits + " meelee units will be in the the enemy army.");
alert(enemymagicunits + " magic units will be in the the enemy army.");
alert(enemyrangeunits + " range units will be in the the enemy army.");

console.log("You currently have " + meleeunits + "melee units.")
console.log("You currently have " + magicunits + "magic units.")
console.log("You currently have " + rangeunits + "range units.")
console.log(" Your melee troops current strength is" + " " + strengthvalue);
console.log(" Your melee troops current defense is" + " " + strengthdefensevalue);
console.log(" Your magic troops current magic is" + " " + magicvalue);
console.log(" Your magic troops current defense is" + " " + magicdefensevalue);
console.log(" Your range troops current range is" + " " + rangevalue);
console.log(" Your range troops current defense is" + " " +rangedefensevalue);

function starttraining(){
	for (i = 1; i <= daysroll; i++){
		if (randomfactor <= 100 && randomfactor > 90) {
			alert("Nice, some civilians decided to join the defense of the city!" + " You gain " + randommelee + " melee units!" );
			meleeunits += randommelee;
			console.log ("Your currently have "+ meleeunits + " melee units");
			randomfactor = diceroll(100);
		}
			else if (randomfactor <= 90 && randomfactor > 80){
				alert("Sensing a battle, some passing magicians decided to help out!" + " You gain " + randommagic + " magic units!" );
				magicunits += randommagic;
				console.log ("Your currently have "+ meleeunits + " melee units");
				randomfactor = diceroll(100);
			}
			else if (randomfactor <= 80 && randomfactor > 70){
				alert("A mercenary company group coming for quest has decided to make some money by joining the defense of your city!" + " You gain " + randomrange + " range units!");
				rangeunits += randomrange;
				console.log ("Your currently have "+ meleeunits + " melee units");
				randomfactor = diceroll(100);
			}
			else if (randomfactor <= 70 && randomfactor > 60){
				alert("Not enough equipment for the army has been made , some enemy knights have left due to protest!" + " Enemy melee units has lost " + randomenemymelee + " melee units!");
				enemymeleeunits -= randomenemymelee;
				console.log ("The enemy have "+ enemymeleeunits + " melee units");
				randomfactor = diceroll(100);
			}
			else if (randomfactor <= 60 && randomfactor > 50){
				alert("An accidental explosion has cripple some enemy mages!" + "Enemy magic units has lost " + randomenemymagic + " magic units!");
				enemymagicunits -= randomenemymagic;
				console.log ("The enemy have "+ enemymagicunits + " melee units");
				randomfactor = diceroll(100);
			}
			else if (randomfactor <= 50 && randomfactor > 40){
				alert("Short supply of food has cause some of the enemy troops to desert their army!" + "Enemy range units has lost " + randomenemyrange + " range units!");
				randomrangeunits -= randomenemyrange;
				console.log ("The enemy have "+ enemyrangeunits + " range units");
				randomfactor = diceroll(100);
			}
			else if (randomfactor <= 40 && randomfactor > 30){
				alert("Dispute on the walls has cause come men to die!" + "You lost " + randommelee2 + " melee units!");
				meleeunits -= randommelee2
				console.log("Your currently have "+ meleeunits + " melee units")
				randomfactor = diceroll(100);
			}
			else if (randomfactor <= 30 && randomfactor > 20){
				alert("Some poor noobs has died practicing a spell and killed his fellow wizards!" + "You lost " + randommagic2 + " magic units!")
				console.log("Your currently have "+ magicunits + " magic units")
				magicunits -= randommagic2
				randomfactor = diceroll(100);
			}
			else if (randomfactor <= 20 && randomfactor > 10){
				alert("Several adventure has taken an arrow to the knee during practice and will have to sit out this battle!" + "You lost " + randomrange2 + " range units!")
				rangeunits -= randomrange2
				console.log("Your currently have "+ rangeunits + " range units")
				randomfactor = diceroll(100);
			}
			else if (randomfactor <= 10 && randomfactor > 0){
				alert("You slept in late.")
				randomfactor = diceroll(100);
			}
			else {
				alert("A bird flew by today.")
				randomfactor = diceroll(100);
			}						
	

		alert("Let's start training");
		alert("What will you train today?");
		preparation();
}
}

start()




