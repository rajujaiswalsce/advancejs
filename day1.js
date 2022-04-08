// //what is variable

// //0. - it shows information
// //1. - datatypes ( primitive and non-primitive )

// // var arr = [1, 2, 3];

// // arr[0] = "4";

// // console.log("arr:", arr);

// //arr vs arr[0]

// //1. arr - whole array
// //2. just showing an element

// //array values can be changed (mutable)
// //string values cannot be changed ( immutable )

// //
// //big information - arrays, objects
// //small information - number, string, boolean

// //how banks store wealth?

// //cash -> yes
// //gold -> yes
// //real estate -> documents -> yes

// //Javascript

// //string -> yes
// //number -> yes
// //objects, arrays ->

// //two similar objects

// //create two copies
// //you create only one and you expose its location

// //no storage, it points like a wire

// //primitive - it directly points to value -> by value
// //non-primitve - it points to adress( location ) -> by reference

// var arr = [1, 2, 3, 4];

// //what arr is pointing - address.

// var arr2 = arr;

// arr2[0] = 4;

// //have we touched arr

// console.log("arr:", arr);

// //becuase they belong to same room ( address )

// //room of arr2 and arr is same

// //pablo
// //pablo jip
// //pablo airtel

// var admin = {
//   name: "chandu",
// };

// Object.freeze(admin);

// admin.name = "nandu";

// //make admin immutable ( not changable)

// console.log("admin:", admin);

function test() {
  var i = 10;
}

console.log(i);

test();