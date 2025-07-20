let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;
const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const laps = document.getElementById("laps");

function updateDisplay() {
  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');
  display.textContent = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

startBtn.addEventListener('click', () => {
  if (!timer) {
    timer = setInterval(stopwatch, 1000);
    startBtn.classList.add('hidden');
    pauseBtn.classList.remove('hidden');
  }
});

pauseBtn.addEventListener('click', () => {
  clearInterval(timer);
  timer = null;
  pauseBtn.classList.add('hidden');
  startBtn.classList.remove('hidden');
});

resetBtn.addEventListener('click', () => {
  clearInterval(timer);
  timer = null;
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  laps.innerHTML = "";
  pauseBtn.classList.add('hidden');
  startBtn.classList.remove('hidden');
});

lapBtn.addEventListener('click', () => {
  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');
  const li = document.createElement("li");
  li.textContent = `Lap ${laps.children.length + 1}: ${h}:${m}:${s}`;
  laps.appendChild(li);
});

updateDisplay();
