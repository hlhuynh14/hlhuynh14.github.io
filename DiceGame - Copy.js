function startGame() {

let enemyKnights = enemyArmyCalc()
let enemyMages = enemyArmyCalc()
let enemyArchers = enemyArmyCalc()
alert("War is coming to your city, the neighboring city-state wants an expansion and sees your city as an easy target! You must prepare your limited troops and supplies, then face the enemy! Show them who is boss and slaughter them all!");
alert("Your scout has determined the invading forces.");
alert(enemyKnights + " knights will be in the the enemy army.");
alert(enemyMages + " mages units will be in the the enemy army.");
alert(enemyArchers + " archers units will be in the the enemy army.");

let daysInAWeek = 7
let days = diceRoll(daysInAWeek)
if (days == 1) {
	alert("Ooh, too bad, you only have one day to prepare, hope you are lucky for the battle!");
}	else if (days == 2) {
		alert( "You got two days to prepare for battle! Good Luck!");
}	else if (days == 3) {
		alert( "Three days to prepare against these invaders!");
}	else if (days == 4) {
		alert("With four days to prepare, this battle will be legendary!");
}	else if (days == 5) {
		alert( "Prepare for war in five days!");
}	else if (days == 6) {
		alert( "Heads will roll in six days, or blasted into oblivion!");
}	else {
		alert("Good job, you have a week to prepare for the siege, this will be an easy victory!");
}

let enemyBoostPerDay = 5;
let magicValue= 400;
let strengthValue = 300;
let rangeValue = 350;
let strengthDefenseValue = 100;
let magicDefenseValue = 70;
let rangeDefenseValue =100;
let yourKnights = armyCalc()
let yourMages = armyCalc()
let yourArchers = armyCalc()
let randomSides = [10, 20, 30, 50, 80, 100, 150, 200, 250, 300]
let randomFactor = diceRoll(randomSides[5]);
let randomMelee = diceroll(randomSides[9]);
let randomMagic = diceroll(randomSides[7]);
let randomRange = diceroll(randomSides[8]);
let randomEnemyMelee = diceroll(randomSides[6]);
let randomEnemymMagic = diceroll(randomSides[4]);
let randomEnemyRange = diceroll(randomSides[5]);
let randomMelee2 = diceroll(randomSides[2]);
let randomMagic2 = diceroll(randomSides[0]);
let randomRange2 = diceroll(randomSides[1]);

console.log("You currently have " + yourKnights + " knights.");
console.log("You currently have " + yourMages + " mages.");
console.log("You currently have " + yourArchers + " archers.");
console.log(" Your knights current strength is " + strengthValue + ".");
console.log(" Your knights current defense is " + strengthDefenseValue + ".");
console.log(" Your mages current magic is " +  magicValue + ".");
console.log(" Your mages current defense is " + magicDefenseValue + ".");
console.log(" Your archers current range is " + rangeValue + ".");
console.log(" Your archers current defense is " + rangeDefenseValue + ".");
console.log(enemyKnights + " knights will be in the the enemy army.")
console.log(enemyMages + " mages will be in the the enemy army.")
console.log(enemyArchers + " archers will be in the the enemy army.")

let start = prompt("Do you wanna start training? Please Enter yes or no.")
if (start == "yes") {
		for (i = 1; i <= days; i++){
		if (randomfactor <= 100 && randomfactor > 90) {
			alert("Nice, some civilians decided to join the defense of the city!" + " You gain " + randommelee + " knights!" );
			meleeunits += randommelee;
			console.log(" You gained " + randommelee + "knights.")
			console.log ("You currently have " + meleeunits + " knights.");
			randomfactor = diceroll(randomSides[5]);
		}
			else if (randomfactor <= 90 && randomfactor > 80){
				alert("Sensing a battle, some passing magicians decided to help out!" + " You gain " + randommagic + " mages!" );
				magicunits += randommagic;
				console.log(" You gained " + randommagic + "mages.")
				console.log ("You currently have " + magicunits + " mages.");
				randomfactor = diceroll(randomSides[5]);
			}
			else if (randomfactor <= 80 && randomfactor > 70){
				alert("A mercenary group coming for quests have decided to make some money by joining the defense of your city!" + " You gain " + randomrange + " archers!");
				rangeunits += randomrange;
				console.log(" You gained " + randomrange + "archers.")
				console.log ("You currently have " + rangeunits + " archers.");
				randomfactor = diceroll(randomSides[5]);
			}
			else if (randomfactor <= 70 && randomfactor > 60){
				alert("Not enough equipment for the enemy army has been made , some enemy knights have left due to protest!" + " Enemy army has lost " + randomenemymelee + " knights!");
				enemymeleeunits -= randomenemymelee;
				console.log(" The enemy lost " + randomenemymelee + "knights.")
				console.log ("The enemy have " + enemymeleeunits + " knights.");
				randomfactor = diceroll(randomSides[5]);
			}
			else if (randomfactor <= 60 && randomfactor > 50){
				alert("An accidental explosion has cripple some enemy mages!" + "Enemy army has lost " + randomenemymagic + " mages!");
				enemymagicunits -= randomenemymagic;
				console.log(" The enemy lost " + randomenemymagic + "mages.")
				console.log ("The enemy have " + enemymagicunits + " mages.");
				randomfactor = diceroll(randomSides[5]);
			}
			else if (randomfactor <= 50 && randomfactor > 40){
				alert("Short supply of food has cause some of the enemy troops to desert their army!" + "Enemy army has lost " + randomenemyrange + " archers!");
				enemyrangeunits -= randomenemyrange;
				console.log(" The enemy lost " + randomenemyrange + "archers.")
				console.log ("The enemy have " + enemyrangeunits + " archers.");
				randomfactor = diceroll(randomSides[5]);
			}
			else if (randomfactor <= 40 && randomfactor > 30){
				alert("Dispute on the walls has cause some men to die!" + "You lost " + randommelee2 + " knights!");
				meleeunits -= randommelee2
				console.log("You lost " + randommelee2 + " knights.")
				console.log("You currently have " + meleeunits + " knights.")
				randomfactor = diceroll(randomSides[5]);
			}
			else if (randomfactor <= 30 && randomfactor > 20){
				alert("Some poor noobs has died practicing a spell and killed his fellow wizards!" + "You lost " + randommagic2 + " mages!")
				magicunits -= randommagic2
				console.log("You lost " + randommagic2 + " mages.")
				console.log("You currently have " + magicunits + " mage.")
				randomfactor = diceroll(randomSides[5]);
			}
			else if (randomfactor <= 20 && randomfactor > 10){
				alert("Several archers has taken an arrow to the knee during practice and will have to sit out this battle!" + "You lost " + randomrange2 + " archers!")
				rangeunits -= randomrange2
				console.log("You lost " + randomrange2 + " archers.")
				console.log("You currently have " + rangeunits + " archers.")
				randomfactor = diceroll(randomSides[5]);
			}
			else if (randomfactor <= 10 && randomfactor > 0){
				alert(" A new day, would of been a good day if you haven't slept in late.")
				randomfactor = diceroll(randomSides[5]);
			}
			else {
				alert("A bird flew by today.")
				randomfactor = diceroll(randomSides[5]);
			}						
	

		alert("Let's start training!");
		alert("What will you train today?");
		let prepare = prompt("Choose either to train your knights, mages, archers, or stop.")
		if (prepare == "knights" || prepare =="mages" || prepare =="archers"){ 
			let randomSides = [10, 20, 30, 50, 80, 100, 150, 200, 250, 300]
			let type;
			switch(who){
				case "knights":
					type = prompt("Would you like to train strength or defense?")
					switch(type){
						case "strength":
							increaseStrength();
							break;
						case "defense":
							increaseMeleeDefense();
							break;
						default :
							alert("Please enter strength or defense!");
							training("knights");
							break;
					}
					break;
				case "mages":
					type = prompt("Would you like to train magic or defense?");
					switch(type){
						case "magic":
							increaseMagic();
							break;
						case "defense":
							increaseMagicDefense();
							break;
						default :
							alert("Please enter magic or defense!");
							training("mages");
							break;
					}
					break;
				case "archers":
					type = prompt("Would you like to train archery or defense?");
					switch(type){
						case "archery":
							increaseRange();
							break;
						case "defense":
							increaseRangeDefense();
							break;
						default :
							alert("Please enter archery or defense!");
							training("archers");
							break;							
					}
					break;
				default:
					break;
			}		
		
}
		else if (prepare == "stop"){
		
}
		else {
		alert("Please enter knights, mages, archers, or stop!");
		preparing();
}
}	
}
	
} else if(start == "no") {

} else {
	alert("Please enter yes or no.")
	asking()
}










