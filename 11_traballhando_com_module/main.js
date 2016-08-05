var App;
(function (App) {
    var Car = (function () {
        function Car() {
        }
        return Car;
    }());
    var mustang = new Car();
    console.log(mustang);
})(App || (App = {}));
