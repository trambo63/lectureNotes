let weather = 45;

if(weather < 70) {
    console.log('put on a friggin jacket, buddy!')
}else {
    console.log("it's a bit warm for a jacket, guy!")
}

/*
CHALLENGE
************
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    Gold:
    If it is not your name, console log 'Hello, is your name <name> ?'
*/

let myName = 'Rusty Shakelford';
if (myName === 'Rusty Shakelford') {
    console.log(`Hello, my name is ${myName}!`)
} else {
    console.log(`Hello, is your name ${myName}?`)
}

/*
CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log that first letter of the string, plus the rest of the string to lowercase
    If the first letter is not uppercase, console.log the first letter of the string to uppercase, plus the rest of the string to lowercase
*/

//bronze
let myName = 'ZAchARy';
// console.log(myName.charAt(o));
// console.log(myName[0]);

if (myName[0] == myName[0].toUpperCase()){
    console.log(myName);
} else {
    console.log("hey, this isn't written correctly");
}

// silver
let myName = 'zAchARy';

if (myName[0] == myName[0].toUpperCase()){
    console.log(myName.charAt(0));
} else {
    console.log(myName.slice(1).toLowerCase());
}

// Gold
let myName = 'zAchARy'; // statement - we are stating that the variable of myName has a value of 'ZAchARy' 

if (myName[0] == myName[0].toUpperCase()){
    let isUpperCase = myName[0] + myName.slice(1).toLowerCase(); // expression - any valid unti of code that resolves to that value
    console.log(isUpperCase);
} else {
    let isNotUpperCase = myName[0].toUpperCase() + myName.substring(1).toLowerCase(); // substring same as slice
    console.log(isNotUpperCase);
}

/*
CHALLENGE
************
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

// correct structure
let age = 28;
if (age <= 17) {
    console.log('sorry, you\'re to young to do anything.');
} else if (age >= 18 && age <= 20) {
    console.log('you can vote');
} else if (age >= 21 && age <= 24) {
    console.log('you can drink');
} else if (age >= 25) {
    console.log('you can rent a car');
} else {
    console.log(age);
}
// correct structure
let age = 20;
if (age >= 25) {
    console.log("Yay! You can rent a car!");
} else if (age >= 21) {
    console.log("Yay! You can drink!");
} else if (age >= 18) {
    console.log("Yay! You can vote!");
} else {
    console.log("Sorry, you're too young to do anything fun.");
}
// incorrect structure
let age = 30;
if (age >= 18) {
    console.log("Yay! You can vote!");
} else if (age >= 21) {
    console.log("Yay! You can drink!");
} else if (age >= 25) {
    console.log("Yay! You can rent a car!");
} else {
    console.log("you're too young to do anything fun")
}


