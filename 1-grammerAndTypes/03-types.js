/*
Booleans: only have two possible values, ture or false
*/

let on = true;
console.log(on);

let off = false;
console.log(off);

/*
Null: null is an empty value. It is an empty container. Nothing is in it, but still there exists a space to fill
*/

let empty = null;
console.log(empty)

/* 
Undefined: no value is assigned and does not act as an empty container 
*/

let undefined;
// let undef = undefined;
console.log(undefined);

/* 
NULL v UNDEFINED 
Null:
    - Null is like container with nothing in it
    - undefined is when a variable has never been initalized, or hasent been created yet.

    think of variables with null and undefined as packeges coming out of UPS
    Null packages are packages that were intentionally packed up with nothing, but have been assembled
    Undefiened packeges are bassically boxes that need to be assembled and given somthing to ship
*/

/* 
Numbers: numbers are literally just numbers, Don't need to write anything speacial in JS.
*/

let degrees = 90;
console.log(degrees)
//the naming doesnt matter as far as the output is conserned
let precise = 999999999999999; //15 9s
console.log(precise); // 15 9s

let rounded = 9999999999999999; //16 9s
console.log(rounded); // after 16 9s it rounds up

let notQuite = 0.2 + 0.1;
console.log(notQuite); // Js rounds out at a certian number. so if math is needed beware!

let numberAreHard = (0.2 * 10 + 0.1 * 10) / 10
console.log(numberAreHard);

/*
Strings: strings are a DataType to represent text and are wrapped in a single quote 
('') or double quotes ("")
*/

let stringOne = "Oh hi Mark";
let stringTwo = 'Oh hi Mark';

console.log(stringOne, stringTwo);

//Numbers vs String
let first = 1050 + 100;
let second = '1050' + '100'; // string concatination

console.log(first); //number
console.log(second); //string

/*
Objects: are used to store many values instead of a singular value 
*/

let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true,
}

console.log(frodo);
console.log(typeof frodo); // typeof is nice to use when we dive into functions. It allows you to check what type of object it is.

/*Arrays: are containers that hold a list of items
    -can hold multipul data types 
*/

let list = ['item1', 'item2', 'item3', undefined, 1, true]
//  (1)     (2)                          (3)

/* 
1. name of the array or list;
2. array's use square brackets
3. each item, regardless of dataType, and is seprated by commas
*/

let burritos = ['large', 4, true]
console.log(burritos);

console.log(typeof burritos)
//arrays are also contianers that can hold multiple dataTypes. So JS has classified arrys as objects and not it's own dataType.

/*
    -when JS sees that we're trying to combine two or more numbers, it adds the values together using the built in math functionallity
    -when Js sees us trying to add together more strings, instead of using the builtin math functionallity, it combines the two strings instead without synthesisizing the values.
    -
*/

let example = 1150 + '100'; //coersion JS assumes that the user made a mistake and that we're trying to concatinate two strings instead without synthesizing the value.
console.log(example);
console.log(typeof example);

/*
    Challenge:
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/

let firstName = 'Tom';
let lastName = 'Rambo';
let houseNumber = 1112;
let aptNumber = 237;
let street = 'Pawne Rd'
let city = 'Medina';
let state = 'Ohio';
let zipcode = 44408;

console.log(firstName + " " + lastName);
console.log(houseNumber + " " + street + " apt# " + aptNumber);
console.log(city + ", " + state + " " + zipcode);
// in JS if you put a comma between varible names it will add a space for you, so its a separater
console.log(firstName, lastName + ',', houseNumber, street + ',', city + ',', state, zipcode)//string concatenation

console.log(`${firstName} ${lastName}, ${houseNumber} ${street}, ${city}, ${state} ${zipcode}`)//string interpolation
console.log(`Hello, my name is ${firstName}`); // here is somemore string interploation. it's much more prevelant and eaiser to read. 

/*
String Properties
- properties are qualities that are associated with a datatype
*/

let myName = 'Tom';
console.log(myName.length); // 3

/* 
 String Methods
 - methods are tools that help us manipulate the data
  - .properties / .methods()
    *no paranethesis for properties*
*/

let myNameIs = 'Tom';
console.log(myNameIs.toUpperCase()); // Method that changes a string to uppercase

let homeTown = 'my hometown is Medina';
console.log(homeTown.includes('Medina')); // method that checks if a chertain string is included in another string(case sensetive)

// Challenge: Use google, find MDN documentation for Strings, research and use the split method to get an array back from this string

let sent = 'This sentence will be split into individual parts'
let res = sent.split(' ', 7);
console.log(res);





