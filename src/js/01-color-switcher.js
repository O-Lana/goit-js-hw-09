const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const selectBodyColor = document.querySelector('body');

const refs = {
    bodyColor: document.querySelector('body'),
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
}

refs.startBtn.addEventListener('click', start);
refs.stopBtn.addEventListener('click', stop);

let colorChange = null;

function start() {
  colorChange = setInterval(randomColor => {
    randomColor = getRandomHexColor();
    refs.bodyColor.style.backgroundColor = randomColor;
  }, 1000);
  refs.startBtn.setAttribute('disabled', true);
  refs.stopBtn.removeAttribute('disabled');
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function stop() {
  clearInterval(colorChange);
  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', true);
};
