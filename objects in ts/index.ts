const User = {
    name:"dhaval",
    email: "dhaval@dev",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){}

let newUser = {name:"tiara", isPaid:false, email: "h@h.in"}
createUser(newUser)

function createCourse ():{name: string, price: number}{
    return{name: "reactjs", price: 399}
}

export{}