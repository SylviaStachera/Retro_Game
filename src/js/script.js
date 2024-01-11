const body = document.querySelector("body");
const number = document.querySelector(".number");
const inputNumber = document.querySelector(".guess");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");
const message = document.querySelector(".message");

let score = 20;
let sum = 0;

const randomNumber = () => Math.trunc(Math.random() * 20 + 1);

const clear = function () {
	body.style.backgroundColor = "#222";
	message.innerHTML = "Start guessing...";
	number.innerHTML = "?";
	scoreEl.innerHTML = 20;
};

let numberToGuess = randomNumber();

btnCheck.addEventListener("click", function (e) {
	e.preventDefault();
	const checkNumber = +inputNumber.value;

	if (checkNumber === numberToGuess) {
		message.innerHTML = "🎉 Correct number!";
		sum += score;
		highscoreEl.innerHTML = sum;

		number.innerHTML = numberToGuess;
		inputNumber.value = "";
		body.style.backgroundColor = "#60b347";
	}

	if (checkNumber > numberToGuess && +checkNumber >= 1 && +checkNumber <= 20) {
		message.innerHTML = "📈 Too high!";
		score -= 1;
		scoreEl.innerHTML = score;
	}

	if (+score > 0 && checkNumber < numberToGuess && checkNumber !== 0 && +checkNumber >= 1 && +checkNumber <= 20) {
		message.innerHTML = "📉 Too low!";
		score -= 1;
		scoreEl.innerHTML = score;
	}

	if (checkNumber === 0 || +checkNumber < 1 || +checkNumber > 20) message.innerHTML = "⛔️ Choose a correct number!";

	if (+score === 0) message.innerHTML = "💥 You lost the game!";
});

btnAgain.addEventListener("click", function () {
	clear();
	numberToGuess = randomNumber();
});
