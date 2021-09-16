class VehicleClass {
  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }
  constructor(public color: string) {}

  drive(): void {
    console.log('ruuuuunnnn');
  }
  protected honk(): void {
    console.log('beeeep');
  }
}

class CarClass extends VehicleClass {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private useEngine(): void {
    console.log('Using engine');
  }
  drive(): void {
    this.useEngine();
    this.honk();
    console.log('BRummm');
  }
}

const vehicleInstance = new VehicleClass('yellow');
vehicleInstance.drive();
// vehicleInstance.honk(); // protected

const carInstance = new CarClass(4, 'red');
carInstance.drive();
// carInstance.honk(); // protected
// carInstance.useEngine(); // private
