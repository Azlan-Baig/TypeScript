abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        //some complex calculation
        return 8
    }
}
// const ab = new TakePhoto("test","test")

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
        ){
            super(cameraMode, filter) // matlab jo inherit karkaray hain unko use karna parta hai esay.
        }   

        getSepia(): void {  // AB JAB MENAY YE ABSTRACT METHOD BANAYA HAI TO ISKO USE KARNA BH BHT ZAROORI HAI.
            console.log("Sepia");   
        } 
}

const hc = new Instagram("test", "Test", 3)

console.log(hc);
