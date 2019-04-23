let magicvalue= 400;
let strengthvalue = 300;
let rangevalue = 350;
let strengthdefensevalue = 100;
let magicdefensevalue = 70;
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

let enemymagic = 400 + (5 * daysroll);
let enemystrength = 300 + (5 * daysroll);
let enemyrange = 350 + (5 * daysroll);
let enemystrengthdefense = 100 + (5 * daysroll);
let enemymagicdefense = 70 + (5 * daysroll);
let enemyrangedefense = 100 + (5 * daysroll);
let enemymeleeunits = diceroll(1000) + 500;
let enemymagicunits = diceroll(1000) + 500;
let enemyrangeunits = diceroll(1000) + 500;
let meleeunits = diceroll(500) + 500;
let magicunits = diceroll(500) + 500;
let rangeunits = diceroll(500) + 500;

let armyvalue = meleeunits + magicunits + rangeunits
let enemyarmyvalue = enemymeleeunits + enemymagicunits + enemyrangeunits


function start() {
let start = prompt("Do you wanna start training? Please Enter yes or no.")
if (start == "yes") {
	starttraining()
} else if(start == "no") {

} else {
	alert("Please enter yes or no.")
	start()
}
}


function diceroll(sides) {
	sides = parseInt(sides);
	 return Math.floor(Math.random() * (sides) + 1);
}
function preparation() {
let training = prompt("Choose either to train your knights, mages, archers, or stop.")
if (training == "knights" || training =="mages" || training =="archers"){ 
increasing(training);
}
	else if (training == "stop"){
		
	}
	else {
	alert("Please enter knights, mages, archers, or stop!");
	preparation();
}
}

function knights() {
	let enemyknights = diceroll(3)
	if (enemyknights == 1) {
		armyvalue -= ((enemystrength * 2) - strengthdefensevalue)
		enemyarmyvalue -= ((strengthvalue * 2) - enemystrengthdefense)
		console.log("Your opponent chose knights, both sides are even, you suffered a "+ ((enemystrength * 2) - strengthdefensevalue) + " lost of troops.")
		console.log("Your opponent lost " + ((strengthvalue * 2) - enemystrengthdefense) + " troops.")
		console.log("You have " + armyvalue + " troops.")
		console.log("The enemy have " + enemyarmyvalue + " troops.")
	}	else if (enemyknights == 2) {
		armyvalue -= ((enemymagic * 3) - strengthdefensevalue)
		enemyarmyvalue -= ((strengthvalue * 2) - (enemymagicdefense * 2))
		console.log("Your opponent chose mages, their mages roasted your knights, you suffered a "+ ((enemymagic * 3) - strengthdefensevalue) + " lost of troops.")
		console.log("Your opponent lost " + ((strengthvalue * 2) - (enemymagicdefense * 2)) + " troops.")
		console.log("You have " + armyvalue + " troops.")
		console.log("The enemy have " + enemyarmyvalue + " troops.")
	}	else  {
		armyvalue -= ((enemyrange * 2) - strengthdefensevalue)
		enemyarmyvalue -= ((strengthvalue * 3) - enemyrangedefense)
		console.log("Your opponent chose archers, your knights cut through them like butter, you suffered a "+ ((enemyrange * 2) - strengthdefensevalue) + " lost of troops.")
		console.log("Your opponent lost " + ((strengthvalue * 3) - enemyrangedefense) + " troops.")
		console.log("You have " + armyvalue + " troops.")
		console.log("The enemy have " + enemyarmyvalue + " troops.")
	}
}


