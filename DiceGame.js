let magicValue= 400;
let strengthValue = 300;
let rangeValue = 350;
let strengthDefenseValue = 100;
let magicDefenseValue = 70;
let rangeDefenseValue =100;
let daysOfAWeek = 7;
let daysRoll = diceRoll(daysOfAWeek);
let meleeUnits = armyRoll();
let magicUnits = armyRoll();
let rangeUnits = armyRoll();
let enemyMeleeUnits = enemyArmyRoll();
let enemyMagicUnits = enemyArmyRoll();
let enemyRangeUnits = enemyArmyRoll();
let armyValue = totalArmy();
let enemyArmyValue = totalEnemyArmy();

function gameStart(){
gameBackGround();
status();
startprompt();
}

function diceRoll(sides) {
	sides = parseInt(sides);
	zeroNegation = 1;
	 return Math.floor(Math.random() * (sides) + zeroNegation);
}

function gameBackGround () {
alert("War is coming to your city, the neighboring city-state wants an expansion and sees your city as an easy target! You must prepare your limited troops and supplies, then face the enemy! Show them who is boss and slaughter them all!");
alert("Your scout has determined the invading forces.");
alert(enemyMeleeUnits + " knights will be in the the enemy army.");
alert(enemyMagicUnits + " mages units will be in the the enemy army.");
alert(enemyRangeUnits + " archers units will be in the the enemy army.");

if ( daysRoll == 1) {
	alert("Ooh, too bad, you only have one day to prepare, hope you are lucky for the battle!");
}	else if (daysRoll == 2) {
		alert( "You got two days to prepare for battle! Good Luck!");
}	else if (daysRoll == 3) {
		alert( "Three days to prepare against these invaders!");
}	else if (daysRoll == 4) {
		alert("With four days to prepare, this battle will be legendary!");
}	else if (daysRoll == 5) {
		alert( "Prepare for war in five days!");
}	else if (daysRoll == 6) {
		alert( "Heads will roll in six days, or blasted into oblivion!");
}	else {
		alert("Good job, you have a week to prepare for the siege, this will be an easy victory!");
}
}

function armyRoll() {
let extraTroops = 500;
let armyRoll = 500;
troops = diceRoll(armyRoll) + extraTroops;
return troops;
}

function enemyArmyRoll() {
let extraTroops = 500;
let enemyArmyRoll = 1000;
troops = diceRoll(enemyArmyRoll) + extraTroops;
return troops;
}

function totalArmy(){
totalTroops = meleeUnits + magicUnits + rangeUnits;
return totalTroops;
}

function totalEnemyArmy(){
totalEnemyTroops = enemyMeleeUnits + enemyMagicUnits + enemyRangeUnits;
return totalEnemyTroops;
}

function status(){
console.log("You currently have " + meleeUnits + " knights.");
console.log("You currently have " + magicUnits + " mages.");
console.log("You currently have " + rangeUnits + " archers.");
console.log("Your knights current strength is" + " " + strengthValue);
console.log("Your knights current defense is" + " " + strengthDefenseValue);
console.log("Your mages current magic is" + " " + magicValue);
console.log("Your mages current defense is" + " " + magicDefenseValue);
console.log("Your archers current range is" + " " + rangeValue);
console.log("Your archers current defense is" + " " +rangeDefenseValue);
console.log(enemyMeleeUnits + " knights will be in the the enemy army.");
console.log(enemyMagicUnits + " mages will be in the the enemy army.");
console.log(enemyRangeUnits + " archers will be in the the enemy army.");
}

function startprompt() {
let start = prompt("Do you wanna start training? Please Enter yes or no.");
if (start == "yes") {
	startTraining()
} else if(start == "no") {
	skipToBattle();
} else {
	alert("Please enter yes or no.");
	startprompt();
}
}

