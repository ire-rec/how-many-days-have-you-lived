"use script";

// GLOBAL VAR
const discoverBtn = document.querySelector(".js_discover");
const messageUser = document.querySelector(".js_message");
const dateOfBirth = document.querySelector(".js_dateOfBirth");
const form = document.querySelector(".js_form");
const resetBtn = document.querySelector(".js_reset");

//------------- FUNCTIONS------------------//
const today = new Date();
const todayInTime = today.getTime(); //milliseconds from 1-1-70 until today

//BUTTONS
discoverBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const birthdateInTime = dateOfBirth.valueAsNumber; //milliseconds
  const hoursYouLived = (todayInTime - birthdateInTime) / 1000 / 3600 / 24;
  const integerHours = Math.trunc(hoursYouLived);

  const numberFormat = new Intl.NumberFormat("es-ES");
  const totalHours = numberFormat.format(integerHours);

  if (integerHours) {
    messageUser.innerHTML = `hi, you have lived for ${totalHours} days`;
    messageUser.classList.add("msg_span");
  } else {
    messageUser.innerHTML = "You must indicate your date of birth";
    messageUser.classList.add("msg_span");
  } //hours from 1-1-70 until input date
});

// total formula = today - input date

function reset() {
  form.reset();
  messageUser.innerHTML = "";
  messageUser.classList.remove("msg_span");
}

resetBtn.addEventListener("click", (event) => {
  event.preventDefault();
  reset();
});
