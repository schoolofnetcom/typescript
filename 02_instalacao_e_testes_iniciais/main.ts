function getHello(name:string){
    return 'Hello ' + name;
}

//var name = 45;
var name = "Guilherme";

document.body.innerHTML = getHello(name);

interface iCar{
    brand:string;
    name:string;
    power:number;
}

class Car{
    brand:string;
    name:string;
    //age:number;
    power:number;
}

var getCar = function(car:iCar){
    console.log(car.brand,car.name,car.power);
};

var Camaro = new Car();
Camaro.brand = "Chevrolet";
//Camaro.age = 2016;
Camaro.name = "Camaro";
Camaro.power = 45;

getCar(Camaro);