function diceRoll(sides) {
	sides = parseInt(sides);
	let zeronegation = 1
	 return Math.floor(Math.random() * (sides) + zeronegation);
}

function enemyArmyCalc(){
let extraTroops = 500;
let armyRoll = 1000;
let units = diceRoll(armyRoll) + extraTroops;
return units
}

function armyCalc(){
let extraTroops = 500;
let armyRoll = 500;
let units = diceRoll(armyRoll) + extraTroops;
return units
}



function increaseStrength() {
	console.log("Current strength is " + startgame(stats[5]) + ".")
	startgame(stats[5]) += (diceRoll(startGame(randomSides[5])) + valueBuffer());
	return startgame(stats[5])
	console.log( "You have increase the strength of your Knights to" + " " + strengthvalue);
}

function increaseMeleeDefense() {
	console.log("Current defense is " + startgame(stats[7]) + ".")
	startgame(stats[7]) += (diceRoll(startGame(randomSides[5])) + valueBuffer());
	return startgame(stats[7])
	console.log( "You have increase the defense of your Knights to" + " " + strengthdefensevalue);
}

function increaseMagic(magicValue) {
	console.log("Current magic is " + magicvalue + ".")
	magicvalue += (diceRoll(6) + valueBuffer());
	return 
	console.log( "You have increase the magic of your Mages to" + " " + magicvalue);
}

