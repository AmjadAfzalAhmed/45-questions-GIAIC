var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function makeCar(manufact, model) {
    var arbitNum = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        arbitNum[_i - 2] = arguments[_i];
    }
    var car = __assign({ manufact: manufact, model: model }, Object.fromEntries(arbitNum)); //here I have used Objec.fromEntries() method that will take keys and values from given array
    return car;
}
;
var myCar = makeCar('Suzuki', 'Swift', ['color', 'white'], ['year', 2024]);
console.log(myCar);
