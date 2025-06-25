
let startTime, updatedTime, difference, tInterval;
let running = false;
let display = document.getElementById("display");
let lapsContainer = document.getElementById("laps");

function start() {
  if (!running) {
    startTime = new Date().getTime() - (difference || 0);
    tInterval = setInterval(updateTime, 1000);
    running = true;
  }
}

function pause() {
  if (running) {
    clearInterval(tInterval);
    difference = new Date().getTime() - startTime;
    running = false;
  }
}

function reset() {
  clearInterval(tInterval);
  display.innerHTML = "00:00:00";
  difference = 0;
  running = false;
  lapsContainer.innerHTML = "";
}

function lap() {
  if (running) {
    const li = document.createElement("li");
    li.textContent = display.textContent;
    lapsContainer.appendChild(li);
  }
}

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  let hours = Math.floor(difference / 3600000);
  let minutes = Math.floor((difference % 3600000) / 60000);
  let seconds = Math.floor((difference % 60000) / 1000);

  display.textContent =
    (hours < 10 ? "0" + hours : hours) + ":" +
    (minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds < 10 ? "0" + seconds : seconds);
}
