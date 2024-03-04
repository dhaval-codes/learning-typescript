// adding 2 value func
function addTwo(num: number){
    return num + 2
}
// the function accepts num as "Any" & it's problamatic as we need number as return value not Dhaval2 for instance

addTwo("dhaval")// this is giving an error now

addTwo(5) // but this works accurately

function getUpper(value: string){
    return value.toUpperCase()
}

getUpper("dhaval")

function signUpUser(name: string, email: string, isPaid: boolean){}

// shows 1 error at a time
signUpUser(1,2,true)

// if params is not passed default val is passed
let logInFunc = (name: string, email: string, isPaid: boolean = false) => {}

logInFunc("h","d@d.in")

export {}