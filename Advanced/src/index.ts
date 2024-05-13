//CLASSES N TS PRIVATE VS PUBLIC
// class User {
//     email:string
//     name:string
//     city:string= "karachi"
//     constructor(name:string,email:string,){
//         this.name = name;
//         this.email= email
//     }
// }
// const Azlan = new User('Azlan','azlan@gmail.com')

// console.log(Azlan.city);

// The Upper code can also be written like this.
class User {
    protected _courseCount = 1
    constructor(
        public name:string,
        public email:string,
        // private userId:string
    ){  
    }
    private deleteToken(){
        console.log("Token deleted");
        
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}
class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}
const Azlan = new User('Azlan','azlan@gmail.com')
console.log(Azlan);

// Azlan.deleteToken()


