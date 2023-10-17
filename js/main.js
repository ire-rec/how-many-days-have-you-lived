'use script'

// GLOBAL VAR
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
    const integerHours = Math.trunc(hoursYouLived);

    if (integerHours) {
        messageUser.innerHTML = (`hi, you have lived for ${integerHours} hours`)}
    else {
        messageUser.innerHTML = ('You must indicate your date of birth')} //hours from 1-1-70 until input date 
});
       

// total formula = today - input date
 
   