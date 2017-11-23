var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getDescription = function () {
        return this.description;
    };
    return Car;
}());
var ModelS = /** @class */ (function (_super) {
    __extends(ModelS, _super);
    function ModelS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Model S";
        return _this;
    }
    ModelS.prototype.cost = function () {
        return 73000;
    };
    return ModelS;
}(Car));
var ModelX = /** @class */ (function (_super) {
    __extends(ModelX, _super);
    function ModelX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Model X";
        return _this;
    }
    ModelX.prototype.cost = function () {
        return 77000;
    };
    return ModelX;
}(Car));
var CarOption = /** @class */ (function (_super) {
    __extends(CarOption, _super);
    function CarOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CarOption;
}(Car));
var EnhancedAutoPilot = /** @class */ (function (_super) {
    __extends(EnhancedAutoPilot, _super);
    function EnhancedAutoPilot(car) {
        var _this = _super.call(this) || this;
        _this.decoraterdCar = car;
        return _this;
    }
    EnhancedAutoPilot.prototype.getDescription = function () {
        return this.decoraterdCar.getDescription() + ', Enhanced AutoPilot';
    };
    EnhancedAutoPilot.prototype.cost = function () {
        return this.decoraterdCar.cost() + 5000;
    };
    return EnhancedAutoPilot;
}(CarOption));
var ReafacingSeats = /** @class */ (function (_super) {
    __extends(ReafacingSeats, _super);
    function ReafacingSeats(car) {
        var _this = _super.call(this) || this;
        _this.decoraterdCar = car;
        return _this;
    }
    ReafacingSeats.prototype.getDescription = function () {
        return this.decoraterdCar.getDescription() + ',Rear Facing seats';
    };
    ReafacingSeats.prototype.cost = function () {
        return this.decoraterdCar.cost() + 40000;
    };
    return ReafacingSeats;
}(CarOption));
var mytesla = new ModelS();
mytesla = new ReafacingSeats(mytesla);
console.log(mytesla.cost);
console.log(mytesla.getDescription);
