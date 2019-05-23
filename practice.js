//////////////////PROBLEM 1////////////////////

//Create a variable called myName that is a string data type

const myName = 'Mandy Robinson';

//////////////////PROBLEM 2////////////////////

//Create a variable called myAge that is a number data type

const myAge = 31;

//////////////////PROBLEM 3////////////////////

//Create a variable called lovesCode that is a boolean data type

const lovesCode = true;

//////////////////PROBLEM 4////////////////////

//Create a variable called greatestFear that is undefined because we fear nothing

var greatestFear;

//////////////////PROBLEM 5////////////////////

//Create a variable called devMountainGoal that is null because we are just starting out

const devMountainGoal = null;

//////////////////PROBLEM 6////////////////////

//Create a function declaration called greeting that
//accepts name as its only parameter.
//greeting should return the string "Hello, "
//plus the value of the name parameter.

function greeting(name){
  return `Hello, ` + name;
}


//////////////////PROBLEM 7////////////////////

//Rewrite the function greeting as a function expression.
//Name it newGreeting.

var newGreeting = function (name){ return `Hello, ` + name};

//////////////////PROBLEM 8////////////////////

//Rewrite the function greeting as an arrow function.
//Name it finalGreeting.

const finalGreeting = (name) => {return `Hello, ` + name};

//////////////////PROBLEM 9////////////////////

//Create an array called groceries with the values
//"apples", "milk", "eggs", "bread"

const groceries = [ "apples", "milk", "eggs", "bread"];

//////////////////PROBLEM 10////////////////////

//Create an object saved to the variable dog.
//The dog object should have the following properties:
//name (a string), color (a string), age (a number),
//and goodBoy (a boolean).

const dog = {
  name: 'Blue',
  color: 'blue merle',
  age: 3,
  goodBoy: true
};

//...access the dog's name from the object and assign it to a
//variable called devMountainClassPet.

const devMountainClassPet = dog.name;

//////////////////PROBLEM 11////////////////////

//Write a function called nameCheck that takes in a name parameter. 
//nameCheck should check if the name equals 'Steven'. If it does,
// return 'What is up Steven?'
//If the name parameter is Bryan, return 'Hey Bryan!'
// If the name parameter is anything else, return 'Cool name, NAMEPARAM'
// with NAMEPARAM being the name parameter being passed in

function nameCheck (name){
  if(name === 'Steven'){
    return 'What is up Steven?'
  } if(name === 'Bryan'){
    return `Hey Bryan!`
  } else {
    return `Cool name, ` + name;
  }
}

//////////////////PROBLEM 12////////////////////

// Create a function called add that takes in two parameters
// that will be numbers.
// The add function should return the two parameters added together

function add (num1, num2){
  return num1 + num2;
}

//Now invoke add, passing in the numbers 3 and 4
//storing the result in the variable mathSum.

var mathSum = add(3, 4);
//////////////////PROBLEM 13////////////////////

//Write a function called faveColorFinder that takes in one parameter called color
// that will be a string.
// If the passed in color equals 'red', return 'red is a great color'
// If the passed in color equals 'green', return 'green is a solid favorite color'
// If the passed in color equals 'black', return 'so trendy'
// Otherwise, you should return the string 'you need to evaluate your favorite color choice'

var faveColorFinder = (color) => { color === 'red' ? `red is a great color` : 'green' ? 'green is a solid favorite' : 'black' ? `so trendy` : `you need to evaluate your favorite color choice`};


//////////////////PROBLEM 14////////////////////

let duck = "cute";

function bathroom() {
  let rubberDuck = "squeaky";
  function bathtub() {
    let sailorDuck = "nautical";
  }
}

function pond() {
  let realDuck = "fluffy";
}

//There are 4 variables above: duck, rubberDuck, sailorDuck and realDuck
//all within different scopes.
//Given the functions and variables above, edit the arrays
//below to contain only the appropriate variable names
//as strings.

//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = ["duck", "sailorDuck", "rubberDuck", "realDuck"];

//This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = ["duck", "sailorDuck", "rubberDuck", "realDuck"];

//This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = ["duck", "sailorDuck", "rubberDuck", "realDuck"];

//This array should contain the variable names (as strings) accessible in the pond function.
let pondScope = ["duck", "sailorDuck", "rubberDuck", "realDuck"];

//////////////////PROBLEM 15////////////////////

//Create a variable called age with your age assigned to you

// Code Here

// FLASH FORWARD TO NEXT YEAR
// reassign the value of age to be one greater than it was, because, we all get older

// Code Here

// Good news! We can live forever. Set your age to 999

// Code Here