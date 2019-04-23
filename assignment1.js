document.getElementById("myname").innerHTML = "Henry Huynh";

function getpay (){
	let payrate = prompt("What is your pay per hour?");
	return payrate;
}

function getHours(){
	let hoursworked = prompt("How many hours do you work a week?");
	return hoursworked;
}

function overtimed(hours){
	let overtime = 0
	let normalworkinghours = 40
	if (hours > normalworkinghours) {
		overtime = hours - normalworkinghours
		return overtime
}	else {
		return 0
}
}

function pay(){
	let hourlypay = getpay()
	let hours = getHours()
	let overtimepaymult = 1.5
	pay = (((hours - overtimed(hours)) * hourlypay) + (overtimed(hours) * (overtimepaymult * hourlypay)))
	return pay
}

console.log(pay())





for (let i = 1; i < 101; i++) {
	if ((i % 5 == 0) && (i % 3 == 0)){
		console.log("fizzbuzz")
	}
	else if ( i % 5 == 0) {
		console.log("buzz")
	}
	else if (i % 3 == 0) {
		console.log("fizz")
	}
	else
		console.log(i)
}






