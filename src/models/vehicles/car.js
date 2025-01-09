import vehicle from "./vehicle";

class car extends vehicle {
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
}
