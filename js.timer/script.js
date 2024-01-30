let timerText = document.getElementById("timer");
let startBtn = document.getElementById("startbtn");
let lapBtn = document.getElementById("lapbtn");
let lapList = document.getElementById("laps");
let timerIsRunning = false;

let mSec = 0;
let sec = 0;
let minute = 0;
let hour = 0;

let elapsedTime = 0;
let startTime;
let firstTime = true;

function toggleTimer() {
  if (firstTime) {
    elapsedTime = 0;
    let hour = Math.floor(elapsedTime / (1000 * 60 * 60));
    let min = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let sec = Math.floor((elapsedTime / 1000) % 60);
    let msec = Math.floor(elapsedTime % 1000);

    timerText.textContent = hour + ":" + min + ":" + sec + ":" + msec;
    firstTime = false;
  }
  if (!timerIsRunning) {
    startTime = Date.now() - elapsedTime;
    startBtn.innerHTML = "Pause";
    lapBtn.textContent = "Lap";
    timerIsRunning = true;
    update();
  } else {
    startBtn.innerHTML = "Resume";
    lapBtn.textContent = "Reset";
    elapsedTime = Date.now() - startTime;
    timerIsRunning = false;
  }
}

let lapIndex = 1;
function lap() {
  if (!timerIsRunning) {
    //reset the whole timer
    elapsedTime = 0;
    let hour = Math.floor(elapsedTime / (1000 * 60 * 60));
    let min = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let sec = Math.floor((elapsedTime / 1000) % 60);
    let msec = Math.floor(elapsedTime % 1000);

    lapIndex = 1;

    timerText.textContent = hour + ":" + min + ":" + sec + ":" + msec;
    lapBtn.textContent = "Lap";
    startBtn.innerHTML = "Start";
    lapList.innerHTML = "";
    firstTime = true;
  } else {
    lapList.innerHTML =
      lapList.innerHTML + lapIndex + ". " + timerText.textContent + "<br>";
    lapIndex++;
  }
}

function update() {
  if (timerIsRunning) {
    elapsedTime = Date.now() - startTime;

    let hour = Math.floor(elapsedTime / (1000 * 60 * 60));
    let min = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let sec = Math.floor((elapsedTime / 1000) % 60);
    let msec = Math.floor(elapsedTime % 1000);

    timerText.textContent = hour + ":" + min + ":" + sec + ":" + msec;

    setInterval(() => {
      update();
    }, 10);
  }
}
