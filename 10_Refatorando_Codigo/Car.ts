///<reference path="ICar2"/>

class Car implements ICar2{
    constructor(
        public name: string,
        public color: string,
        public power: number
    ){};
    getCar():void{
        console.log(this.name,this.color,this.power);
    };
}