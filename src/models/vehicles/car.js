import vehicle from "./vehicle";

class car extends vehicle {
  move(wheaterStatus) {
    let posToMove = getRandomNumber(this.MinVelocity, this.MaxVelocity);
    let traction = this.Traction;

    const modfiers = {
      low: { lluvioso: 4, humedo: 2, seco: 0 },
      medium: { lluvioso: 2, humedo: 2, seco: 2 },
      hight: { lluvioso: 0, humedo: 2, seco: 4 },
    };

    for (let key in modfiers[traction]) {
      if (key === wheaterStatus) {
        posToMove += modfiers[traction][key];
      }
    }

    return posToMove;
  }
}
