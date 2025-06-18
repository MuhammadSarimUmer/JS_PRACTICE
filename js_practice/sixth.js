// class Car{
//     public
//     constructor(){
//         console.log("Car is constructed");
          
//     }
//      start() {
//         console.log("Car is starting");
//     }

//     stop(){
//         console.log("Car is stopping");
//     }


// }

// let Toyota = new Car();
// let fortuner = new Car();
// Toyota.start();

class Parent{
    constructor(Parent){
        this.name = Parent;
        console.log("this is a human");
    }
    printName(){
        console.log(this.name);
    }
}
class Child extends Parent{
    constructor(Child){
        super(Child);
}
}
let sarim = new Child("sarim");
sarim.printName();