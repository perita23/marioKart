let btnDriver = document.getElementById("btn-dirver");
let btnCars = document.getElementById("btn-cars");
let btnRace = document.getElementById("btn-race");

function changeToDriversForm(var1) {
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
  fetch("./components/carsForm.html")
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
