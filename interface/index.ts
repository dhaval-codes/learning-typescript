interface User {
    readonly dbID: number
    email: string,
    userID: number,
    googleID?: string,
    // startTrail: () => string
    startTrail():string,
    getCoupon(cuponName:string,value:number):number
}

const dhaval:User = {
    dbID: 22,
    email:"d@d.in",
    userID: 2211,
    startTrail: () => {
        return 'trail started'
    },
    getCoupon: (name: "dhaval", off: 40) =>{
        return off
    }
}

dhaval.email = "dhaval@j.in"
// dhaval.dbID = 23

export {}