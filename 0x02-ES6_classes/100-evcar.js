import Car from "./10-car.js";

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  set range(newRange) {
    this._range = newRange;
  }
  get range() {
    return this._range;
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}

export default EVCar;
