function reversestr(str1) {
	newstr =""
	for ( i = str1.length - 1; i >= 0; i--)
		 newstr += str1[i];
	 console.log(newstr);
}

reversestr("blood")

function capitalizefirstletter(str1) {
	str2 = str1.split(" ");
	text = ""
	for (i = 0; i < str2.length; i++){
		let tempstr = str2[i]
		tempstr = tempstr.charAt(0).toUpperCase() + tempstr.substring(1, tempstr.length + 1);
		text += tempstr + " "
	}
	console.log(text)
}

capitalizefirstletter("hey how are you")

function compressstr(str3) {
	temptext = ""
	counter = 1
	for (i = 0; i < str3.length; i++) {
		if (str3.charCodeAt(i) == str3.charCodeAt(i + 1)) {
			counter += 1
		}
		else {
			temptext += counter + str3[i]
			counter = 1
		}
	}
	console.log(temptext)
}

compressstr("aaabbbbbccccaacccbbbaaabbbaaa")

function palindrome(palindroma) {
	palindrom = palindroma.split(" ");
	palindrom = palindrom.join("");
	palindrom = palindrom.toUpperCase();
	confirmation = ""
	 for (i = 0; i < palindrom.length; i++) {
		if (palindrom.charCodeAt(i) === palindrom.charCodeAt((palindrom.length-1) - i)) {
			confirmation += "t" 
		}
		else {
			confirmation += "f"
		}
}
	if (confirmation.search("f") == -1) {
		console.log("This is a palindrome")
	}
	else {
		console.log("This is not a palindrome")
	}
console.log (confirmation)	
console.log (confirmation.search("f"))
console.log (palindrom)
}

palindrome("race car")

function primenum() {
	for (i = 0; i <= 100; i++) {
		if ((i % 2 == 0) || (i % 3 == 0) || (i % 5 == 0) || (i % 7 == 0)) {
			console.log("not prime")
		}
		else {
			console.log(i)
		}
	}

}
primenum()



function happynumber(numba) {
	let numba = numba.toString();
	let tempnum = 0;
	let othernumbers = [];
	while (tempnum != 1 && true) {
		for (i = 0; i < numba.length; i++) {
	 		tempnum += parseInt(numba[i] * numba[i])
	 	}
	 	numba = tempnum;
	 	tempnum = 0	
	 	othernumbers.push(tempnum)
}
	if (tempnum == 1){
		console.log( "tempnum is happy")
	else {
		console.log( "tempnum is not happy")
	}
	}
}

happynumber(68)
