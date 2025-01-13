import { car } from "../models/vehicles/car";
import { bike } from "../models/vehicles/motorBike";
import { racetrack } from "../models/racetrack/racetrack";

let drivers = [];
let vehicles = [];

function addDriver() {
    let driverName
    let driverVehicle



    if (driverName != null && driverVehicle != null) {
        let newDriver = new driver(driverName, driverVehicle);
        drivers.push(newDriver);
    }
}