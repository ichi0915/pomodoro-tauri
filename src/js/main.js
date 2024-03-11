// const { invoke } = window.__TAURI__.core;

let date;
let timerDisplayEl;
let timerRunning = false;
let timeInterval;

window.addEventListener("DOMContentLoaded", () => {

	timerDisplayEl = document.querySelector('#timerDisplay');
	date = new Date("2024-01-01 " + timerDisplayEl.textContent);

	document.querySelector("#timerStart").addEventListener("click", (e) => {
		e.preventDefault();
		startTimer();
	});

	document.querySelector("#timerReset").addEventListener("click", (e) => {
		e.preventDefault();
		resetTimer();
	});

	document.querySelector("#decrease5").addEventListener("click", (e) => {
		e.preventDefault();
		decreaseTimer(5);
	});

	document.querySelector("#increase5").addEventListener("click", (e) => {
		e.preventDefault();
		increaseTimer(5);
	});

	document.querySelector("#decrease15").addEventListener("click", (e) => {
		e.preventDefault();
		decreaseTimer(15);
	});

	document.querySelector("#increase15").addEventListener("click", (e) => {
		e.preventDefault();
		increaseTimer(15);
	});

	document.querySelector("#decrease30").addEventListener("click", (e) => {
		e.preventDefault();
		decreaseTimer(30);
	});

	document.querySelector("#increase30").addEventListener("click", (e) => {
		e.preventDefault();
		increaseTimer(30);
	});

	document.querySelector("#decrease1000").addEventListener("click", (e) => {
		e.preventDefault();
		decreaseTimer(10*60);
	});

	document.querySelector("#increase1000").addEventListener("click", (e) => {
		e.preventDefault();
		increaseTimer(10*60);
	});

});

function padTo2Digits(num) {
	return String(num).padStart(2, '0');
}

function getTime(date) {
	return padTo2Digits(date.getHours()) + ":" + padTo2Digits(date.getMinutes()) + ":" + padTo2Digits(date.getSeconds());
}

// Convert hh:mm:ss, h:m:s, mm:ss, m:s string to seconds.
function convertDurationToSeconds(duration){
	return duration.split(':').reverse().reduce((prev, curr, i) => prev + curr*Math.pow(60, i), 0)
};

function startTimer() {
	var duration = convertDurationToSeconds(getTime(date));
	var timer = duration, hours, minutes, seconds;

	if (!timerRunning) {
		timerRunning = true;

		timeInterval = setInterval(function () {
			hours = padTo2Digits(Math.floor(timer / 3600));
			minutes = padTo2Digits(Math.floor(timer % 3600 / 60));
			seconds = padTo2Digits(Math.floor(timer % 3600 % 60));

			timerDisplayEl.textContent = hours + ":" + minutes + ":" + seconds;

			if (--timer < 0) {
				timer = 0;
				resetTimer();
				// timer = duration; // reset timer automatically after reaching 0
			}
		}, 1000);
	}
}

function resetTimer() {
	clearInterval(timeInterval);
	timerDisplayEl.textContent = getTime(date);
	timerRunning = false;
}

function decreaseTimer(time) {
	if (!timerRunning) {
		date.setSeconds(date.getSeconds() - time);
		timerDisplayEl.textContent = getTime(date)
	}
}

function increaseTimer(time) {
	if (!timerRunning) {
		date.setSeconds(date.getSeconds() + time);
		timerDisplayEl.textContent = getTime(date)
	}
}