function mages() {
	let enemymages = diceroll(3)
	if (enemymages == 1) {
		armyvalue -= ((enemystrength * 2)  - (magicdefensevalue * 2))
		enemyarmyvalue -= ((magicvalue * 3) - enemystrengthdefense)
		console.log("Your opponent chose knights, your mages burnt them to the ground, you suffered a "+ ((enemystrength * 2)  - (magicdefensevalue * 2)) + " lost of troops.")
		console.log("Your opponent lost " + (((magicvalue * 3) - enemystrengthdefense)) + " troops.")
		console.log("You have " + armyvalue + " troops.")
		console.log("The enemy have " + enemyarmyvalue + " troops.")
	}	else if (enemymages == 2) {
		armyvalue -= ((enemystrength * 2) - (magicdefensevalue * 2))
		enemyarmyvalue -= ((strengthvalue * 2) - (enemymagicdefense * 2))
		console.log("Your opponent chose mages, you are both even, you suffered a "+ ((enemystrength * 2) - (magicdefensevalue * 2)) + " lost of troops.")
		console.log("Your opponent lost " + ((strengthvalue * 2) - (enemymagicdefense * 2)) + " troops.")
		console.log("You have " + armyvalue + " troops.")
		console.log("The enemy have " + enemyarmyvalue + " troops.")
	}	else  {
		armyvalue -= ((enemyrange * 3) - magicdefensevalue)
		enemyarmyvalue -= ((magicvalue * 2) - (enemyrangedefense * 2))
		console.log("Your opponent chose archers, your opponents shot your mages down before they can fire their spells, you suffered a "+ ((enemyrange * 3) - magicdefensevalue) + " lost of troops.")
		console.log("Your opponent lost " + ((magicvalue * 2) - (enemyrangedefense * 2)) + " troops.")
		console.log("You have " + armyvalue + " troops.")
		console.log("The enemy have " + enemyarmyvalue + " troops.")
	}
}	

function archers() {
	let enemyarchers = diceroll(3)
	if (enemyarchers == 1) {
		armyvalue -= ((enemystrength * 3)  - rangedefensevalue )
		enemyarmyvalue -= ((rangevalue * 2) - (enemystrengthdefense * 2))
		console.log("Your opponent chose knights, your archers are masscared, you suffered a "+ (((enemystrength * 3)  - rangedefensevalue )) + " lost of troops.")
		console.log("Your opponent lost " + ((rangevalue * 2) - (enemystrengthdefense * 2)) + " troops.")
		console.log("You have " + armyvalue + " troops.")
		console.log("The enemy have " + enemyarmyvalue + " troops.")
	}	else if (enemyarchers == 2) {
		armyvalue -= ((enemymagic * 2) - (rangedefensevalue * 2))
		enemyarmyvalue -= ((rangevalue * 3) - enemymagicdefense)
			console.log("Your opponent chose mages, they are helpless before your rains of arrows, you suffered a "+ ((enemymagic * 2) - (rangedefensevalue * 2)) + " lost of troops.")
		console.log("Your opponent lost " + ((rangevalue * 3) - enemymagicdefense) + " troops.")
		console.log("You have " + armyvalue + " troops.")
		console.log("The enemy have " + enemyarmyvalue + " troops.")
	}	else  {
		armyvalue -= ((enemyrange * 2) - rangedefensevalue)
		enemyarmyvalue -= ((rangevalue * 2) - enemyrangedefense)
		console.log("Your opponent chose archers, your opponents shot your mages down before they can fire their spells, you suffered a "+ ((enemyrange * 3) - magicdefensevalue) + " lost of troops.")
		console.log("Your opponent lost " + ((magicvalue * 2) - (enemyrangedefense * 2)) + " troops.")
		console.log("You have " + armyvalue + " troops.")
		console.log("The enemy have " + enemyarmyvalue + " troops.")
	}
}	


function turn() {
let whichunit = prompt("Choose either knights, mages, archers, or stop.")
if (whichunit == "knights"){ 
knights();
}	else if ( whichunit =="mages") {
	mages();
}	else if (whichunit =="archers") {
	archers();
}	else if (whichunit == "stop"){
	return stop;	
}	else {
	alert("Please enter knights, mages, archers, or stop!");
	turn();
}
}


function increasestrength() {
	strengthvalue += (diceroll(100) + 10);
	console.log( "You have increase the strength of your Knights to" + " " + strengthvalue);
}

function increasemeleedefense() {
	strengthdefensevalue += (diceroll(100) + 10);
	console.log( "You have increase the defense of your Knights to" + " " + strengthdefensevalue);
}

