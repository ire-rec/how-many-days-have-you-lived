'use script'

// GLOBAL VAR
const age = document.querySelector('.js_age');
const discoverBtn = document.querySelector('.js_discover');
const messageUser = document.querySelector('.js_message');
const birthdate = document.querySelector('.js_birthDate');

//------------- FUNCTIONS------------------//
const today = new Date();
console.log(today);
const todayInTime = (today.getTime()); //milisegundos desde 1-1-70 hasta hoy
