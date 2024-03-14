"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// adding 2 value func
function addTwo(num) {
    return num + 2;
}
// the function accepts num as "Any" & it's problamatic as we need number as return value not Dhaval2 for instance
addTwo("dhaval"); // this is giving an error now
addTwo(5); // but this works accurately
function getUpper(value) {
    return value.toUpperCase();
}
getUpper("dhaval");
function signUpUser(name, email, isPaid) { }
// shows 1 error at a time
signUpUser(1, 2, true);
// if params is not passed default val is passed
var logInFunc = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
logInFunc("h", "d@d.in");
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1,2,3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
    // return 1
});
function consoleError(errMsg) {
    console.log(errMsg);
    // return 1
}
function handleErr(msg) {
    throw new Error(msg);
}