function increaseMagicDefense() {
	console.log("Current  magic defense is " + magicdefensevalue + ".")
	magicdefensevalue += (diceRoll(startGame(randomSides[3])) + valueBuffer());
	return startGame()
	console.log( "You have increase the defense of your Mages to" + " " + magicdefensevalue);
}

function increaseRange() {
	console.log("Current range is " + rangevalue + ".")
	startgame(stats[6]) += (diceRoll(startGame(randomSides[3])) + valueBuffer());
	return startgame(stats[6])
	console.log( "You have increase the range of your Archers to" + " " + rangevalue);
}

function increaseRangeDefense() {
	console.log("Current range defense is " + startGame(randomSides[5] + ".")
	rangedefensevalue += (diceroll(startGame(randomSides[3])) + valueBuffer());
	return
	console.log( "You have increase the defense of your Archers to" + " " + rangedefensevalue);
}

startGame()













// let enemyMagic = magicValue + (enemyBoostPerDay * daysRoll);
// let enemyStrength = strengthValue + (enemyBoostPerDay * daysRoll);
// let enemyrange = rangevalue + (enemyboostperday * daysroll);
// let enemyStrengthDefense = strengthDefenseValue + (enemyBoostPerDay * daysRoll);
// let enemyMagicDefense = magicDefenseValue + (enemyBoostPerDay * daysRoll);
// let enemyRangeDefense = rangeDefenseValue + (enemyBoostPerDay * daysRoll);
// let enemyMeleeUnits = diceRoll(enemyArmyRoll) + extraTroops;
// let enemyMagicUnits = diceRoll(enemyArmyRoll) + extraTroops;
// let enemyRangeunits = diceRoll(enemyarmyroll) + extraTroops;
// let enemyStats = [enemyMagic, enemyStrength, enemyRange, enemyStrengthDefense, enemyMagicDefense, enemyRangeDefense, enemyMeleeUnits, enemyMagicUnits, enemyRangeUnits]



// let armyValue = meleeUnits + magicUnits + rangeUnits;
// let enemyArmyValue = enemyMeleeUnits + enemyMagicUnits + enemyRangeUnits;







// function choseKnights() {
// 	let enemyKnights = diceroll(3)
// 	let normalMult = 2
// 	let extraMult = 3
// 	if (enemyknights == 1) {
// 		armyvalue -= ((enemystrength * 2) - strengthdefensevalue)
// 		enemyarmyvalue -= ((strengthvalue * 2) - enemystrengthdefense)
// 		console.log("Your opponent chose knights, both sides are even, you suffered a "+ ((enemystrength * 2) - strengthdefensevalue) + " lost of troops.")
// 		console.log("Your opponent lost " + ((strengthvalue * 2) - enemystrengthdefense) + " troops.")
// 		console.log("You have " + armyvalue + " troops.")
// 		console.log("The enemy have " + enemyarmyvalue + " troops.")
// 	}	else if (enemyknights == 2) {
// 		armyvalue -= ((enemymagic * 3) - strengthdefensevalue)
// 		enemyarmyvalue -= ((strengthvalue * 2) - (enemymagicdefense * 2))
// 		console.log("Your opponent chose mages, their mages roasted your knights, you suffered a "+ ((enemymagic * 3) - strengthdefensevalue) + " lost of troops.")
// 		console.log("Your opponent lost " + ((strengthvalue * 2) - (enemymagicdefense * 2)) + " troops.")
// 		console.log("You have " + armyvalue + " troops.")
// 		console.log("The enemy have " + enemyarmyvalue + " troops.")
// 	}	else  {
// 		armyvalue -= ((enemyrange * 2) - strengthdefensevalue)
// 		enemyarmyvalue -= ((strengthvalue * 3) - enemyrangedefense)
// 		console.log("Your opponent chose archers, your knights cut through them like butter, you suffered a "+ ((enemyrange * 2) - strengthdefensevalue) + " lost of troops.")
// 		console.log("Your opponent lost " + ((strengthvalue * 3) - enemyrangedefense) + " troops.")
// 		console.log("You have " + armyvalue + " troops.")
// 		console.log("The enemy have " + enemyarmyvalue + " troops.")
// 	}
// }

// function chosemMages() {
// 	let enemymages = diceroll(3)
// 	if (enemymages == 1) {
// 		armyvalue -= ((enemystrength * 2)  - (magicdefensevalue * 2))
// 		enemyarmyvalue -= ((magicvalue * 3) - enemystrengthdefense)
// 		console.log("Your opponent chose knights, your mages burnt them to the ground, you suffered a "+ ((enemystrength * 2)  - (magicdefensevalue * 2)) + " lost of troops.")
// 		console.log("Your opponent lost " + (((magicvalue * 3) - enemystrengthdefense)) + " troops.")
// 		console.log("You have " + armyvalue + " troops.")
// 		console.log("The enemy have " + enemyarmyvalue + " troops.")
// 	}	else if (enemymages == 2) {
// 		armyvalue -= ((enemystrength * 2) - (magicdefensevalue * 2))
// 		enemyarmyvalue -= ((strengthvalue * 2) - (enemymagicdefense * 2))
// 		console.log("Your opponent chose mages, you are both even, you suffered a "+ ((enemystrength * 2) - (magicdefensevalue * 2)) + " lost of troops.")
// 		console.log("Your opponent lost " + ((strengthvalue * 2) - (enemymagicdefense * 2)) + " troops.")
// 		console.log("You have " + armyvalue + " troops.")
// 		console.log("The enemy have " + enemyarmyvalue + " troops.")
// 	}	else  {
// 		armyvalue -= ((enemyrange * 3) - magicdefensevalue)
// 		enemyarmyvalue -= ((magicvalue * 2) - (enemyrangedefense * 2))
// 		console.log("Your opponent chose archers, your opponents shot your mages down before they can fire their spells, you suffered a "+ ((enemyrange * 3) - magicdefensevalue) + " lost of troops.")
// 		console.log("Your opponent lost " + ((magicvalue * 2) - (enemyrangedefense * 2)) + " troops.")
// 		console.log("You have " + armyvalue + " troops.")
// 		console.log("The enemy have " + enemyarmyvalue + " troops.")
// 	}
// }	

// function choseArchers() {
// 	let enemyarchers = diceroll(3)
// 	if (enemyarchers == 1) {
// 		armyvalue -= ((enemystrength * 3)  - rangedefensevalue )
// 		enemyarmyvalue -= ((rangevalue * 2) - (enemystrengthdefense * 2))
// 		console.log("Your opponent chose knights, your archers are masscared, you suffered a "+ (((enemystrength * 3)  - rangedefensevalue )) + " lost of troops.")
// 		console.log("Your opponent lost " + ((rangevalue * 2) - (enemystrengthdefense * 2)) + " troops.")
// 		console.log("You have " + armyvalue + " troops.")
// 		console.log("The enemy have " + enemyarmyvalue + " troops.")
// 	}	else if (enemyarchers == 2) {
// 		armyvalue -= ((enemymagic * 2) - (rangedefensevalue * 2))
// 		enemyarmyvalue -= ((rangevalue * 3) - enemymagicdefense)
// 			console.log("Your opponent chose mages, they are helpless before your rains of arrows, you suffered a "+ ((enemymagic * 2) - (rangedefensevalue * 2)) + " lost of troops.")
// 		console.log("Your opponent lost " + ((rangevalue * 3) - enemymagicdefense) + " troops.")
// 		console.log("You have " + armyvalue + " troops.")
// 		console.log("The enemy have " + enemyarmyvalue + " troops.")
// 	}	else  {
// 		armyvalue -= ((enemyrange * 2) - rangedefensevalue)
// 		enemyarmyvalue -= ((rangevalue * 2) - enemyrangedefense)
// 		console.log("Your opponent chose archers, your opponents shot your mages down before they can fire their spells, you suffered a "+ ((enemyrange * 3) - magicdefensevalue) + " lost of troops.")
// 		console.log("Your opponent lost " + ((magicvalue * 2) - (enemyrangedefense * 2)) + " troops.")
// 		console.log("You have " + armyvalue + " troops.")
// 		console.log("The enemy have " + enemyarmyvalue + " troops.")
// 	}
// }	

// function turn() {
// let whichunit = prompt("Choose either knights, mages, archers, or stop.")
// if (whichunit == "knights"){ 
// knights();
// }	else if ( whichunit =="mages") {
// 	mages();
// }	else if (whichunit =="archers") {
// 	archers();
// }	else if (whichunit == "stop"){
// 	return stopbool = false
		
// }	else {
// 	alert("Please enter knights, mages, archers, or stop!");
// 	turn();
// }
// }







// function battle(){
// alert("The battle begins!")
// console.log("You have " + armyvalue + " troops.")
// console.log("The enemy have " + enemyarmyvalue + " troops.")
// alert("To win this battle, you must deplete the enemy troops to 0 or below, but beware, you will lose if your army value is 0 or below.")
// alert("Each turn, you will choose a unit type to send forward, if the other side unit is inferior than yours, you will get a damage multiplier, if your unit is inferior, their units will get a damage multiplier.")
// alert( "knights > archers, archers > mages, mages > knights.")
// let stopbool = true
// while (armyvalue > 0 && enemyarmyvalue > 0 && stopbool) {
// 	turn()

// }

// if (armyvalue <= 0 && enemyarmyvalue <= 0 ) {
// 	alert("Both armies mutually destroyed eachother, but at least you did not lose your city!")
// }	else if ( armyvalue <= 0) {
// 	alert ("You lost, your city will be pillaged and it's denizen will be forced to serve another city. Better luck next time!")
// }	else if (enemyarmyvalue <= 0) {
// 		alert("Good job! You vanquish the enemy, take no prisoner, let them know not to mess with you.")
// }	else {

// }
// }

// startgame();




