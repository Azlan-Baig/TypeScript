//TYPE ALIASES.

type User = {
    name:string;
    email:string
    phoneNo:number
    isActive?:boolean
}

function createUser(user: User){
}
createUser({name:"Azlan", email: "azlan@gmail.com", phoneNo: 1232,})

export {}