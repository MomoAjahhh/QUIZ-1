const greenPart = document.querySelector('.green');
const redPart = document.querySelector('.red');
const startBtn = document.querySelector('.mulai');
const stopBtn = document.querySelector('.berhenti');
const resetBtn = document.querySelector('.reset');

let startTime;
let elapsedTime = 0;
let interval = null;

function pad(num, digits) {
    return num.toString().padStart(digits, '0');
}

function updateDisplay () {
 const totalSeconds = elapsedTime / 1000;
 const seconds = Math.floor(totalSeconds);
 const milliseconds = Math.floor((elapsedTime % 100));

 greenPart.textContent = pad(seconds, 3);
 redPart.textContent = pad(milliseconds, 2);

}
function start() {
    if (interval) return;
    
    startTime = Date.now() - elapsedTime;
    interval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
    }, 10)
}

function stop(){
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    elapsedTime = 0;
    updateDisplay();

}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

updateDisplay();


