// a ternary is the shortcut version to write a conditional

let num = 6;

if (num > 0){
    console.log("The number is positive")
} else {
    console.log("The number is negative")
}

//ternaru
let num = -4;

num > 0 ? console.log("the number is positive") : console.log("the number is negative");
// the condition we are checking is num > 0 
// to the right of the ? is what happens if the condition is true
// to the right of the : is the else 

let luckyNumber = 4;

luckyNumber == 4 ? console.log('the numbers match') : luckyNumber < 4 ? console.log('the number is less than 4') : luckyNumber > 4 ? console.log('number is greater then 4') : console.log(luckyNumber);
// parens are optional                                
// you can add another condition to check (like else if) 