function increasemagic() {
	magicvalue += (diceroll(100) + 10);
	console.log( "You have increase the magic of your Mages to" + " " + magicvalue);
}

function increasemagicdefense() {
	magicdefensevalue += (diceroll(50) + 10);
	console.log( "You have increase the defense of your Mages to" + " " + magicdefensevalue);
}

function increaserange() {
	rangevalue += (diceroll(50) + 10);
	console.log( "You have increase the range of your Archers to" + " " + rangevalue);
}

function increaserangedefense() {
	rangedefensevalue += (diceroll(50) + 10);
	console.log( "You have increase the defense of your Archers to" + " " + rangedefensevalue);
}

function increasing(training){
let type;
switch(training){
	case "knights":
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
				increasing("knights");
				break;
		}
		break;
	case "mages":
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
				increasing("mages");
				break;
		}
		break;
	case "archers":
		type = prompt("Would you like to train archery or defense?");
		switch(type){
			case "archery":
				increaserange();
				break;
			case "defense":
				increaserangedefense();
				break;
			default :
				alert("Please enter archery or defense!");
				increasing("archers");
				break;							
		}
		break;
	default:
		break;
}		
}

alert("War is coming to your city, the neighboring city-state wants an expansion and sees your city as an easy target! You must prepare your limited troops and supplies, then face the enemy! Show them who is boss and slaughter them all!");

alert("Your scout has determined the invading forces.");
alert(enemymeleeunits + " knights will be in the the enemy army.");
alert(enemymagicunits + " mages units will be in the the enemy army.");
alert(enemyrangeunits + " archers units will be in the the enemy army.");

if ( daysroll == 1) {
	alert("Ooh, too bad, you only have one day to prepare, hope you are lucky for the battle!");
}	else if (daysroll == 2) {
		alert( "You got two days to prepare for battle! Good Luck!");
}	else if (daysroll == 3) {
		alert( "Three days to prepare against these invaders!");
}	else if (daysroll == 4) {
		alert("With four days to prepare, this battle will be legendary!");
}	else if (daysroll == 5) {
		alert( "Prepare for war in five days!");
}	else if (daysroll == 6) {
		alert( "Heads will roll in six days, or blasted into oblivion!");
}	else {
		alert("Good job, you have a week to prepare for the siege, this will be an easy victory!");
}



console.log("You currently have " + meleeunits + " knights.");
console.log("You currently have " + magicunits + " mages.");
console.log("You currently have " + rangeunits + " archers.");
console.log(" Your knights current strength is" + " " + strengthvalue);
console.log(" Your knights current defense is" + " " + strengthdefensevalue);
console.log(" Your mages current magic is" + " " + magicvalue);
console.log(" Your mages current defense is" + " " + magicdefensevalue);
console.log(" Your archers current range is" + " " + rangevalue);
console.log(" Your archers current defense is" + " " +rangedefensevalue);

