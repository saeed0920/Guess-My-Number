"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "You Anwser is Curect🎇";

// document.querySelector(".number").textContent = 19;
// document.querySelector(".score").textContent = 3;

// document.querySelector(".guess").value = 1;
// console.log(document.querySelector(".guess").value);

let hideNumber = Math.trunc(Math.random() * 20) + 1; // hide number for guess player
console.log(hideNumber);
let scoreLeft = Number(document.querySelector(".score").textContent); // score left for how many guess for player
let scoreHigh = Number(document.querySelector(".highscore").textContent); // score hight for save high score in game
let loopGuess; // loopGuess for if player 2 time input a one number

// * start addEventListener for btn check

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.warn(guess);

  if (scoreLeft <= 1) {
    // when player lost
    document.querySelector(".message").textContent = "You lost ❌"; //
    scoreLeft = 0;
  } else if (!guess) {
    // when player MT input
    document.querySelector(".message").textContent = "😐😑"; //
    scoreLeft--;
  } else if (loopGuess === guess) {
    // when player input 2 time a one number

    document.querySelector(".message").textContent = "Hello heeeey  😑💩🐒";
    scoreLeft--;
  } else if (guess < 0) {
    // when player input number low 0 (x<0)

    loopGuess = guess;
    document.querySelector(".message").textContent = "Dude pls dont't"; //
    scoreLeft--;
  } else if (guess > 20) {
    // when player input number high 20 (x>20)

    loopGuess = guess;
    document.querySelector(".message").textContent =
      "pls inpute number between 1 and 20"; //
    scoreLeft--;
  } else if (guess === hideNumber) {
    // when player win
    document.querySelector(".check").style.pointerEvents = "none";
    document.querySelector(".check").style.visibility = "hidden";
    document.querySelector(".number").style.width = "24rem ";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".message").textContent = "🏆 Thats currect!!"; //
    document.querySelector(".number").textContent = hideNumber;
    if (scoreLeft > scoreHigh) {
      scoreHigh = scoreLeft;
      document.querySelector(".highscore").textContent = scoreHigh;
    }
  } else if (guess + 1 === hideNumber || guess - 1 === hideNumber) {
    // when player so close to guess a hideNumber

    loopGuess = guess;
    document.querySelector(".message").textContent = "🤏 you so close  "; //
    scoreLeft--;
  } else if (guess > hideNumber) {
    // when player guess to low for hideNmber

    loopGuess = guess;
    document.querySelector(".message").textContent = "📈 too high "; //
    scoreLeft--;
  } else if (guess < hideNumber) {
    // when player guess to high for hideNmber

    loopGuess = guess;
    document.querySelector(".message").textContent = "📉 too low "; //
    scoreLeft--;
  }

  document.querySelector(".score").textContent = scoreLeft;
});

// finish addEventListener for btn check

// * start addEventListener for btn again

document.querySelector(".again").addEventListener("click", function () {
  scoreLeft = 10; // if you take dynamic i thingh creat a function beffore all and calling fucntion this here
  hideNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(hideNumber);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = scoreLeft;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.background = "#222";
  document.querySelector(".check").style.visibility = "visible";
  document.querySelector(".check").style.pointerEvents = "all";
});
