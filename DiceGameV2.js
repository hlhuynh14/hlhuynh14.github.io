function Game(){
	let Troops = 500;

function diceRoll(sides) {
	sides = parseInt(sides);
	let zeronegation = 1
	 return Math.floor(Math.random() * (sides) + zeronegation);
} 

function armyCalc(){
let extraTroops = 500;
let armyRoll = 500;
let units = diceRoll(armyRoll) + extraTroops;
return units
}


function Game(){
	let Troops = 500;
	let extraTroops = 500;
	let armyRoll = 500;
	let enemyArmyRoll = 1000;
	let enemyBoostPerDay = 5;
	let magicValue= 400;
	let strengthValue = 300;
	let rangeValue = 350;
	let strengthDefenseValue = 100;
	let magicDefenseValue = 70;
	let rangeDefenseValue =100;
	let daysOfaWeek = 7;
	let meleeUnits = diceRoll(armyRoll) + extraTroops;
	let magicUnits = diceRoll(armyRoll) + extraTroops;
	let rangeUnits = diceRoll(armyRoll) + extraTroops;
	let daysRoll = diceRoll(daysofaweek);

	Troops = reinforcements(Troops, 700);

	let archers = reinforcements(archers, 600);


}




function reinforcements(troops, numberToIncrease){
	troops += numberToIncrease;

	return troops;
}


// function 

// let extraTroops = 500;
// let armyRoll = 500;
// let enemyArmyRoll = 1000;
// let enemyBoostPerDay = 5;
// let magicValue= 400;
// let strengthValue = 300;
// let rangeValue = 350;
// let strengthDefenseValue = 100;
// let magicDefenseValue = 70;
// let rangeDefenseValue =100;
// let daysOfaWeek = 7;
// let meleeUnits = diceRoll(armyRoll) + extraTroops;
// let magicUnits = diceRoll(armyRoll) + extraTroops;
// let rangeUnits = diceRoll(armyRoll) + extraTroops;
// let daysRoll = diceRoll(daysofaweek);
// let stats = [extraTroops, armyRoll,, enemyArmyRoll, enemyBoostPerDay, magicValue, strengthValue, rangeValue, strengthDefenseValue, magicDefenseValue, rangeDefenseValue, meleeUnits, magicUnits, rangeUnits, daysRoll];

// let randomSides = [10, 20, 30, 50, 80, 100, 150, 200, 250, 300]
// let randomFactor = diceRoll(randomSides[5]);
// let randomMelee = diceroll(randomSides[9]);
// let randomMagic = diceroll(randomSides[7]);
// let randomRange = diceroll(randomSides[8]);
// let randomEnemyMelee = diceroll(randomSides[6]);
// let randomEnemymMagic = diceroll(randomSides[4]);
// let randomEnemyRange = diceroll(randomSides[5]);
// let randomMelee2 = diceroll(randomSides[2]);
// let randomMagic2 = diceroll(randomSides[0]);
// let randomRange2 = diceroll(randomSides[1]);
// let randomNumbers = [randomFactor, randomMelee, randommMagic, randomRange, randomEnemyMelee, randomEnemyMagic, randomEnemyRange, randomMelee2, randomMagic2, randomRange2]


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

// }

// function diceroll(sides) {
// 	sides = parseInt(sides);
// 	zeroNegation = 1
// 	 return Math.floor(Math.random() * (sides) + zeroNegation);
// }

// function gameBackGround() {
// alert("War is coming to your city, the neighboring city-state wants an expansion and sees your city as an easy target! You must prepare your limited troops and supplies, then face the enemy! Show them who is boss and slaughter them all!");
// alert("Your scout has determined the invading forces.");
// alert(enemymeleeunits + " knights will be in the the enemy army.");
// alert(enemymagicunits + " mages units will be in the the enemy army.");
// alert(enemyrangeunits + " archers units will be in the the enemy army.");

// if ( daysRoll == 1) {
// 	alert("Ooh, too bad, you only have one day to prepare, hope you are lucky for the battle!");
// }	else if (daysroll == 2) {
// 		alert( "You got two days to prepare for battle! Good Luck!");
// }	else if (daysroll == 3) {
// 		alert( "Three days to prepare against these invaders!");
// }	else if (daysroll == 4) {
// 		alert("With four days to prepare, this battle will be legendary!");
// }	else if (daysroll == 5) {
// 		alert( "Prepare for war in five days!");
// }	else if (daysroll == 6) {
// 		alert( "Heads will roll in six days, or blasted into oblivion!");
// }	else {
// 		alert("Good job, you have a week to prepare for the siege, this will be an easy victory!");
// }
// }