"use strict";
// string type
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Dhaval";
// not allowed to redeclare as no.
// greetings = 6
// adding a dot, suggests string methods
// greetings.
// it tries to resolve typos as well
//greetings.toLocaleLowercase()
var myNum = 7;
// it says, toUpperCase doesn't work on no.
// myNum.toUpperCase()
console.log(greetings);
// number type
var userId = 334466.45;
// userID is just a number
var userID2 = 128;
// userID2 is also just a number
// no dif. b/w int and float
var num1 = 2343;
// it still detects num1 as number
// number = "Ronaldo"
// throws error in above line
// boolean type
var isLoggedIn = false;
// any type
var hero;
function getHero() {
    return "Shiva";
}
hero = getHero();
