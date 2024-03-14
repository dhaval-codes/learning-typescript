type User = {
    readonly _id: string
    name: string;
    email: string;
    isActive: boolean;
    creditCard?: number
}

let myUser: User = {
    _id: "23frn",
    name: "h",
    email: "h@e.in",
    isActive: false
}

type cardNumber = {
    cardnumber: string;
}

type cardDate = {
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & {cvv:number}

// allowed to do this
myUser.email = "h@df.im"

//not allowed to do this 
// myUser._id = "rn4n"



export{}