import {
  addVehicle,
  addDriver,
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
} from "./src/controllers/raceController.js";

function changeToDriversForm() {
  fetch("./components/driverForm.html")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.getElementById("form-section").innerHTML = data;
      document
        .getElementById("imgTag")
        .setAttribute(
          "src",
          "./assest/images/dirverHelmet-removebg-preview.png"
        );
    })
    .catch((error) => {
      console.error(error);
    });
}
function changeToCarsForm() {
  fetch("./components/carsForm.html")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.getElementById("form-section").innerHTML = data;
      document
        .getElementById("imgTag")
        .setAttribute(
          "src",
          "./assest/images/bmw_coche_moto_apertura-removebg-preview.png"
        );
    })
    .catch((error) => {
      console.error(error);
    });
}
function changeToRaceForm() {
  fetch("./components/raceForm.html")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.getElementById("form-section").innerHTML = data;
      document
        .getElementById("imgTag")
        .setAttribute("src", "./assest/images/circuit-removebg-preview.png");
    })
    .catch((error) => {
      console.error(error);
    });
}
function changeToRaceMap() {
  try {
    startRace();
    openRaceModal();
  } catch (Exception) {
    openModal(Exception.message);
  }
}

window.changeToDriversForm = changeToDriversForm;
window.changeToCarsForm = changeToCarsForm;
window.changeToRaceForm = changeToRaceForm;
window.changeToRaceMap = changeToRaceMap;

function selectOnClick() {
  selectIntegration();
}

function datalistOnClick() {
  datalistIntegration();
}

function getParticipants() {
  addParticipantSelectIntegration();
}

function getCurrentParticipants() {
  rmParticipantSelectIntegration();
}

function showVehicleStats() {
  try {
    getVehicleStats();
  } catch (Exception) {
    openModal("Vehicle not found!")
  }
}

function showDriverStats(){
  try{
    getDriverStats();
  }catch(Exception){
    openModal("Driver not found!")
  }
}

window.datalistOnClick = datalistOnClick;
window.selectOnClick = selectOnClick;
window.getParticipants = getParticipants;
window.getCurrentParticipants = getCurrentParticipants;
window.showVehicleStats = showVehicleStats;
window.showDriverStats = showDriverStats,

function addVehicleForm() {
  try {
    addVehicle();
    openModal("Vehicle added successfully");
  } catch (error) {
    openModal("Error adding vehicle");
  }
}

function addDriverForm() {
  try {
    addDriver();
    openModal("Driver added successfully");
  } catch (error) {
    openModal("Error adding driver");
  }
}

function addRacetrackForm() {
  try {
    addRacetrack();
    openModal("Racetrack added successfully");
  } catch (error) {
    console.log(error);
    openModal("Error adding racetrack");
  }
}

function addParticipantForm() {
  try {
    addParticipant();
    openModal("Participant added successfully");
  } catch (error) {
    openModal("Error adding participant");
  }
}

function removeParticipantForm() {
  try {
    removeParticipant();
    openModal("Participant removed successfully");
  } catch (error) {
    openModal("Error removing participant");
  }
}
window.addRacetrackForm = addRacetrackForm;
window.addDriverForm = addDriverForm;
window.addVehicleForm = addVehicle;

window.addParticipantForm = addParticipantForm;
window.removeParticipantForm = removeParticipantForm;

function openModal(info) {
  // Get the modal
  var modal = document.getElementById("myModal");
  var modalText = document.getElementById("text");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  modalText.innerHTML = info;
  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function openRaceModal() {
  // Get the modal
  var modal = document.getElementById("raceModal");
  var modalContent = document.getElementById("modalContent");
  var span = document.getElementById("close");

  modal.style.display = "block";

  span.onclick = function () {
    modal.style.display = "none";
  };
}
/**
 * Generate the vehicles
 */


document.addEventListener(onload, generateVehicles());
document.addEventListener(onload, generateDrivers());
document.addEventListener(onload, changeToDriversForm());
