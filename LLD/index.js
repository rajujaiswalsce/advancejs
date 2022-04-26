

//0.Vehicles
//1.Parking lot
//2.Parking Floors
//3.Parking Slot
//4.Ticket

class Vehicles{
   constructor(type,regNumber,color){
       this._type = type;
       this._regNumber = regNumber;
       this._color = color;
   }


   get type(){
       return this._type;
   }
   set type(value){
       this._type = value;
   }

}

//car ,bike,truck

class Car extends Vehicles{
    constructor(regNumber,color){
        super("Car",regNumber,color);

    }
}

//bike and truck

class Bike extends Car{
    constructor(regNumber,color){
        super("Bike",regNumber,color)
    }
}

class Truck extends Bike{
    constructor(regNumber,color){
        super("Truck",regNumber,color)
    }
}


//getter and setter methodes

// let c1 = new Car("MH 12-12345","Black")

// console.log("c1:",c1.type)


// Individual Parking spot
class Slot{
    constructor(type,number){
        this.number = number;
        this.type = type;
        this._isBooked = false;
    }
    get isBooked(){
        return this._isBooked;
    }

    set isBooked(value){
        this._isBooked = value;
    }
}

// Individual Floors

class ParkingFloor{
    constructor(floornumber,maxFloor){
       this.floornumber = floornumber;
       this._parkingspots = []  // we need to push parking slopts

       for(let i=0;i<maxFloor;i++){
            if(i===0){
                //push bike slots
                this._parkingspots.push(new Slot("Truck",i)); 
            }else if(i===1){
                // push truck
                this._parkingspots.push(new Slot("Bike",i)); 
            }else{
                // push cars
                this._parkingspots.push(new Slot("Car",i)); 
            }
       }
    }
    get parkingsports(){
        return this._parkingspots;
    }
}

//check:
// let pf1 = new ParkingFloor(0,3)
// console.log("pf1:",pf1)

class ParkingLot{
    constructor(number){
        this._floors = []
        this._numberofFloor = number;
        for(let i=0;i<number;i++){

      this._floors[i] = new ParkingFloor(i,number)

        }
    }
    get numberofFloor(){
        return this._numberofFloor;
    }
    get floors(){
        return this._floors;
    }
    set floors(value){
        this._floors = value;
    }
   parkVehicle(vehicle){
       let slot = this.findSlot(vehicle.type) //car ,bike,truks
       if(!slot){
           console.log("No slots")
           return false;
       }
       this.bookslot(slot)
       let ticket = new Ticket(slot.floornumber,slot.slot.number)
       console.log("ticket:",ticket)
   }

    findSlot(type){
      
   // floors - 0 ->0,1,2
  // floors - 1 ->0,1,2

   for(let i=0;i<this._numberofFloor;i++){

    for(let slot of this._floors[i].parkingsports){
        // console.log("slot:",slot);
        
        if(slot.type === type && !slot._isBooked){
             console.log("slot:",slot);

            return {floornumber: i,slot:slot}
        }
    }
   }
   return false;
 }
 bookslot(slot){
     slot.slot.isBooked = true;
     console.log("slot is booked:",slot)

     return true
 }
}
class Ticket{
    constructor(floornumber,slotnumber){
        this.floornumber = floornumber;
        this.slotnumber = slotnumber;

        this.issueAt = new Date();
    }
}
let p1 = new ParkingLot(3)
let b1 = new Bike("DL 12 - 1234","Bike");

p1.parkVehicle(b1)



