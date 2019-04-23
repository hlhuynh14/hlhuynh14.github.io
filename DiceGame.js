function dice(sides) {
	sides = parseInt(sides)
	 return Math.floor(Math.random() * (sides) + 1)
}

console.log("War is coming to your city, you must prepare your limited troops and supplies, then face the enemy out front!")

let magicvalue= 100
let strengthvalue = 100
let rangevalue = 100
let strengthdefensevalue = 100
let magicdefensevalue = 100
let rangedefensevalue =100

let daysroll = dice(7)

let enemymagic = 60 + (5 * daysroll)
let enemystrength = 60 + (5 * daysroll)
let enemyrange = 60 + (5 * daysroll)
let enemystrengthdefense = 60 + (5 * daysroll)
let enemymagicdefense = 60 + (5 * daysroll)
let enemyrangedefense = 60 + (5 * daysroll)
let enemymeeleeunits = dice(1000) + 1000
let enemymagicunits = dice(1000) + 1000
let enemyrangeunits = dice(1000) + 1000


if ( daysroll == 1) {
	console.log("Ooh, too bad, you only have one day to prepare, hope you are lucky for the battle!")
}	else if (daysroll == 2) {
		console.log( "You got two days to prepare for battle! Good Luck!")
}	else if (daysroll == 3) {
		console.log ( "Three days to prepare against these invaders!")
}	else if (daysroll == 4) {
		console.log ("With four days to prepare, this battle will be legendary!")
}	else if (daysroll == 5) {
		console.log ( "Prepare for war in five days!")
}	else if (daysroll == 6) {
		console.log ( "Heads will roll in six days, or blasted into oblivion!")
}	else {
		console.log("Good job, you have a week to prepare for the siege, this will be an easy victory!")
}

console.log("Your scout has determined the invading forces.")
console.log(enemymeeleeunits + " meelee units will be in the the enemy army.")
console.log(enemymagicunits + " magic units will be in the the enemy army.")
console.log(enemyrangeunits + " range units will be in the the enemy army.")

console.log(" Your melee troops current strength is" + " " + strengthvalue)
console.log(" Your melee troops current defense is" + " " + strengthdefensevalue)
console.log(" Your magic troops current magic is" + " " + magicvalue)
console.log(" Your magic troops current defense is" + " " + magicdefensevalue)
console.log(" Your range troops current range is" + " " + rangevalue)
console.log(" Your range troops current defense is" + " " +rangedefensevalue)







