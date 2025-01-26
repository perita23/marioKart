class vehicle {
  #name;
  #traction;
  #minVelocity;
  #maxVelocity
  
  constructor(name, traction, minVelocity, maxVelocity) {
    this.#name = name;
    this.#traction = traction;
    this.#minVelocity = minVelocity;
    this.#maxVelocity = maxVelocity;
  }
  get Name() {
    return this.#name;
  }
  get Traction() {
    return this.#traction;
  }
  get MinVelocity() {
    return this.#minVelocity;
  }
  get MaxVelocity() {
    return this.#maxVelocity;
  }
  set Name(brand) {
    this.#name = brand;
  }
  set Traction(traction) {
    this.#traction = traction;
  }
  set MinVelocity(minVelocity) {
    this.#minVelocity = minVelocity;
  }
  set MaxVelocity(maxVelocity) {
    this.#maxVelocity = maxVelocity;
  }

  getStats() {
    let text = `
      Name: ${this.#name}
      Traction: ${this.#traction}
      Min Velocity: ${this.#minVelocity}
      Max Velocity: ${this.#maxVelocity}
    `;
    return text;
  }
}export default vehicle;
