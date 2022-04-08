
// function NikeProduct(n, p) {
//   let obj = {};

//   obj.name = n;
//   obj.price = p;

//   return obj;
// }

// let p1 = NikeProduct("shoes", 200);
// console.log("p1:", p1);

// //constructor function

// //this, new

// function NikeProductCF(n, p) {
//   this.name = n;
//   this.price = p;
// }

// let p2 = new NikeProductCF("shoes", 5000);
// console.log("p2:", p2);

// //what does new do?
// //it returns the object

//create a form to accept values

// let arr = [];

// function Student(n, p, b) {
//   this.name = n;
//   (this.price = p), (this.brand = b);
// }

// function storeProducts(e) {
//   e.preventDefault();

//   let form = document.getElementById("products");

//   let name = form.name.value;

//   let price = form.price.value;

//   let brand = form.brand.value;

//   let p1 = new Product(name, price, brand);

//   arr.push(p1);
//   console.log("arr:", arr);
// }

let kitchen = {
    name: "kitchen",
    purpose: "cook",
  
    cookFood: function (order) {
      console.log(`serving ${order} in ${this.name}`);
    },
  };
  
  let living_room = {
    name: "living room",
    purpose: "watching tv",
  };
  
  let bedroom = {
    name: "bedroom",
    purpose: "sleep",
  };
  
  let x = kitchen.cookFood.bind(bedroom, "samosa");
  
  x();
  
  //
  
  // let thor = {
  //   superpower: "hammer",
  // };
  
  // let captain_a = {
  //   superpower: "shield",
  // };
  
  // function supersuperman() {
  //   console.log(`i have ${this.superpower}`);
  // }
  
  // supersuperman.call(thor);
  
  //kitchen.cookFood("maggie"); //this -> kitchen
  
  //?? //this -> living_room
  
  //we are trying to change the owner object
  
  //kitchen.cookFood.call(bedroom, "samosa");
  
  //.call(living_room)