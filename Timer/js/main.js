const daysSetup = document.getElementById("days-counter"); 
const hoursSetup = document.getElementById("hours-counter");
const minutesSetup = document.getElementById("minutes-counter");
const secondsSetup = document.getElementById("seconds-counter");

const endGoal = '1 Jan 2022';

function countDownTimer() {
    

    const newYearDate = new Date(endGoal);
    const currentDate = new Date();

    const totalSeconds = ((newYearDate - currentDate) / 1000);
    
    const days = Math.floor(totalSeconds / 3600 / 24);   
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    
    daysSetup.innerHTML = days;
    hoursSetup.innerHTML = hours;
    minutesSetup.innerHTML = minutes;
    secondsSetup.innerHTML = seconds;
    
    
    
}

// Calling the function
countDownTimer();

// Per second
setInterval(countDownTimer, 1000);