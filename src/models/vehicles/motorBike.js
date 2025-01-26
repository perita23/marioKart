import vehicle from "./vehicle.js";
import { getRandomNumber } from "../../../utils/utils.js";

class motorBike extends vehicle {
  move() {
    let posToMove = getRandomNumber(this.MinVelocity, this.MaxVelocity);
    let traction = this.Traction;

    switch (traction) {
      case "high":
        posToMove = posToMove + 5;
        break;
      case "medium":
        posToMove = posToMove + 2;
        break;
    }

    return posToMove;
  }

  hasFallen() {
    return Math.random() < 0.3;
  }
}export default motorBike;
