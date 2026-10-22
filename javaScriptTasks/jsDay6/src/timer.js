let resetBtn = document.getElementById("resetBtn");
let stopBtn = document.getElementById("stopBtn");
let startBtn = document.getElementById("startBtn");
let timerField  = document.getElementById("timer");
let hrField = document.getElementById("hour");
let mField = document.getElementById("minute");
let secField = document.getElementById("secound");
let millisecField = document.getElementById("millisecound");
let millisec = 0;
let hr = 0;let m = 0; let sec = 0; let interval1;
let secincBtn = document.getElementById("secIncBtn");

secincBtn.addEventListener("click",()=>{
sec += 10
});


function startTimer(){
   interval1 = setInterval(() => {
    millisec += 1;
    millisecField.innerHTML = millisec;
    if(millisec === 100 || millisec >100){
      sec += 1;
      secField.innerHTML = sec;
      millisecField.innerHTML = "0";
      millisec = 0;
    }
    if(sec === 60 || sec > 60){
      m += 1;
      sec = 0;
      millisec = 0;
      millisecField.innerHTML = "0";
      secField.innerHTML = "0";
      mField.innerHTML = m;
    }
    if(m === 60 || m>60){
      hr +=1;
      m = 0;``
      sec = 0;
      millisec = 0;
      millisecField.innerHTML = "0";
      secField.innerHTML = "0";
      mField.innerHTML = "0";
      hrField.innerHTML = hr;
    }

  }, 10);
}


startBtn.addEventListener("click",()=>{

startTimer();
});

stopBtn.addEventListener("click",()=>{
clearInterval(interval1);
});

resetBtn.addEventListener("click",()=>{
  clearInterval(interval1);
millisec = 0;
sec = 0;
m = 0;
hr = 0;
millisecField.innerHTML = 0;
secField.innerHTML = 0;
mField.innerHTML = 0;
hrField.innerHTML = 0;
});
