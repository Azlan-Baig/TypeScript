// TUPLES IN TS

// const user: (string | number)[] = [1, "hc"]
let tUser: [string, number, boolean]

tUser = ["hc", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "example@google.com"]

newUser[1] = "hc.com"

// Ab set hugaya hai pehlay ye masla huta tha k ye boolean DT type bh push kardeta thaa..    :(
// newUser.push(false)

























export {}