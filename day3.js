
//cat ecosystem

// const cat = {
//   legs: 4,
//   tail: true,
//   furs: true,
//   claws: "sharp",
// };

// //Efficient way - Object.create()

// const lion = Object.create(cat);

// const liger = Object.create(lion);

//prototype = inheritance

//DNA = Inheritance ( idea )

// const student = {

//   unit: 3,
//   batch: 'web 17',
//   instructor: 'sk',

// }

// const s1 = Object.create(student)
// const s2 = Object.create(student)
// const s3 = Object.create(student)

// function Student(n, u) {
//   (this.name = n), (this.unit = u);
// }

// Student.prototype.bio = function () {
//   console.log(`hello from ${this.name}`);
// };

// let s1 = new Student("saber", 3);

// s1.bio();
//console.log("s1:", s1);

// let s2 = new Student("saber", 3);
// console.log("s1:", s1);

// function Shoes(b, p) {
//   this.brand = b;
//   this.seller = "flipkart";
//   this.price = p;
// }

// Shoes.prototype.coupon = function () {
//   console.log("20% discount on this products");
// };

// let s1 = new Shoes("nike", 3000);
// let s1 = new Shoes("nike", 3000);
// let s1 = new Shoes("nike", 3000);
// let s1 = new Shoes("nike", 3000);
// let s1 = new Shoes("nike", 3000);
// let s1 = new Shoes("nike", 3000);
// let s1 = new Shoes("nike", 3000);
// let s1 = new Shoes("nike", 3000);

// console.log("s1:", s1);

// s1.coupon();
//console.log("s1:", s1);

// let arr = [1, 2, 3];

// arr.__proto__.myProp = "random";

// let arr2 = [4, 5, 6];

// console.log(arr2.myProp);

//1. arr
//pop

//Create Custom Hindi Array functions

//Array Connstructor function

let a1 = new Array("x", "y", "z");

//arguments object
//this -> object
function myArray() {
  Object.defineProperty(this, "length", {
    value: 0,
    writable: true,
    enumerable: false, //dont count this property
  });

  this.length = arguments.length;

  // 0: x
  // 1: y
  // 2: z
  // 3: a - last

  //  lhs(index) = rhs(value)

  for (let i = 0; i < this.length; i++) {
    this[i] = arguments[i];
  }
}

let a2 = new myArray("x", "y", "z");

myArray.prototype.पुश = function (value) {
  let index = this.length;
  this[index] = value;
  this.length++;
};

myArray.prototype.हटाओ = function () {
  let index = this.length - 1;

  delete this[index];

  this.length--;
};

a2.पुश("a");
a2.पुश("b");
a2.हटाओ();
a2.हटाओ();

console.log("a2:", Object.values(a2));
