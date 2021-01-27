/* 
    Literals 
        -a literal represents a fixed value
            -literals include:
                -string literal 
                -numaric literal
                -boolean literal
                -object literal 
                -array literal
        -Literals are simply just values that we as developers add to our code
*/

// string literal
// so its not being pulled from anywhere else, we are literally makeing it ourselves  
let car = 'ford';

// numeric literal
let december = 12;

//boolean literal
let tired = true;

///object literal - colon after the key assigns the value, and each key value pair is separated with a coma
let soup = {
    a: 'chicken noodle',
    b: 'tomato',
    C: 'beef and barley'
}

console.log(soup.a);

/* 
    -when working with objects using dot notation allows us to dive into the object and grab a spesific piece of data 
*/

//array literal 
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
console.log(days[2]);

// When working with arrys using square bracket notation allows us to pull a singular value out of the arry by its index value. The index starts counting at zero.
//But when using the leght PROPERTY the counting starts at one.

console.log(days.length)
//Lenght PROPERTY counting starts at one, not zero like an arry index