function startTraining(){
let diceSide = [10, 20, 30, 80, 100, 150, 200, 250, 300];
let randomFactor = diceRoll(diceSide[4]);
let randomMelee = diceRoll(diceSide[8]);
let randomMagic = diceRoll(diceSide[6]);
let randomRange = diceRoll(diceSide[7]);
let randomEnemyMelee = diceRoll(diceSide[5]);
let randomEnemyMagic = diceRoll(diceSide[3]);
let randomEnemyRange = diceRoll(diceSide[4]);
let randomMelee2 = diceRoll(diceSide[2]);
let randomMagic2 = diceRoll(diceSide[0]);
let randomRange2 = diceRoll(diceSide[1]);
	for (i = 1; i <= daysRoll; i++){
		if (randomFactor <= 100 && randomFactor > 90) {
			alert("Nice, some civilians decided to join the defense of the city!" + " You gain " + randomMelee + " knights!" );
			meleeUnits += randomMelee;
			console.log("You gained " + randomMelee + " knights.");
			console.log ("You currently have " + meleeUnits + " knights.");
			randomFactor = diceRoll(diceSide[4]);
			}
			else if (randomFactor <= 90 && randomFactor > 80){
				alert("Sensing a battle, some passing magicians decided to help out!" + " You gain " + randomMagic + " mages!" );
				magicUnits += randomMagic;
				console.log("You gained " + randomMagic + " mages.");
				console.log ("You currently have " + magicUnits + " mages.");
				randomFactor = diceRoll(diceSide[4]);
			}
			else if (randomFactor <= 80 && randomFactor > 70){
				alert("A mercenary group coming for quests have decided to make some money by joining the defense of your city!" + " You gain " + randomRange + " archers!");
				rangeUnits += randomRange;
				console.log("You gained " + randomRange + "archers.");
				console.log ("You currently have " + rangeUnits + " archers.");
				randomFactor = diceRoll(diceSide[4]);
			}
			else if (randomFactor <= 70 && randomFactor > 60){
				alert("Not enough equipment for the enemy army has been made , some enemy knights have left due to protest!" + " Enemy army has lost " + randomEnemyMelee + " knights!");
				enemyMeleeUnits -= randomEnemyMelee;
				console.log("The enemy lost " + randomEnemyMelee + "knights.");
				console.log ("The enemy currently have " + enemyMeleeUnits + " knights.");
				randomFactor = diceRoll(diceSide[4]);
			}
			else if (randomFactor <= 60 && randomFactor > 50){
				alert("An accidental explosion has cripple some enemy mages!" + " Enemy army has lost " + randomEnemyMagic + " mages!");
				enemyMagicUnits -= randomEnemyMagic;
				console.log("The enemy lost " + randomEnemyMagic + " mages.");
				console.log ("The enemy currently have " + enemyMagicUnits + " mages.");
				randomFactor = diceRoll(diceSide[4]);
			}
			else if (randomFactor <= 50 && randomFactor > 40){
				alert("Short supply of food has cause some of the enemy troops to desert their army!" + " Enemy army has lost " + randomEnemyRange + " archers!");
				enemyRangeUnits -= randomEnemyRange;
				console.log("The enemy lost " + randomEnemyRange + " archers.");
				console.log ("The enemy currently have " + enemyRangeUnits + " archers.");
				randomFactor = diceRoll(diceSide[4]);
			}
			else if (randomFactor <= 40 && randomFactor > 30){
				alert("Dispute on the walls has cause some men to die!" + " You lost " + randomMelee2 + " knights!");
				meleeUnits -= randomMelee2
				console.log("You lost " + randomMelee2 + " knights.");
				console.log("You currently have " + meleeUnits + " knights.");
				randomFactor = diceRoll(diceSide[4]);
			}
			else if (randomFactor <= 30 && randomFactor > 20){
				alert("Some poor noobs has died practicing a spell and killed his fellow wizards!" + " You lost " + randomMagic2 + " mages!")
				magicUnits -= randomMagic2
				console.log("You lost " + randomMagic2 + " mages.");
				console.log("You currently have " + magicUnits + " mage.");
				randomFactor = diceRoll(diceSide[4]);
			}
			else if (randomFactor <= 20 && randomFactor > 10){
				alert("Several archers has taken an arrow to the knee during practice and will have to sit out this battle!" + " You lost " + randomRange2 + " archers!")
				rangeUnits -= randomRange2
				console.log("You lost " + randomRange2 + " archers.");
				console.log("You currently have " + rangeUnits + " archers.");
				randomFactor = diceRoll(diceSide[4]);
			}
			else if (randomFactor <= 10 && randomFactor > 0){
				alert("A new day, would of been a good day if you haven't slept in late.");
				randomFactor = diceRoll(diceSide[4]);
			}
			else {
				alert("A bird flew by today.");
				randomFactor = diceRoll(diceSide[4]);
			}						
	

	alert("You have " + (daysRoll - i) + " left before the battle.");	
	alert("Let's start training!");
	alert("What will you train today?");
	preparation();
}	skipToBattle()
}


