/* 
    - for in loops are great for looping over values in an object
        -properies (or key value pairs) in an object are known as enumerable properties
        -for in loops will loop over the enumerable properties of an object

        -enumerable simply means countable
*/ 

let student = {                    // objects have enumerable properties
    name: 'Peter',
    awesome: true,
    degree: 'javascript',
    week: 1
}
// all keys in objects are strings by default

console.log(student.name); // dot notation
console.log(student['name']) // object bracket notation (the key defaults to a string)

// item grabs the key
for (let item in student) {
    // console.log(item);
    console.log(student[item]);
}

let catArray = ['tabby', 'british shortail', 'burmese', 'main coon', 'rag doll']
console.log(catArray[0]);
// the keys here in the arry are indexes
// the variable cat repersents each index of the arry
for (let cat in catArray) {
    // console.log(cat);
    // above will print out each index number
    console.log(catArray[cat]);
}

/*
CHALLENGE
************
    - write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name
*/
let myName = "thomas";
let capName;

for (let i in myName){
    // console.log(i);
    if ( i == 0){
        capName = myName[i].toUpperCase();
    } else {
        capName += myName[i].toLowerCase();
    }
}

console.log(capName);