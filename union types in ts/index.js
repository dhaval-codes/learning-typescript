"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var hitesh = {
    username: "hitesh",
    id: 55
};
hitesh = {
    name: "dhaval",
    id: 55
};
// function getDBID(id:number|string){
//     console.log(`DB id is: ${id}`)
// }
getDBID(3);
getDBID("Ironman");
function getDBID(id) {
    if (typeof (id) === "string") {
        id.toLowerCase();
    }
}
// array
var data = [1, 2, 3,]; //array of numbers
var data2 = ['1', '2', '3']; //array of string
var data3 = ["1", 3, "3"];
