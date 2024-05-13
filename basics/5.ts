// VIDEO ABOUT OBJECTS AND ABOUT THEIR BAD BEHAVIORS



const user ={
    name:"Azlan",
    email:"azlan@gmail.com",
    isActive: true
}


//AN ARGUEMENT RETURNING A FUNCTION
function createUser(alreadyUsr:{}   ){
    return alreadyUsr
}
createUser(user)


// PARAMETER THAT ACCEPTS MULTIPLE DATYPES THROUGH ARGUMENTS.
// createUser({name:"Azlan",isPaid:false})
// function createUser({name:string, isPaid :boolean }){
// }

// createUser({name:"Azlan",isPaid:false})



//FUNCTION THAT RETURNS AN OBJECT.
function createCourse():{name:string,price:number}{
    return {name:"Azlan",price:2000}
}



// BAD BEHAVIOR OF OBJECTS.

//Masla ye hai k menay function k parameters me email ka varibale define he nahi function execute kartay waqt wo email walay arguement ko accept bh nh kar
// function newCreateUser({name:string,isActive:boolean}){
// }
// newCreateUser({name:"Azlan",isActive:false,email:"azlan@gmail.com"})




// ab jab menay ek separate object banaya use fields k namese or ismey email bh rakhdia ab ye accept kar rha hai.
function newCreateUser({name:string,isActive:boolean}){
}
let newUser = {
    name:"Azlan",
    isActive:false,
    email:"azlan@gmail.com"
}
newCreateUser(newUser)
