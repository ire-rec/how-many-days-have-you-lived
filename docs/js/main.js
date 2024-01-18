"use strict";

// Global var
const discoverBtn = document.querySelector(".js_discover");
const messageUser = document.querySelector(".js_message");
const dateOfBirth = document.querySelector(".js_dateOfBirth");
const form = document.querySelector(".js_form");
const resetBtn = document.querySelector(".js_reset");

// Special var
const today = new Date();
const todayInTime = today.getTime(); //milliseconds from 1-1-70 until today

//Functions
const numbers = () => {
  const birthdateInTime = dateOfBirth.valueAsNumber;
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
  }
};

const reset = () => {
  form.reset();
  messageUser.innerHTML = "";
  messageUser.classList.remove("msg_span");
};

//EVENTS
discoverBtn.addEventListener("click", (event) => {
  event.preventDefault();
  numbers();
});

resetBtn.addEventListener("click", (event) => {
  event.preventDefault();
  reset();
});

// total formula = today - input date //
