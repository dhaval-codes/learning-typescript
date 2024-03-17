interface User {
    readonly dbID: number
    email: string,
    userID: number,
    googleID?: string,
    // startTrail: () => string
    startTrail():string,
    getCoupon(cuponName:string,value:number):number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const dhaval:Admin = {
    dbID: 22,
    role: "admin",
    email:"d@d.in",
    userID: 2211,
    startTrail: () => {
        return 'trail started'
    },
    getCoupon: (name: "dhaval", off: 40) =>{
        return off
    }
    ,
    githubToken: "github baby"
}

dhaval.email = "dhaval@j.in"
// dhaval.dbID = 23

export {}