function preparation() {
let training = prompt("Choose either to train your knights, mages, archers, or skip.");
if (training == "knights" || training =="mages" || training =="archers"){ 
increasing(training);
}
	else if (training == "skip"){
	return daysRoll = 0;
}
	else {
	alert("Please enter knights, mages, archers, or skip!");
	preparation();
}
}


function increasing(training){
let type;
switch(training){
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
				increasing("knights");
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
				increasing("mages");
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
				increasing("archers");
				break;							
		}
		break;
	default:
		break;
}		
}

function increaseStrength() {
	let increaseChance = 100;
	let buffer = 10;
	console.log("Current strength is " + strengthValue + ".");
	strengthValue += (diceRoll(increaseChance) + buffer);
	console.log( "You have increase the strength of your Knights to" + " " + strengthValue);
}

function increaseMeleeDefense() {
	let increaseChance = 100;
	let buffer = 10;
	console.log("Current defense is " + strengthDefenseValue + ".");
	strengthDefenseValue += (diceRoll(increaseChance) + buffer);
	console.log( "You have increase the defense of your Knights to" + " " + strengthDefenseValue);
}

function increaseMagic() {
	let increaseChance = 100;
	let buffer = 10;
	console.log("Current magic is " + magicValue + ".");
	magicValue += (diceRoll(increaseChance) + buffer);
	console.log( "You have increase the magic of your Mages to" + " " + magicValue);
}

function increaseMagicDefense() {
	let increaseChance = 50;
	let buffer = 10;
	console.log("Current  magic defense is " + magicDefenseValue + ".");
	magicDefenseValue += (diceRoll(increaseChance) + buffer);
	console.log( "You have increase the defense of your Mages to" + " " + magicDefenseValue);
}

function increaseRange() {
	let increaseChance = 50;
	let buffer = 10;
	console.log("Current range is " + rangeValue + ".");
	rangeValue += (diceRoll(increaseChance) + buffer);
	console.log( "You have increase the range of your Archers to" + " " + rangeValue);
}

function increaseRangeDefense() {
	let increaseChance = 50;
	let buffer = 10;
	console.log("Current range defense is " + rangeDefenseValue + ".");
	rangeDefenseValue += (diceRoll(increaseChance) + buffer);
	console.log( "You have increase the defense of your Archers to" + " " + rangeDefenseValue);
}

function skipToBattle() {
	status();
	battle();
}

function battle(){
alert("The battle begins!");
console.log("You have " + armyValue + " troops.");
console.log("The enemy have " + enemyArmyValue + " troops.");
alert("To win this battle, you must deplete the enemy troops to 0 or below, but beware, you will lose if your army value is 0 or below.");
alert("Each turn, you will choose a unit type to send forward, if the other side unit is inferior than yours, you will get a damage multiplier, if your unit is inferior, their units will get a damage multiplier.");
alert( "knights > archers, archers > mages, mages > knights.");

while (armyValue > 0 && enemyArmyValue > 0) {
	turn();

}

if (armyValue <= 0 && enemyArmyValue <= 0 ) {
	alert("Both armies mutually destroyed eachother, but at least you did not lose your city!");
}	else if ( armyValue <= 0) {
	alert ("You lost, your city will be pillaged and it's denizen will be forced to serve another city. Better luck next time!");
}	else if (enemyArmyValue <= 0) {
		alert("Good job! You vanquish the enemy, take no prisoner, let them know not to mess with you.");
}	else {

}
}

function turn() {
let whichUnit = prompt("Choose either knights, mages, archers, or skip .");
if (whichUnit == "knights"){ 
knightsFighting();
}	else if ( whichUnit =="mages") {
	magesFighting();
}	else if (whichUnit =="archers") {
	archersFighting();
}	else if (whichUnit == "skip"){
	return armyValue = 0
}	else {
	alert("Please enter knights, mages, archers, or stop!");
	turn();
}
}

