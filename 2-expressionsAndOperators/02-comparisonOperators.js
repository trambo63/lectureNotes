// equal
console.log(3 == 3); // true
console.log('3' == 3); // true
/* 
-coersion is the process of coverting a value from one type to another
    -JS assumes that we made a mistake and that we do want to compare two values that are the same datatype.
*/ 

// strick equal orverrides js coersion
console.log('3' === 3); // false
console.log(3 === 3); //true

//not equal 
console.log('3' != 3); //false this is checking to see if the values are not equal.

//strick not equal 
console.log('3' !== 4); //true

//greater than
3 > 2; //true

//less than 
2 < 3; //true

//Greater than or equal to 
3 >= 2; //true

// less thn or equal to 
2 <= 3; //true

// and 
2 && 3; // allows us to check if multiple values are true or false 

if(x >= 1 && y >= 1){
    console.log('true')
}

// or 
2 || 3; // allows us to check if one or the other values are true or false 


// function FizzBuzzA(value1, value2){
//     for(let i = 1; i<=100;i++){
//         if(i%value1==0)
//     }

// }

