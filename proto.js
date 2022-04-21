
// console.log("hello")
class Stack {
    constructor (){
        this.items = [];
        this.count = -1;

    }
    // add element to top;

    push(element){
        this.count = this.count + 1
        this.items[this.count] = element;
       // console.log(element)
       return this.count;
    }
  pop (){
      if(this.count == -1)
          return undefined;
      
      
          let deleteItem = this.items[this.count];
          this.count = this.count-1;
       //   console.log(deleteItem)
          return deleteItem;
      
  }
   
}

 
// const stack = new Stack ();
// stack.push(200);
// stack.push(300);
// console.log(stack.items[stack.count])
// stack.pop();
// stack.pop()





function runProgram(input) {
    var input = input.trim().split("\n");
   // console.log(input);

   let cases = +input[0];
 //  console.log(cases);
   let line = 1;
   const stack = new Stack ();
   for(let i = 0; i < cases; i++){
       let arr = input[line++].trim().split(" ").map(Number)
    let operation  = arr;
 //  console.log(operation)
      
       if(operation[0] == 1){
     
           stack.push(operation[1]);
         // console.log(stack)
       }
      
      else if(operation[0] == 2){
          stack.pop();
        //  console.log(stack.count)
      }
     else if(operation[0] == 3){
         if(stack.count < 0){
            console.log("Empty!");
         }
         else{
            console.log(stack.items[stack.count])
         }
     }
}
}


 if (process.env.USERNAME === "Shaktimaan") {
 
 
 runProgram (`1,2,3,4
 `);


 } 
 else {
 process.stdin.resume();
 process.stdin.setEncoding("ascii");
 let read = "";
 process.stdin.on("data", function (input) {
 read += input;
 });
 process.stdin.on("end", function () {
 read = read.replace(/\n$/, "");
 read = read.replace(/\n$/, "");
 runProgram(read);
 });
 process.on("SIGINT", function () {
 read = read.replace(/\n$/, "");
 runProgram(read);
 process.exit(0);
 });
 }



 // 

 const arr = [1,2,3,4];
 let x = arr.peek;
 console.log(x);
 console.log(arr.length)
 console.log(arr)