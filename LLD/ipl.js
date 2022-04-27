
//Multiple Floors for sitting;

class floors{
    constructor(firstfloor,secondfloor,thirdfloor){
        this.firstfloor = firstfloor;
        this.secondfloor = secondfloor;
        this.thirdfloor = thirdfloor;
    }

  get type(){
      return this.firstfloor;
  }
  set type(value){
      this.firstfloor = value
  }

}

// Csk , Rcb , Mi

class Csk extends floors{
    constructor(secondfloor,thirdfloor){
        super ("Csk",secondfloor,thirdfloor)
    }
}

class Rcb extends Csk{
    constructor(secondfloor,thirdfloor){
        
        super("Rcb",secondfloor,thirdfloor)
    }
}

class Mi extends Rcb{
    constructor(secondfloor,thirdfloor){
        
        super("Mi",secondfloor,thirdfloor)
    }
}
let c1 = new Csk("male","female")

console.log("c1:", c1)
