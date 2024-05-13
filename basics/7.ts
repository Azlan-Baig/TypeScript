// READONLY AND OPTIONAL i.e "?"

type User = {
  readonly _id:string
  name:string
  email:string
  isActive:boolean
  credCardDetails?:number
}

let myUser: User = {
    _id: "123",
    name: "Azlan",
    email: "azlan@gmail.com",
    isActive: false
    }

myUser.email = "azlan123@gmail.com"
// myUser._id = "155"   //isko changed nahi kar saktay q k ye readonly hai..
type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}



export {}