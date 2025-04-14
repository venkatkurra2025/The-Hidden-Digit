const message = document.querySelector(".message");
const gameScore = document.querySelector(".game_score");
const bestScore = document.querySelector(".best_score");
const checkBtn = document.querySelector(".check_btn");
const inputNumber = document.querySelector(".number_input");
let hiddenNumber = Math.floor(Math.random() * 20);
const number = document.querySelector(".number");
const againBtn = document.querySelector(".again_btn");
const body = document.getElementsByTagName("body");
console.log(body);
let score = 10;
let best_score = 0;
checkBtn.addEventListener("click", function (e) {
  const userEnteredValue = Number(inputNumber.value);
  console.log(userEnteredValue);
  if (userEnteredValue > hiddenNumber) {
    if (score > 0) {
      message.innerHTML = "📈 too high";
      score = score - 1;
    } else {
      message.innerHTML = "🙁 You lost";
    }
  } else if (userEnteredValue < hiddenNumber) {
    if (score > 0) {
      message.innerHTML = "📉 too low";
      score = score - 1;
    } else {
      message.innerHTML = "🙁 You lost";
    }
  } else {
    message.innerHTML = "🏆 Won";
    number.innerHTML = hiddenNumber;
    document.body.style.background = "#862e9c";

    if (score > best_score) {
      best_score = score;
      bestScore.innerHTML = `🏅 All-Time Best : ${best_score}`;
    }
  }
  gameScore.innerHTML = `🎮 Game Score : ${score}`;
});

againBtn.addEventListener("click", function () {
  score = 10;
  hiddenNumber = Math.floor(Math.random() * 20);
  message.innerHTML = "🧠 Guess the number";
  number.innerHTML = "?";
  inputNumber.value = "";
  gameScore.innerHTML = `🎮 Game Score : ${score}`;
  document.body.style.background = "#000";
});