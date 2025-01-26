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

/**
 * @type {racetrack}
 */
let racetracks = null;

/**
 * @type {driver[]} participants
 */
let participants = [];
function generateVehicles() {
  const vehicleTypes = ["car", "motorBike"];
  const models = ["Model A", "Model B", "Model C"];
  const minVelocities = [4, 6, 8];
  const maxVelocities = [10, 22, 12];
  const tractions = ["low", "medium", "high"];

  for (let i = 0; i < 3; i++) {
    let type = vehicleTypes[Math.floor(Math.random() * vehicleTypes.length)];
    let model = models[i];
    let minVel = minVelocities[i];
    let maxVel = maxVelocities[i];
    let traction = tractions[i];

    let newVehicle;

    if (type === "car") {
      newVehicle = new car(model, traction, minVel, maxVel);
    } else {
      newVehicle = new motorBike(model, traction, minVel, maxVel);
    }

    vehicles.push(newVehicle);
  }
}

function generateDrivers() {
  const driverNames = ["Driver A", "Driver B", "Driver C"];
  vehicles.forEach((vehicle) => {
    let driverName =
      driverNames[Math.floor(Math.random() * driverNames.length)];
    let newDriver = new driver(driverName, vehicle);
    drivers.push(newDriver);
  });
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

function addDriver() {
  if (!validateForms(["driver-name", "vehicle-select"])) {
    console.log("error");
  } else {
    let name = document.getElementById("driver-name").value;
    let vehicleName = document.getElementById("vehicle-select").value;
    let vehicle = vehicles.find((vehicle) => vehicle.Name === vehicleName);
    let newDriver = new driver(name, vehicle);
    drivers.push(newDriver);
    console.log(drivers);
  }
}

function addRacetrack() {
  if (
    !validateForms(["racetrack-name", "racetrack-length", "weather-select"])
  ) {
    throw new Error("Error adding racetrack");
  } else {
    let name = document.getElementById("racetrack-name").value;
    let length = document.getElementById("racetrack-length").value;
    let weather = document.getElementById("weather-select").value;
    let newRacetrack = new racetrack(name, length, weather, participants);
    racetracks = newRacetrack;
    console.log(racetracks);
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

function datalistIntegration() {
  let datalist = document.getElementById("model-list");
  if (vehicles.length !== 0) {
    datalist.innerHTML = "";
    console.log(vehicles);
    vehicles.forEach((vehicle) => {
      let htmlOptionElement = document.createElement("option");
      htmlOptionElement.setAttribute("value", vehicle.Name);
      datalist.appendChild(htmlOptionElement);
    });
  }
}

function addParticipant() {
  if (!validateForms(["add-participant"])) {
    throw new Error("Error adding participant");
  } else {
    let driverName = document.getElementById("add-participant").value;
    let driver = drivers.find((driver) => driver.Name === driverName);
    participants.push(driver);

    let ul = document.getElementById("participants-list");
    let li = document.createElement("li");
    li.setAttribute("id", driver.Name);
    li.innerHTML = driver.Name;
    ul.appendChild(li);
  }
}

function removeParticipant() {
  if (!validateForms(["remove-participant"])) {
    throw new Error("Error removing participant");
  } else {
    let driverName = document.getElementById("remove-participant").value;
    let driver = drivers.find((driver) => driver.Name === driverName);
    let index = participants.indexOf(driver);
    participants.splice(index, 1);
    let ul = document.getElementById("participants-list");
    let li = document.getElementById(driver.Name);
    if (li) {
      ul.removeChild(li);
    }
  }
}

function addParticipantSelectIntegration() {
  console.log("adding participants");
  let select = document.getElementById("add-participant");
  if (drivers.length !== 0) {
    select.innerHTML = "";
    console.log(drivers);
    drivers.forEach((driver) => {
      let htmlOptionElement = document.createElement("option");
      htmlOptionElement.setAttribute("data-value", driver.Name);
      htmlOptionElement.innerHTML = driver.Name;
      select.appendChild(htmlOptionElement);
    });
  }
}

function rmParticipantSelectIntegration() {
  console.log("removing participants");
  let select = document.getElementById("remove-participant");
  if (participants.length !== 0) {
    select.innerHTML = "";
    console.log(participants);
    participants.forEach((participant) => {
      let htmlOptionElement = document.createElement("option");
      htmlOptionElement.setAttribute("data-value", participant.Name);
      htmlOptionElement.innerHTML = participant.Name;
      select.appendChild(htmlOptionElement);
    });
  }
}
/**
 * @type {participant}
 */
function startRace() {
  if (racetracks === null) {
    throw new Error("No racetrack selected");
  }
  if (participants.length === 0) {
    throw new Error("No participants added");
  }

  let rails = document.getElementById("rails");
  rails.innerHTML = "";
  let railsHeight = 80 / participants.length;
  console.log(participants);

  racetracks.Participants.forEach((participant) => {
    let rail = document.createElement("div");
    let container = document.createElement("div");
    let vehicle = document.createElement("img");
    let participantName = document.createElement("p");
    participantName.innerHTML = participant.Name;
    participantName.className = "text-center";
    container.className = "d-flex flex-column justify-content-center";
    container.style.width = "fit-content";
    container.style.transition = "all 1.5s";
    container.id = participant.Name + "vehicle";
    vehicle.id = participant.Name + "img";
    vehicle.src =
      participant.Vehicle instanceof car
        ? "./../../assest/images/car1-removebg-preview.png"
        : "./../../assest/images/motorbike-removebg-preview.png";
    vehicle.style.width = railsHeight - 5 + "vh";
    rail.style.height = railsHeight + "vh";
    rail.className = "w-100 d-flex flex-column justify-content-center";
    container.append(participantName);
    container.append(vehicle);
    rail.append(container);
    rails.append(rail);
  });
  intervalMove();
}

function intervalMove() {
  let podium = [];
  racetracks.Participants.forEach((participant) => {
    let container = document.getElementById(participant.Name + "vehicle");
    let currentPos = 0;
    let interval = setInterval(() => {
      if (
        participant.Vehicle instanceof motorBike &&
        participant.Vehicle.hasFallen()
      ) {
        let img = document.getElementById(participant.Name + "img");
        img.src = "../../assest/images/humo-removebg-preview.png";
      } else {
        if (participant.Vehicle instanceof motorBike) {
          let img = document.getElementById(participant.Name + "img");
          img.src = "../../assest/images/motorbike-removebg-preview.png";
        }
        currentPos += participant.Vehicle.move(racetracks.Weather);
        container.style.marginLeft =
          (currentPos / racetracks.Length) * 75 + "%";
        console.log(currentPos + "to  " + racetracks.Length);
      }

      if (currentPos >= racetracks.Length) {
        clearInterval(interval);
        console.log(`${participant.Name} has finished the race!`);
        podium.push(participant);
      if (podium.length === racetracks.Participants.length) {
        let podiumMessage = "Podium:\n";
        podium.forEach((participant, index) => {
          participant.History = racetracks.Name + "Pos -> "+index+1
          podiumMessage += `${index + 1}. ${participant.Name}\n`;
        });
        alert(podiumMessage);
      }
      }
    }, 1000);
  });
}

function getVehicleStats() {
  let selectedVehicle = document.getElementById("model").value;
  let vehicle = vehicles.find((v) => v.Name === selectedVehicle);
  if (vehicle) {
    console.log(vehicle);
    let textarea = document.getElementById("stats");
    textarea.innerText = vehicle.getStats();
  } else {
    throw Exception;
  }
}

function getDriverStats(){
  let selectedDriver = document.getElementById("driver-name").value;
  let driver = drivers.find((d) => d.Name === selectedDriver)
  if( driver){
    let textarea = document.getElementById("stats")
    textarea.innerHTML = driver.getDriverStats();
  }else{
    throw Exception
  }
}
export {
  addDriver,
  addVehicle,
  selectIntegration,
  datalistIntegration,
  generateVehicles,
  generateDrivers,
  addRacetrack,
  addParticipant,
  removeParticipant,
  addParticipantSelectIntegration,
  rmParticipantSelectIntegration,
  startRace,
  getVehicleStats,
  getDriverStats,
};
