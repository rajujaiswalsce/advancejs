

//ES6 Classess - create object

// class Car{

//     constructor(n,b){    // just like function
//       this.name = n;
//       this.brand = b;
//     }
// }

// let c1 = new Car("duster","renault")  // object

// console.log("c1:",c1);


//Object Oriented Programming;

// function saymyName(){
// }
// obj.saymyName()    //Methode 

//1.Inheritance


// class Car{

//     constructor(n,b){   
//       this.name = n;
//       this.wheels = 4;
//       this.brand = b;
     
//     }
// }

// // let c1 = new Car("duster","renault")

// class Sedan extends Car{
//     constructor(n,b){
//         super(n,b);     // super is properties (collecting the data)
//        this.sunroof = true;
//     }
// }


// class ElectricSedan extends Sedan{

//      constructor(n,b,value){
//          super(n,b,value)
//         //  this.electric = true;
//         this.elctric = value;
        
//      }

// }

// let s1 = new ElectricSedan("Verna","Hyundai",true);
// console.log("s1:",s1) 


// 2.Encapsulation 
// getter and setter methods
// class Employee{
//     constructor(n,r){
//         this.name = n;
//         this.rating = r;
//     }
//     getName(){         // out side the add value
//      return this.name;
//     }
//     setName(value){     // add the value
//     this.name = value;
//     }
// }

// let e1 = new  Employee()

// e1.setName("pablo");   //line no 72

// console.log(e1.getName());



//3.Abstaction

// class Employee{
//     constructor(n,r){
//         this.name = n;
//         this.rating = r;
//         this.skills = []
//     }
//     learnSkiil(skill){
//         this.skills.push(skill);  //implimentain
//     }
// }

// // //save thing as =->
// // Employee.prototype = function(){

// // }

// let e1 = new Employee("pablo",999)

// e1.learnSkiil("Oops");

// console.log("e1:",e1)




//4.Polymorphism

class Vehical{
    run(){
        console.log("vehical is running")
    }
}
class Car extends Vehical{
    run(){
        console.log("Car is running")
    }
}

class Truck extends Car{
    run(){
        console.log("Truck is running")
    }
}

let v1 = new Vehical()
let v2 = new Car()
let v3 = new Truck()
v3.run()               //if give child method so given chiled other wise parent method show


//note---
//parent - vehical
//child - Car,truck