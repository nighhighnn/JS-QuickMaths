//window.addEventListener('load', init);


const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const startButton = document.querySelector("#start");


const words = [
  '05+7*5',
  '28/2+14',
  '(16%5)%2',
  '(100%10)*5',
  '5-4/2+03',
  '(9-15)*(-3)',
  '19+04-7',
  '6%2+10/2',
  '[(11+9)/2]%3',
  '100-39%3',
  '50+9%100*2'
];

const words_ans = [
  '40',
  '28',
  '1',
  '0',
  '6',
  '12',
  '16',
  '5',
  '1',
  '100',
  '68'
];

let score = 0;
let isPlaying;
let time = 5;


function init() {
  showWord(words);
  wordInput.addEventListener('input', startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time =  6;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

function matchWords() {
  if (wordInput.value === words_ans[randIndex]) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

let randIndex;

function showWord(words) {
  randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}

function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}

startButton.addEventListener("click", function(){
	init();
})
