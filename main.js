import {
  addVehicle,
  addDriver,
  selectIntegration,
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

window.changeToDriversForm = changeToDriversForm;
window.changeToCarsForm = changeToCarsForm;
window.changeToRaceForm = changeToRaceForm;

function selectOnClick() {
  selectIntegration();
}

window.selectOnClick = selectOnClick;

function addVehicleForm() {
  addVehicle();
}

window.addVehicleForm = addVehicleForm;
