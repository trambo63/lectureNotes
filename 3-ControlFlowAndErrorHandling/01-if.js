/* 
    Conditionals
        - a falsy value is a value that is considered false when it is encontered in a boolean context
            -there are 6 falsy values in javaScript
                1. false
                2. 0  equates to false
                3. "", '', `` empty qutes equate to false 
                4. null
                5. undefined
                6. NaN (not a number)
*/

if (undefined) {
    console.log('will it run?')
}

// you cant check the condition undefined because its a falsy value 

let isOn = true;
if(isOn == true) {
    console.log('the light is on')
}

if (isOn) {
    console.log('the light is on')
}

isOn = false;
if (isOn == false) {
    console.log('the light is off')
}

// JS allows us to reference a variable that's already be declared and assign it a new value (or reinitalize that variable), but we cannot declare two variables with the same name

//general rule of thumb when decalering a new variable , the variable needs to be prefaced bu one of our 3 available JS keywords to declare a new variable (var, let, const)
//When assinging a new value to a variable that already exits, we simply need to reference a variable thats aready been named

let weather = 65;
if(weather < 70) {
    console.log('wear a jacket')
}