function knightsFighting() {
	let differentUnitsType = 3;
	let enemyKnights = diceRoll(differentUnitsType);
	let enemyBoostPerDay = 5;
	let enemyMagic = magicValue + (enemyBoostPerDay * daysRoll);
	let enemyStrength = strengthValue + (enemyBoostPerDay * daysRoll);
	let enemyRange = rangeValue + (enemyBoostPerDay * daysRoll);
	let enemyStrengthDefense = strengthDefenseValue + (enemyBoostPerDay * daysRoll);
	let enemyMagicDefense = magicDefenseValue + (enemyBoostPerDay * daysRoll);
	let enemyRangeDefense = rangeDefenseValue + (enemyBoostPerDay * daysRoll);
	let attackMult = 2;
	let advantageMult = 3;
	let defenseMult = 2;
	if (enemyKnights == 1) {
		armyValue -= ((enemyStrength * attackMult) - strengthDefenseValue);
		enemyArmyValue -= ((strengthValue * attackMult) - enemyStrengthDefense);
		console.log("Your opponent chose knights, both sides are even, you suffered a "+ ((enemyStrength * attackMult) - strengthDefenseValue) + " lost of troops.");
		console.log("Your opponent lost " + ((strengthValue * attackMult) - enemyStrengthDefense) + " troops.");
		console.log("You have " + armyValue + " troops.");
		console.log("The enemy have " + enemyArmyValue + " troops.");
	}	else if (enemyKnights == 2) {
		armyValue -= ((enemyMagic * advantageMult) - strengthDefenseValue);
		enemyArmyValue -= ((strengthValue * attackMult) - (enemyMagicDefense * defenseMult));
		console.log("Your opponent chose mages, their mages roasted your knights, you suffered a "+ ((enemyMagic * advantageMult) - strengthDefenseValue) + " lost of troops.");
		console.log("Your opponent lost " + ((strengthValue * attackMult) - (enemyMagicDefense * defenseMult)) + " troops.");
		console.log("You have " + armyValue + " troops.");
		console.log("The enemy have " + enemyArmyValue + " troops.");
	}	else  {
		armyValue -= ((enemyRange * attackMult) - strengthDefenseValue);
		enemyArmyValue -= ((strengthValue * advantageMult) - enemyRangeDefense);
		console.log("Your opponent chose archers, your knights cut through them like butter, you suffered a "+ ((enemyRange * attackMult) - strengthDefenseValue) + " lost of troops.");
		console.log("Your opponent lost " + ((strengthValue * advantageMult) - enemyRangeDefense) + " troops.");
		console.log("You have " + armyValue + " troops.");
		console.log("The enemy have " + enemyArmyValue + " troops.");
	}
}

