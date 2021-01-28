/*
MORNING CHALLENGE
************
    - declare a variable of FB that gets initialized with a number
    - write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
*/

// ELSE IF 
let FB = 15;
if (FB % 3 == 0 && FB % 5 == 0){
    console.log('Fizz Buzz')
}
else if(FB % 3 == 0){
    console.log('fizz');
}
else if(FB % 5 == 0){
    console.log('buzz');
}
else{
    console.log('number not divisable by 3 || 5');
}

//ternaray

let FB = 15;
FB % 3 == 0 && FB % 5 == 0 ? console.log('Fizz Buzz') : FB % 3 == 0 ? console.log('fizz') : FB % 5 == 0 ? console.log('buzz') : console.log('number not divisable by 3 || 5');

//switch?

let FB = 15;
// so now instead of passing in a number, we are using it to check if the case is true
switch(true){
    case (FB % 3 == 0 && FB % 5 == 0):
        console.log('fizz buzz');
        break;
    case (FB % 3 == 0):
        console.log('fizz');
        break;
    case (FB % 5 == 0):
        console.log('buzz');
        break;
    default:
        console.log(FB);
        break;

}

// for loop

for(i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log('fizz buzz');
    }
    else if (i % 3 == 0){
        console.log('fizz');
    }
    else if (i % 5 == 0){
        console.log('buzz');
    }
    else {
        console.log(i);
    }
}



