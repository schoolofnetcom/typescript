var ColorModule;
(function (ColorModule) {
    var Color = (function () {
        function Color() {
        }
        Color.prototype.getColor = function () {
            return this.code;
        };
        return Color;
    }());
    ColorModule.Color = Color;
})(ColorModule || (ColorModule = {}));
///<reference path="Color.ts"/>
var ColorModule;
(function (ColorModule) {
    var red = new ColorModule.Color();
    red.name = "Red";
    red.code = "#FF0000";
    console.log(red.getColor());
})(ColorModule || (ColorModule = {}));
var blue = new ColorModule.Color();
blue.name = "Blue";
blue.code = "blue";
console.log(blue);
