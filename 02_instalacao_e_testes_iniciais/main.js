function getHello(name) {
    return 'Hello ' + name;
}
//var name = 45;
var name = "Guilherme";
document.body.innerHTML = getHello(name);
var Car = (function () {
    function Car() {
    }
    return Car;
}());
var getCar = function (car) {
    console.log(car.brand, car.name, car.power);
};
var Camaro = new Car();
Camaro.brand = "Chevrolet";
//Camaro.age = 2016;
Camaro.name = "Camaro";
Camaro.power = 45;
getCar(Camaro);
