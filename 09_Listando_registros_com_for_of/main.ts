var listCar = ["Camaro","Ferrari","Porsche"];

for(var i in listCar){
    console.log(i);
}

for(var car of listCar){
    console.log(car);
}

var colors = new Array(["red","blue","orange"]);

colors['title']= "Colors";

console.log(colors);

for(var i in colors){
    console.log(i);
}

for(var color of colors){
    console.log(color);
}