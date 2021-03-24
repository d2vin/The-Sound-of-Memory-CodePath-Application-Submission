// var tone playing = false;

// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = randomSequence(1, 5);
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var incorrectGuesses = 0;
var audio = document.getElementById("demo");

function randomSequence(min, max) {
  var sequence = [];
  for (var i = 0; i < 8; i++) {
    sequence.push(Math.floor(Math.random() * max) + min);
  }
  return sequence;
}

function startGame() {
  //initialize game variables
  pattern = randomSequence(1, 5);
  progress = 0;
  gamePlaying = true;
  //swap the start and stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

//Sound Synthesis Functions

const freqMap = {
  1: 392,
  2: 659.25,
  3: 523.25,
  4: 261.63,
  5: 290
};
function playTone(btn, len) {
  if (btn == 5) {
    audio.currentTime = 0;
    audio.play();
    setTimeout(function() {
      audio.pause();
    }, len);
  } else {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
    setTimeout(function() {
      stopTone();
    }, len);
  }
}

function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone(btn) {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}
//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime - progress * 25; // the amount of time between clues, or the delay,
    // is decreased depending on the user's progress in a sequence
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      //If your guess was correct...
      if (progress == pattern.length - 1) {
        //And if you have progressed to the end of the pattern...
        //You WIN!
        winGame();
      } else {
        //If your guess of the sequence was correct,
        // and you have not progressed to the end of the pattern...
        progress++;
        playClueSequence();
        //Play the next sequence with the progressed pattern
      }
    } else {
      //If your guess was correct,
      //and you are not at the end of the sequence
      guessCounter++;
    }
  } else {
    //If you make 3 incorrect guesses,
    // the game is over, and you LOSE!
    incorrectGuesses++;
    playClueSequence();
    if (incorrectGuesses == 3) loseGame();
  }
}
