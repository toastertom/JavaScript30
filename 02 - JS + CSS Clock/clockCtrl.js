const secondHand = document.querySelector('.second-hand');

const minHand = document.querySelector('.min-hand');

const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  // Seconds hand controller
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  // console.log(seconds);

  // minute hand controller
  const minutes = now.getMinutes();
  const minDegrees = ((minutes / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  // console.log(minutes);

  //Hour hand controller
  const hour = now.getHours();
  const hourDegrees = ((hour / 24) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  // console.log(hour);
};

setInterval(setDate, 1000);
