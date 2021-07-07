const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const time = document.querySelector('.time');



function setDate() {
    const now = new Date();
    const secounds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();
    const secondsDegrees = ((secounds / 60) * 360) + 90;
    const minsDegrees = ((mins / 60) * 360) + 90;
    const hoursDegrees = ((hours / 12) * 360) + 90; 
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    time.innerHTML = `${hours}:${mins}`;
    
}

setInterval(setDate, 1000);