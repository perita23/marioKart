import car from "../models/vehicles/car.js";
import motorBike from "../models/vehicles/motorBike.js";
import racetrack from "../models/racetrack/racetrack.js";
import vehicle from "../models/vehicles/vehicle.js";
import driver from "../models/drivers/driver.js";
import { validateForms } from "../../utils/utils.js";


/**
 * @type {driver[]}
 */
let drivers = [];

/**
 * @type {vehicle[]}
 */
let vehicles = [];

function addDriver() {
  let driverName;
  let driverVehicle;

  if (driverName != null && driverVehicle != null) {
    let newDriver = new driver(driverName, driverVehicle);
    drivers.push(newDriver);
  }
}

function addVehicle() {
  if (
    !validateForms([
      "model",
      "minVel",
      "maxVel",
      "traction-select",
      "type-select",
    ])
  ) {
    console.log("error");
  } else {
    let model = document.getElementById("model").value;
    let minVel = document.getElementById("minVel").value;
    let maxVel = document.getElementById("maxVel").value;
    let traction = document.getElementById("traction-select").value;
    let type = document.getElementById("type-select").value;
    let newVehicle;
    if (type === "car") {
      newVehicle = new car(model, minVel, maxVel, traction);
    } else {
      newVehicle = new motorBike(model, minVel, maxVel, traction);
    }
    vehicles.push(newVehicle);
  }
}

function selectIntegration() {
  let select = document.getElementById("vehicle-select");
  if (vehicles.length !== 0) {
    select.innerHTML = "";
    console.log(vehicles);
    vehicles.forEach((vehicle) => {
      let htmlOptionElement = document.createElement("option");
      htmlOptionElement.setAttribute("data-value", vehicle.Name);
      htmlOptionElement.innerHTML = vehicle.Name;
      select.appendChild(htmlOptionElement);
    });
  }
}

export { addDriver, addVehicle, selectIntegration };
