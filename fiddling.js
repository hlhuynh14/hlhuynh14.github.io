// function reversestr(str1) {
// 	newstr =""
// 	for ( i = str1.length - 1; i >= 0; i--)
// 		 newstr += str1[i];
// 	 console.log(newstr);
// }

// reversestr("blood")

// function capitalizefirstletter(str1) {
// 	str2 = str1.split(" ");
// 	text = ""
// 	for (i = 0; i < str2.length; i++){
// 		let tempstr = str2[i]
// 		tempstr = tempstr.charAt(0).toUpperCase() + tempstr.substring(1, tempstr.length + 1);
// 		text += tempstr + " "
// 	}
// 	console.log(text)
// }

// capitalizefirstletter("hey how are you")

// function compressstr(str3) {
// 	temptext = ""
// 	counter = 1
// 	for (i = 0; i < str3.length; i++) {
// 		if (str3.charCodeAt(i) == str3.charCodeAt(i + 1)) {
// 			counter += 1
// 		}
// 		else {
// 			temptext += counter + str3[i]
// 			counter = 1
// 		}
// 	}
// 	console.log(temptext)
// }

// compressstr("aaabbbbbccccaacccbbbaaabbbaaa")

// function palindrome(palindroma) {
// 	palindrom = palindroma.split(" ");
// 	palindrom = palindrom.join("");
// 	palindrom = palindrom.toUpperCase();
// 	confirmation = ""
// 	 for (i = 0; i < palindrom.length; i++) {
// 		if (palindrom.charCodeAt(i) === palindrom.charCodeAt((palindrom.length-1) - i)) {
// 			confirmation += "t" 
// 		}
// 		else {
// 			confirmation += "f"
// 		}
// }
// 	if (confirmation.search("f") == -1) {
// 		console.log("This is a palindrome")
// 	}
// 	else {
// 		console.log("This is not a palindrome")
// 	}
// console.log (confirmation)	
// console.log (confirmation.search("f"))
// console.log (palindrom)
// }

// palindrome("race car")

// function primenum() {
// 	for (i = 0; i <= 100; i++) {
// 		if ((i % 2 == 0) || (i % 3 == 0) || (i % 5 == 0) || (i % 7 == 0)) {
// 			console.log("not prime")
// 		}
// 		else {
// 			console.log(i)
// 		}
// 	}

// }
// primenum()



// function happynumber(numba) {
// 	let numba = numba.toString();
// 	let tempnum = 0;
// 	let othernumbers = [];
// 	while (tempnum != 1 && true) {
// 		for (i = 0; i < numba.length; i++) {
// 	 		tempnum += parseInt(numba[i] * numba[i])
// 	 	}
// 	 	numba = tempnum;
// 	 	tempnum = 0	
// 	 	othernumbers.push(tempnum)
// }
// 	if (tempnum == 1){
// 		console.log( "tempnum is happy")
// 	else {
// 		console.log( "tempnum is not happy")
// 	}
// 	}
// }

// happynumber(68)

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
let enemymeleeunits = diceroll(1000) + 1000;
let enemymagicunits = diceroll(1000) + 1000;
let enemyrangeunits = diceroll(1000) + 1000;
let meleeunits = diceroll(500) + 500;
let magicunits = diceroll(500) + 500;
let rangeunits = diceroll(500) + 500;

let armyvalue = meleeunits + magicunits + rangeunits
let enemyarmyvalue = enemymeleeunits + enemymagicunits + enemyrangeunits


function knights() {
	let enemyknights = diceroll(3)
	if (enemyknights == 1) {
		armyvalue -= ((enemystrength * 2) - strengthdefensevalue)
		enemyarmyvalue -= ((strengthvalue * 2) - enemystrengthdefense)
		console.log("You have " + armyvalue + " troops.")
		console.log("The enemy have " + enemyarmyvalue + " troops.")
	}	else if (enemyknights == 2) {
		armyvalue -= ((enemymagic * 3) - strengthdefensevalue)
		enemyarmyvalue -= ((strengthvalue * 2) - (enemymagicdefense * 2))
		console.log("You have " + armyvalue + " troops.")
		console.log("The enemy have " + enemyarmyvalue + " troops.")
	}	else  {
		armyvalue -= ((enemyrange * 2) - strengthdefensevalue)
		enemyarmyvalue -= ((strengthvalue * 3) - enemyrangedefense)
		console.log("You have " + armyvalue + " troops.")
		console.log("The enemy have " + enemyarmyvalue + " troops.")
	}
}


function mages() {
	let enemymages = diceroll(3)
	if (enemymages == 1) {
		armyvalue -= ((enemyknights * 2)  - (magicdefensevalue * 2))
		enemyarmyvalue -= ((magicvalue * 3) - enemystrengthdefense)
		console.log("You have " + armyvalue + " troops.")
		console.log("The enemy have " + enemyarmyvalue + " troops.")
	}	else if (enemymages == 2) {
		armyvalue -= ((enemyknights * 2) - (magicdefensevalue * 2))
		enemyarmyvalue -= ((strengthvalue * 2) - (enemymagicdefense * 2))
		console.log("You have " + armyvalue + " troops.")
		console.log("The enemy have " + enemyarmyvalue + " troops.")
	}	else  {
		armyvalue -= ((enemyrange * 3) - magicdefensevalue)
		enemyarmyvalue -= ((magicvalue * 2) - (enemyrangedefense * 2))
		console.log("You have " + armyvalue + " troops.")
		console.log("The enemy have " + enemyarmyvalue + " troops.")
	}
}	

function archers() {
	let enemyarchers = diceroll(3)
	if (enemyarchers == 1) {
		armyvalue -= ((enemyknights * 3)  - rangedefensevalue )
		enemyarmyvalue -= ((rangevalue * 2) - (enemystrengthdefense * 2))
		console.log("You have " + armyvalue + " troops.")
		console.log("The enemy have " + enemyarmyvalue + " troops.")
	}	else if (enemyarchers == 2) {
		armyvalue -= ((enemymagic * 2) - (rangedefensevalue * 2))
		enemyarmyvalue -= ((rangevalue * 3) - enemymagicdefense)
		console.log("You have " + armyvalue + " troops.")
		console.log("The enemy have " + enemyarmyvalue + " troops.")
	}	else  {
		armyvalue -= ((enemyrange * 2) - rangedefensevalue)
		enemyarmyvalue -= ((rangevalue * 2) - enemyrangedefense)
		console.log("You have " + armyvalue + " troops.")
		console.log("The enemy have " + enemyarmyvalue + " troops.")
	}
}	

function diceroll(sides) {
	sides = parseInt(sides);
	 return Math.floor(Math.random() * (sides) + 1);
}

function turn() {
let whichunit = prompt("Choose either knights, mages, archers, or Stop.")
if (whichunit == "knights"){ 
knights();
}	else if ( whichunit =="mages") {
	mages();
}	else if (whichunit =="archers") {
	archers();
}	else if (whichunit == "stop"){
		
}	else {
	alert("Please enter knights, mages, archers, or stop!");
	turn();
}
}


while (armyvalue >= 0 && enemyarmyvalue >= 0) {
	turn()
}