function magesFighting() {
	let differentUnitsType = 3;
	let enemyMages = diceRoll(differentUnitsType);
	let enemyBoostPerDay = 5;
	let enemyMagic = magicValue + (enemyBoostPerDay * daysRoll);
	let enemyStrength = strengthValue + (enemyBoostPerDay * daysRoll);
	let enemyRange = rangeValue + (enemyBoostPerDay * daysRoll);
	let enemyStrengthDefense = strengthDefenseValue + (enemyBoostPerDay * daysRoll);
	let enemyMagicDefense = magicDefenseValue + (enemyBoostPerDay * daysRoll);
	let enemyRangeDefense = rangeDefenseValue + (enemyBoostPerDay * daysRoll);
	let attackMult = 2;
	let advantageMult = 3;
	let defenseMult = 2;
	if (enemyMages == 1) {
		armyValue -= ((enemyStrength * attackMult)  - (magicDefenseValue * defenseMult));
		enemyArmyValue -= ((magicValue * advantageMult) - enemyStrengthDefense);
		console.log("Your opponent chose knights, your mages burnt them to the ground, you suffered a "+ ((enemyStrength * attackMult)  - (magicDefenseValue * defenseMult)) + " lost of troops.");
		console.log("Your opponent lost " + (((magicValue * advantageMult) - enemyStrengthDefense)) + " troops.");
		console.log("You have " + armyValue + " troops.");
		console.log("The enemy have " + enemyArmyValue + " troops.");
	}	else if (enemyMages == 2) {
		armyValue -= ((enemyStrength * attackMult) - (magicDefenseValue * defenseMult));
		enemyArmyValue -= ((strengthValue * attackMult) - (enemyMagicDefense * defenseMult));
		console.log("Your opponent chose mages, you are both even, you suffered a "+ ((enemyStrength * attackMult) - (magicDefenseValue * defenseMult)) + " lost of troops.");
		console.log("Your opponent lost " + ((strengthValue * attackMult) - (enemyMagicDefense * defenseMult)) + " troops.");
		console.log("You have " + armyValue + " troops.");
		console.log("The enemy have " + enemyArmyValue + " troops.");
	}	else  {
		armyValue -= ((enemyRange * advantageMult) - magicDefenseValue);
		enemyArmyValue -= ((magicValue * attackMult) - (enemyRangeDefense * defenseMult));
		console.log("Your opponent chose archers, your opponents shot your mages down before they can fire their spells, you suffered a "+ ((enemyRange * advantageMult) - magicDefenseValue) + " lost of troops.");
		console.log("Your opponent lost " + ((magicValue * attackMult) - (enemyRangeDefense * defenseMult)) + " troops.");
		console.log("You have " + armyValue + " troops.");
		console.log("The enemy have " + enemyArmyValue + " troops.");
	}
}	


function archersFighting() {
	let differentUnitsType = 3;
	let enemyArchers = diceRoll(differentUnitsType);
	let enemyBoostPerDay = 5;
	let enemyMagic = magicValue + (enemyBoostPerDay * daysRoll);
	let enemyStrength = strengthValue + (enemyBoostPerDay * daysRoll);
	let enemyRange = rangeValue + (enemyBoostPerDay * daysRoll);
	let enemyStrengthDefense = strengthDefenseValue + (enemyBoostPerDay * daysRoll);
	let enemyMagicDefense = magicDefenseValue + (enemyBoostPerDay * daysRoll);
	let enemyRangeDefense = rangeDefenseValue + (enemyBoostPerDay * daysRoll);
	let attackMult = 2;
	let advantageMult = 3;
	let defenseMult = 2;
	if (enemyArchers == 1) {
		armyValue -= ((enemyStrength * advantageMult)  - rangeDefenseValue );
		enemyArmyValue -= ((rangeValue * attackMult) - (enemyStrengthDefense * defenseMult));
		console.log("Your opponent chose knights, your archers are masscared, you suffered a "+ (((enemyStrength * advantageMult)  - rangeDefenseValue )) + " lost of troops.");
		console.log("Your opponent lost " + ((rangeValue * attackMult) - (enemyStrengthDefense * defenseMult)) + " troops.");
		console.log("You have " + armyValue + " troops.");
		console.log("The enemy have " + enemyArmyValue + " troops.");
	}	else if (enemyArchers == 2) {
		armyValue -= ((enemyMagic * attackMult) - (rangeDefenseValue * defenseMult));
		enemyArmyValue -= ((rangeValue * advantageMult) - enemyMagicDefense);
			console.log("Your opponent chose mages, they are helpless before your rains of arrows, you suffered a "+ ((enemyMagic * attackMult) - (rangeDefenseValue * defenseMult)) + " lost of troops.");
		console.log("Your opponent lost " + ((rangeValue * advantageMult) - enemyMagicDefense) + " troops.");
		console.log("You have " + armyValue + " troops.");
		console.log("The enemy have " + enemyArmyValue + " troops.");
	}	else  {
		armyValue -= ((enemyRange * attackMult) - rangeDefenseValue);
		enemyArmyValue -= ((rangeValue * attackMult) - enemyRangeDefense);
		console.log("Your opponent chose archers, your opponents shot your mages down before they can fire their spells, you suffered a "+ ((enemyRange * advantageMult) - magicDefenseValue) + " lost of troops.");
		console.log("Your opponent lost " + ((magicValue * attackMult) - (enemyRangeDefense * defenseMult)) + " troops.");
		console.log("You have " + armyValue + " troops.");
		console.log("The enemy have " + enemyArmyValue + " troops.");
	}
}	

gameStart()





