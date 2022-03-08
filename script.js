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

const messageClass = ".message";

const callFunText = function (property, text) {
  document.querySelector(property).textContent = text;
};

// * start addEventListener for btn check

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.warn(guess);

  if (scoreLeft <= 1) {
    // when player lost
    callFunText(messageClass, "You lost ❌"); //
    scoreLeft = 0;
  } else if (!guess) {
    // when player MT input
    callFunText(messageClass, "😐😑"); //
    scoreLeft--;
  } else if (loopGuess === guess) {
    // when player input 2 time a one number

    callFunText(messageClass, "Hello heeeey  😑");
    scoreLeft--;
  } else if (guess < 0) {
    // when player input number low 0 (x<0)

    loopGuess = guess;
    callFunText(messageClass, "Dude pls dont't"); //
    scoreLeft--;
  } else if (guess > 20) {
    // when player input number high 20 (x>20)

    loopGuess = guess;
    callFunText(messageClass, "pls inpute number between 1 and 20"); //
    scoreLeft--;
  } else if (guess === hideNumber) {
    // when player win
    document.querySelector(".check").style.pointerEvents = "none";
    document.querySelector(".check").style.visibility = "hidden";
    document.querySelector(".number").style.width = "24rem ";
    document.querySelector("body").style.backgroundColor = "#60b347";
    callFunText(messageClass, "🏆 Thats currect!!");
    callFunText(".number", hideNumber);
    if (scoreLeft > scoreHigh) {
      scoreHigh = scoreLeft;
      callFunText(".highscore", scoreHigh);
    }
  } else if (guess + 1 === hideNumber || guess - 1 === hideNumber) {
    // when player so close to guess a hideNumber

    loopGuess = guess;
    callFunText(messageClass, "🤏 you so close"); //
    scoreLeft--;
  } else if (guess > hideNumber) {
    // when player guess to low for hideNmber

    loopGuess = guess;
    callFunText(messageClass, "📈 too high "); //
    scoreLeft--;
  } else if (guess < hideNumber) {
    // when player guess to high for hideNmber

    loopGuess = guess;
    callFunText(messageClass, "📉 too low"); //
    scoreLeft--;
  }
  callFunText(".score", scoreLeft);
});

// finish addEventListener for btn check

// * start addEventListener for btn again

document.querySelector(".again").addEventListener("click", function () {
  scoreLeft = 10; // if you take dynamic i thingh creat a function beffore all and calling fucntion this here
  loopGuess = NaN;
  hideNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(hideNumber);
  callFunText(".number", "?");
  callFunText(messageClass, "Start guessing...");
  callFunText(".score", scoreLeft);
  callFunText(".score", scoreLeft);

  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.background = "#222";
  document.querySelector(".check").style.visibility = "visible";
  document.querySelector(".check").style.pointerEvents = "all";
});
//  finish addEventListener for btn again
