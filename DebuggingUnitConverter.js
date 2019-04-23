//The purpose of this assignment is to bolster your debugging skills utilizing the IDE's debugger.
//To open the debugging tools either press F12 in your browser or right click inside the window and click inspect in the drop down menu.
//Break points will be essential in completing this assignment.
//Test every code path of mainMenu function.
//There is 14 total issues.



    //The starting point to the program.
function startConverter(){
        //Prompts the user for the starting unit.
    let firstUnit = prompt("What is your starting unit.  (inch, foot, yard)").toLowerCase();
        //Passes "firstUnit" in as a parameter to be used in the switch case.
    mainMenu(firstUnit);
}

    //Main menu function that takes in the starting unit as a parameter and then determines the unit to be converted to.
function mainMenu(firstUnit){
        //Declaration of the second unit.
    let secondUnit;
        //Switch case for the first unit.
    switch(firstUnit){
            //Fall through used for singular and plural units. (Recommend looking into fall through)
        case "inches":
        case "inch":
                //Assigns the second unit with another prompt.
            secondUnit = prompt("What would you like to convert inches to? (foot or yard)").toLowerCase();
                //Nested swtich case for the starting unit to be converted to.
            switch(secondUnit){
                case "feet":
                case "foot":
                        //Funciton call to convert inches to feet.
                    convertInchToFeet();
                    break;
                case "yards":
                case "yard":
                        //Funciton call to convert inches to yards.
                    convertInchToYards();
                    break;
                default:
                        //Default case used for input validation.
                    alert("Please enter either foot or yard");
                        //Calls the main menu function again and passes in the first unit to land right back into second unit switch case.
                    mainMenu("inch");
                    break;
            }


        
            break;
        case "feet":
        case "foot":
            secondUnit = prompt("What would you like to convert foot to? (inches or yard)").toLowerCase();
            switch(secondUnit){
                case "inches":
                case "inch":
                        //Funciton call to convert feet to inches.
                    convertFeetToInch();
                    break;
                case "yards":
                case "yard":
                        //Funciton call to convert feet to yards.
                    convertFeetToYard();
                    break;
                default:
                        //Default case used for input validation.
                    alert("Please enter either inch or yard");
                        //Calls the main menu function again and passes in the first unit to land right back into second unit switch case.
                    mainMenu("foot");
                    break;
            }
            break;
        case "yards":
        case "yard":
            secondUnit = prompt("What would you like to convert yard to? (inches or foot)").toLowerCase();
            switch(secondUnit){
                case "inches":
                case "inch":
                        //Funciton call to convert yard to inches.
                    convertYardToInch();
                    break;
                case "feet":
                case "foot":
                        //Funciton call to convert yards to feet.
                    convertYardToFeet();
                    break;
                default:
                        //Default case used for input validation.
                    alert("Please enter either foot or inch");
                        //Calls the main menu function again and passes in the first unit to land right back into second unit switch case.
                    mainMenu("yard");
                    break;
            }
            break;
        default:
            break;
    }
}

//There is only errors above.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//There is both bugs and Errors below.

function convertFeetToYard(){
    let feet = prompt("Enter number of feet to be converted to yards");
    let result = feet / 3;
    alert(feet + " feet is: " + result.toFixed(2) +" in yards");
}
function convertInchToFeet(){
    let inches = prompt("Enter number of inches to be converted to feet");
    let result = inches / 12;
    alert(inches + " inches is: " + result.toFixed(2) +" in feet"); 
}
function convertInchToYards(){
    let inches = prompt("Enter number of inches to be converted to yards");
    let result = inches / 36;
    alert(inches + " inches is: " + result.toFixed(2) +" in yards");
}
function convertYardToFeet(){
    let yards = prompt("Enter number of yards to be converted to feet");
    let result = yards * 3;
    alert(yards + " yards is: " + result.toFixed(2) +" in feet");
}
function convertFeetToInch(){
    let feet = prompt("Enter number of feet to be converted to inches");
    let result = feet * 12;
    alert(feet + " feet is: " + result.toFixed(2) +" in inches");
}
function convertYardToInch(){
    let yards = prompt("Enter number of yards to be converted to inches");
    let result = yards * 36;
    alert(yards + " yards is: " + result.toFixed(2) +" in inches");
}
