//Example function: 
function DisplayName(name){
	console.log(name); //this is the logic of the function
}

//The above function takes in a variable, known as the parameter.
//In this example, that variable is name.
//The function then prints to the console the value that is passed in 

DisplayName("Mike");
DisplayName("Ian");
DisplayName("Nevin");

//Example 2
function AddOneToNumber(number){ 
	let numberOne = 1;
	let addOne = number + numberOne;
	return addOne;
}

let result = AddOneToNumber(30);

//Above we are now calling the function. This means using the function that we wrote.
//Here we are passing in an actual value. In this case, the value is "mike"

//Problem 1
//Write a function that takes in two numbers
//The logic of the function should add those two numbers together and return a sum
//Capture the returned value in a variable and print it to the console
function addnum( number1, number2) {
	let sum = number1 + number2;
	return console.log(sum);
}

addnum(3,2)
//Problem 2
//Write a function that takes in two strings
//The logic of the function should concatenate those two strings together and return the concatenated result
//Capture the returned value in a variable and print it to the console
function addstr( str1, str2 ) {
	let words = str1 + str2;
	return console.log(words);
}
addstr("bat","mobile")

//Problem 3
//Write a function that takes in a string
//The logic of the function should print each character of the string one at a time to the console
//HINT: for loop is one way to do this

function prtstrintochar( newstring) {
	for (i = 0; i < newstring.length; i++) {
		console.log(newstring[i]);
	}
}

 prtstrintochar("blue")

//Problem 4
//Write a function that takes in a string
//The logic of the function should print the string to the console but only if that string has three or more characters in it
//If it is less than three characters, then print to the console "we need a larger string to print!"

function printstr (newstring2) {
	if (3 <= newstring2.length) {
		console.log(newstring2)
}	else { console.log("we need a larger string to print!")

}
		
}


printstr("blue ")


function capitalizefirstletter(str1) {
	str2 = str1.split(" ");
	text = ""
	for (i = 0; i < str2.length; i++){
		let tempstr = str2[i]
		tempstr = tempstr.charAt(0).toUpperCase() + tempstr.substring(1, tempstr.length + 1)
		text += tempstr + " "
	}
	console.log(text)
}

capitalizefirstletter("hey how are you")

function fibonacci(){
	sum = parseInt(prompt())
	prevnumba = Math.round(sum / ((1 + Math.sqrt(5)) / 2)) 
	s = 2
	for ( i = 0; i < 10; i++) { 
		sum = prevnumba + sum
		prevnumba = (sum - prevnumba)
		s++
}
console.log(sum)
console.log(prevnumba)
console.log(s)
console.log(i)
}

fibonacci()