function starttraining(){
	for (i = 1; i <= daysroll; i++){
		if (randomfactor <= 100 && randomfactor > 90) {
			alert("Nice, some civilians decided to join the defense of the city!" + " You gain " + randommelee + " knights!" );
			meleeunits += randommelee;
			console.log ("Your currently have "+ meleeunits + " knights");
			randomfactor = diceroll(100);
		}
			else if (randomfactor <= 90 && randomfactor > 80){
				alert("Sensing a battle, some passing magicians decided to help out!" + " You gain " + randommagic + " mages!" );
				magicunits += randommagic;
				console.log ("Your currently have "+ magicunits + " mages");
				randomfactor = diceroll(100);
			}
			else if (randomfactor <= 80 && randomfactor > 70){
				alert("A mercenary group coming for quests have decided to make some money by joining the defense of your city!" + " You gain " + randomrange + " archers!");
				rangeunits += randomrange;
				console.log ("Your currently have "+ rangeunits + " archers");
				randomfactor = diceroll(100);
			}
			else if (randomfactor <= 70 && randomfactor > 60){
				alert("Not enough equipment for the enemy army has been made , some enemy knights have left due to protest!" + " Enemy army has lost " + randomenemymelee + " knights!");
				enemymeleeunits -= randomenemymelee;
				console.log ("The enemy have "+ enemymeleeunits + " knights");
				randomfactor = diceroll(100);
			}
			else if (randomfactor <= 60 && randomfactor > 50){
				alert("An accidental explosion has cripple some enemy mages!" + "Enemy army has lost " + randomenemymagic + " mages!");
				enemymagicunits -= randomenemymagic;
				console.log ("The enemy have "+ enemymagicunits + " mages");
				randomfactor = diceroll(100);
			}
			else if (randomfactor <= 50 && randomfactor > 40){
				alert("Short supply of food has cause some of the enemy troops to desert their army!" + "Enemy army has lost " + randomenemyrange + " archers!");
				enemyrangeunits -= randomenemyrange;
				console.log ("The enemy have "+ enemyrangeunits + " range units");
				randomfactor = diceroll(100);
			}
			else if (randomfactor <= 40 && randomfactor > 30){
				alert("Dispute on the walls has cause some men to die!" + "You lost " + randommelee2 + " knights!");
				meleeunits -= randommelee2
				console.log("Your currently have "+ meleeunits + " knights")
				randomfactor = diceroll(100);
			}
			else if (randomfactor <= 30 && randomfactor > 20){
				alert("Some poor noobs has died practicing a spell and killed his fellow wizards!" + "You lost " + randommagic2 + " mages!")
				console.log("Your currently have "+ magicunits + " mages")
				magicunits -= randommagic2
				randomfactor = diceroll(100);
			}
			else if (randomfactor <= 20 && randomfactor > 10){
				alert("Several archers has taken an arrow to the knee during practice and will have to sit out this battle!" + "You lost " + randomrange2 + " archers!")
				rangeunits -= randomrange2
				console.log("Your currently have "+ rangeunits + " archers")
				randomfactor = diceroll(100);
			}
			else if (randomfactor <= 10 && randomfactor > 0){
				alert(" A new day, would of been a good day if you haven't slept in late.")
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

start();

console.log("You currently have " + meleeunits + " knights.");
console.log("You currently have " + magicunits + " mages.");
console.log("You currently have " + rangeunits + " archers.");
console.log(" Your knights current strength is" + " " + strengthvalue);
console.log(" Your knights current defense is" + " " + strengthdefensevalue);
console.log(" Your mages current magic is" + " " + magicvalue);
console.log(" Your mages current defense is" + " " + magicdefensevalue);
console.log(" Your archers current range is" + " " + rangevalue);
console.log(" Your archers current defense is" + " " +rangedefensevalue);
console.log(enemymeleeunits + " knights will be in the the enemy army.")
console.log(enemymagicunits + " mages will be in the the enemy army.")
console.log(enemyrangeunits + " archers will be in the the enemy army.")

alert("The battle begins!")

console.log("You have " + armyvalue + " troops.")
console.log("The enemy have " + enemyarmyvalue + " troops.")

alert("To win this battle, you must deplete the enemy troops to 0 or below, but beware, you will lose if your army value is 0 or below.")
alert("Each turn, you will choose a unit type to send forward, if the other side unit is inferior than yours, you will get a damage multiplier, if your unit is inferior, their units will get a damage multiplier.")
alert( "knights > archers, archers > mages, mages > knights.")

while (armyvalue >= 0 && enemyarmyvalue >= 0) {
	turn()

}

if (armyvalue <= 0 && enemyarmyvalue <= 0) {
	alert("Both armies mutually destroyed eachother, but at least you did not lose your city!")
}	else if ( armyvalue <= 0) {
	alert ("You lost, your city will be pillaged and it's denizen will be forced to serve another city. Better luck next time!")
}	else if (enemyarmyvalue <= 0) {
		alert("Good job! You vanquish the enemy, take no prisoner, let them know not to mess with you.")
}	else {

}


