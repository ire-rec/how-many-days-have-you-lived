'use script'

// GLOBAL VAR
const age = document.querySelector('.js_age');
const discoverBtn = document.querySelector('.js_discover');
const messageUser = document.querySelector('.js_message');
const birthdate = document.querySelector('.js_birthDate');

//------------- FUNCTIONS------------------//
const today = new Date();
console.log(today);
const todayInTime = (today.getTime()); //milliseconds from 1-1-70 until today

//BUTTON
discoverBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    const birthdateInTime = birthdate.valueAsNumber;//milliseconds 
    const hoursYouLived = ((todayInTime - birthdateInTime)/1000)/3600;
    const integerHours = Math.trunc(hoursYouLived)
    messageUser.innerHTML= (`hi, you have lived for ${integerHours} hours`); //hours from 1-1-70 until input date
    });
    // today minus input date