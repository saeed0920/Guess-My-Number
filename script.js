"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "You Anwser is Curect🎇";

// document.querySelector(".number").textContent = 19;
// document.querySelector(".score").textContent = 3;

// document.querySelector(".guess").value = 1;
// console.log(document.querySelector(".guess").value);

const hideNumber = Math.trunc(Math.random() * 20) + 1;
console.log(hideNumber);
let scoreLeft = Number(document.querySelector(".score").textContent);
const scoreHigh = document.querySelector(".highscore").textContent;
let loopGuess;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.warn(guess);

  if (scoreLeft <= 1) {
    document.querySelector(".message").textContent = "You lost ❌"; //
    scoreLeft = 0;
  } else if (!guess) {
    document.querySelector(".message").textContent = "😐😑"; //
    scoreLeft--;
  } else if (loopGuess === guess) {
    document.querySelector(".message").textContent = "Hello heeeey  😑💩🐒";
    scoreLeft--;
  } else if (guess < 0) {
    loopGuess = guess;
    document.querySelector(".message").textContent = "Dude pls dont't"; //
    scoreLeft--;
  } else if (guess > 20) {
    loopGuess = guess;
    document.querySelector(".message").textContent =
      "pls inpute number between 1 and 20"; //
    scoreLeft--;
  } else if (guess === hideNumber) {
    document.querySelector(".message").textContent = "🏆 Thats curect!!"; //
    document.querySelector(".number").textContent = hideNumber;
    if (scoreLeft > scoreHigh) {
      document.querySelector(".highscore").textContent = scoreLeft;
    }
  } else if (guess + 1 === hideNumber || guess - 1 === hideNumber) {
    loopGuess = guess;
    document.querySelector(".message").textContent = "🤏 you so close  "; //
    scoreLeft--;
  } else if (guess > hideNumber) {
    loopGuess = guess;
    document.querySelector(".message").textContent = "📈 too high "; //
    scoreLeft--;
  } else if (guess < hideNumber) {
    loopGuess = guess;
    document.querySelector(".message").textContent = "📉 too low "; //
    scoreLeft--;
  }
  document.querySelector(".score").textContent = scoreLeft;
});
