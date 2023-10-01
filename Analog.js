//Javascriptpro_
let secHand = document.querySelector('.container .sec-hand');
let minHand = document.querySelector('.container .min-hand');
let hourHand = document.querySelector('.container .hour-hand');
let deg = 6;
setInterval(() => {
   let day = new Date();
   let hh = day.getHours() * 30;
   let mm = day.getMinutes() * deg;
   let ss = day.getSeconds() * deg;
   hourHand.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
   minHand.style.transform = `rotateZ(${mm}deg)`;
   secHand.style.transform = `rotateZ(${ss}deg)`;
})
