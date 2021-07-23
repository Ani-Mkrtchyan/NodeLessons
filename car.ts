abstract class Car {

  engine:string;
  power:number;
  door:number;
  color:string;


setEngine() : string {
 return this.engine = `power is`;

};

abstract price():number;

}


abstract class CarDecorator extends Car{
   decoratedCar: Car;
   abstract setEngine(): string;
}


class ModeHybrid extends Car {
 
engine = "Hybrid";
 

 price() : number {
   return 10200;
 }
 
}

class ModelOilBased extends Car {

 engine = "Oil based";

 price() : number {
   return 0;
 }
}
class BMW extends CarDecorator {
 constructor(car: Car) {
     super();
     this.decoratedCar = car;
     
 }

    setEngine() : string{
    return this.decoratedCar.setEngine();
 }

    price() : number {
    return this.decoratedCar.price();
 }

}

let bmw = new ModeHybrid();
bmw = new BMW(bmw);
bmw.color = "green";
bmw.power = 500;

console.log(`BMW with ${bmw.color} decoreted and price ${bmw.price()}$, ${bmw.setEngine() + " " + bmw.power}`);







