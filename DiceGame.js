function dice(sides) {
	sides = parseInt(sides)
	 return Math.floor(Math.random() * (sides) + 1)
}

console.log("War is coming to your city, you must prepare your limited troops and supplies, then face them out front!")

magic= 100
strength = 100
range = 100
strengthdefense = 100
magicdefense = 100
rangedefense =100


enemymagic = 80
enemystrength = 80
enemyrange = 80
enemystrengthdefense = 80
enemymagicdefense = 80
enemyrangedefense = 80

daysroll = dice(7)
console.log(daysroll)
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

console.log(" Your melee troops current strength is" + " " + strength)
console.log(" Your melee troops current defense is" + " " + strengthdefense)
console.log(" Your magic troops current magic is" + " " + magic)
console.log(" Your magic troops current defense is" + " " + magicdefense)
console.log(" Your range troops current range is" + " " + range)
console.log(" Your range troops current defense is" + " " +rangedefense)




