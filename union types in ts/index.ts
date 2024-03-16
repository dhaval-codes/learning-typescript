let score: number | string = 33

score = 44
score = "55"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let hitesh: User | Admin = {
    username:"hitesh",
    id: 55
}

hitesh={
    name:"dhaval",
    id: 55
}

// function getDBID(id:number|string){
//     console.log(`DB id is: ${id}`)
// }

getDBID(3)
getDBID("Ironman")

function getDBID(id:number|string){
    if(typeof(id)==="string"){
        id.toLowerCase()
    }
}

// array

const data:number[] = [1,2,3,]//array of numbers
const data2:string[] = ['1','2','3']//array of string
const data3: (string | number) [] = ["1",3,"3"]



export {}