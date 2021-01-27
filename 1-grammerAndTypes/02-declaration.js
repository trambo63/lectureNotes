/* 
Notes:
-variables: Are named containers for storing data values and refferrring to later(we can name them whatever we want)
    -a variable name must begin with letter, underscore, or dollar sign
    -numbers may follow the above characters, but cannot come first
    -JavaScript is case sensitive - 'Hi' and 'hi' are different variables
    -no spaces are allowed in variable names 
    -camelCase is best practice for naming variables 
    -snake_Case, PascelCasing
    -this is good practice because it helps keep everything readable - let myName = 'tom'
*/

let a = 2;

let       b        =       2;
/*(1)     (2)     (3)      (4)

1. Keyword
2. Variable name (we can call this whatever)
3. Assignment Operator
4. Variable value

Var, let, and Const:

-var: 'old' keyword for variables **wont use it in this course this has to do with scope
-let: 'new' keyword for variables (best practice)
-const: also 'new'; declares an unchangeable variable
*/

/* 
Notes: 
-declarations: are on the left side of a variable
    - it is simply: let x
    -declarations are on the left side of the assignment operator
    -initilization is on the right side of the variable 
        -it sets the value of the variable
        -it incorperates the variables name (x), the assignment operator (=), and the value
        (10) => x = 10
*/

let x;
console.log('Declaration', x);

x = 10;
console.log('Initilization', x);

x = 33;
console.log('Initilization 2', x);

let y = 'Hello';
console.log('Both:', x, y);

let today = 'Great!';
const elevenFifty = "Wonderful!"
console.log(today, elevenFifty);

today = 'lovely';
elevenFifty = 'Fantastic';
console.log(today, elevenFifty);

