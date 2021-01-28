/* 
 - switch statments execute a block of code when a 'case' is evaluated as true
 - the switch statment often incorporates the 'break' keyword, as well as the 'default' keyword - although both keywords are optional
    - the break keyword breaks out of a case evaluated as true. This will stop the execution of more cases from being tested. If the break keyword is omitted the next case in the switch statment will be evaluated 
    - the default keyword is like else in an if else
*/

let officeCharacter = 'Micheal';

switch (officeCharacter) {
    case "Micheal":
        console.log('My mind is going a mile an hour')
        break;
    case "Dwight":
        console.log('Perfectenschlag')
        break;
    case "Jim":
        console.log("Bear's beats battelstar galactica")
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, do I know you?`)
        break;
}