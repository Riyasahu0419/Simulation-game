function vehicle(brand , model ,speed , fuelType){
    this.brand = brand;
    this.model = model;
    this.speed = speed || 0;
    this.fuelType = fuelType || "Petrol";
}

vehicle.prototype.accelerate = function (speed)
{
    this.speed += speed;

    console.log(`${this.brand} ${this.model} is accelerating. Current speed: ${this.speed}`
    );
};

vehicle.prototype.brake = function (speed)
{
    this.speed -= speed;
    
    console.log(`${this.brand} ${this.model} is braking. Current speed: ${this.speed}`
    );
    
}
vehicle.prototype.refuel= function ()
{
    console.log(`${this.brand} ${this.model} is refueling`);
}



function car(brand, model, speed, fuelType, numberOfwheels){

    vehicle.call(this,brand,model,speed,fuelType,numberOfwheels)

        
        this.numberOfwheels = numberOfwheels || 4 ;
    
    }
    
    car.prototype = Object.create(vehicle.prototype) 

let myCar = new car("Mahindra","Thar",0,"Diesel",4)

console.log(myCar)


car.prototype.honk = function () {

  console.log(`${this.brand} ${this.model} ${this.speed} ${this.fuelType} is honking` );  
};

function Airplane(brand ,model , speed , fuelType , numberOfEngines , hasLandigGear  ){

    vehicle.call(this,brand ,model , speed , fuelType , numberOfEngines , hasLandigGear)

    this.numberOfEngines = numberOfEngines || 2 ;
    this.hasLandigGear = hasLandigGear || 2 ;
}

Airplane.prototype = Object.create(vehicle.prototype)
let myAirplane = new Airplane("Boeing co","A 318",0, " jet fuel",2,2)

console.log(myAirplane)

Airplane.prototype.takeOff = function(){

    console.log(`${this.brand} ${this.model} ${this.speed} ${this.fuelType} is takeing Off ` )


}






