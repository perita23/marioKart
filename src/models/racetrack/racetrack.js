class racetrack {
  #name;
  #length;
  #weather;
  #participants
  
  constructor(name, length, weather, participants) {
    this.#name = name;
    this.#length = length;
    this.#weather = weather;
    this.#participants = participants;
  }
  get Name() {
    return this.#name;
  }
  get Length() {
    return this.#length;
  }
  get Weather() {
    return this.#weather;
  }
  get Participants() {
    return this.#participants;
  }
  set Name(name) {
    this.#name = name;
  }
  set Length(length) {
    this.#length = length;
  }
  set Weather(weather) {
    this.#weather = weather;
  }
  set Participants(participants) {
    this.#participants = participants;
  }
}
export default racetrack;
