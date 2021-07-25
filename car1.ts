 class Car {

public setEngine(power:number) : number {
        
        return power;

}

public setDoor(door:number) : number {
        
        return door;

}

public setColor(color:string) : string {
    
        return color;

}

public price( cost :number) : number {
 
        return cost;
}

}

  class CarDecorator extends Car {
     protected car: Car;

    constructor(car: Car) {
      super();
        this.car = car;
    }

   public setEngine(power:number) : number {
       
        return this.car.setEngine(power);
    }

    public setDoor(door:number) : number {
      
        return this.car.setDoor(door);
    }

    public setColor(color:string) : string {
       
        return this.car.setColor(color);
    }
    
    public price(cost:number) : number {
        
        return this.car.price(cost);
    }
} 

class BMW extends CarDecorator {
  
    public price(cost:number) : number {
        
        return cost + 10000;
    }

    public setColor(color:string) : string {
        
        return color;
    }
}

class DoorNumber extends CarDecorator {

  public setDoor(door:number) : number {
        
        return door;
  }
}


class ModelHybrid extends Car {

public setEngine(power:number): number {

        return power;
    }
 
}

let   newCar  = new Car();
let bmw = new BMW(newCar);
console.log(` Car has a  ${bmw.setEngine(500)} power`);
console.log(` Price is ${bmw.price(200)}$`);
console.log(` Color is ${bmw.setColor ("black")}`);
console.log(`This model has ${bmw.setDoor(4)} doors`);






