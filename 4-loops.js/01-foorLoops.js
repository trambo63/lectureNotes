/* 
    - loops offer us a quick and easy way to do somthing repeatedly

    -there are many different kinds of loops, but they all essentially do the same thing: repeat intill a specified condition evaluates to false
        -for loops
        -for in loops
        -for of loops
        -while loops
        -do while loops
        -labeled loops
        -break loops
        -continue loops

    Note: watch out for infinite loops!

    -for loops take in 3 required peremeters
        1. initial expression
        2. condtion 
        3. increment expresstion
*/
     //1       //2   //3
for (let i = 0; i < 10; i++){
    console.log(i);
}

for (let i = 0; i <= 20; i += 2){
    console.log(i);
}

for (let i = 10; i >= 0; i -=1){
    console.log(i);
}

for (let i = 0; i >= -24; i -=2){
    console.log(i);
}

let myName = 'tom';
for(let i = 0; i < myName.length; i++){
    console.log(myName[i])
}

let sum = 0;

for (let i = 1; i <= 50; i++){
    sum +=i;
}
console.log(sum);