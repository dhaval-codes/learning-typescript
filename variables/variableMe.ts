// string type

let greetings: string = "Dhaval"

// not allowed to redeclare as no.
// greetings = 6

// adding a dot, suggests string methods
// greetings.

// it tries to resolve typos as well
//greetings.toLocaleLowercase()

let myNum = 7

// it says, toUpperCase doesn't work on no.
// myNum.toUpperCase()

console.log(greetings)


// number type

let userId: number = 334466.45
// userID is just a number

let userID2: number = 128
// userID2 is also just a number
// no dif. b/w int and float

let num1= 2343
// it still detects num1 as number
// number = "Ronaldo"
// throws error in above line

// boolean type
let isLoggedIn: boolean = false

// any type
let hero: string;

function getHero(){
    return "Shiva"
}

hero = getHero()

// removes swiggly lines temp.
export{}