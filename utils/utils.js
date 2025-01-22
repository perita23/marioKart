function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
export { getRandomNumber };


/**
 * Function to validate forms
 * @param {Array} fields 
 * @returns {Boolean}
 */
function validateForms(fields) {
  for (let i = 0; i < fields.length; i++) {
    let field = fields[i];
    let fieldValue = document.getElementById(field);
    console.log("Checking field: ", field, " with value: ", fieldValue.value);
    if (fieldValue.value === "") {
      console.log("Field: ", field, " is empty");
      return false;
    }
  }
  return true;
}
export { validateForms };
