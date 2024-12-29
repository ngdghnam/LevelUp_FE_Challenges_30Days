document.addEventListener("DOMContentLoaded", () => {
  const timeDisplay = document.querySelector(".time-display");
  const progressCircle = document.querySelector(".ring-progress");
  const restartButton = document.querySelector(".restart-button");
  const pauseButton = document.querySelector(".pause-button");
  const playButton = document.querySelector(".play-button");
  const addMinuteButton = document.querySelector(".add-minute-button");

  let timeLeft = 43; // initial time
  let timerInterval;
  let isRunning = false;

  function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeLeft % 60).toString().padStart(2, "0");
    timeDisplay.textContent = `${minutes}:${seconds}`;
    const dashOffset = 377 - (377 * timeLeft) / 60;
    progressCircle.style.strokeDashoffset = dashOffset;
  }

  function startTimer() {
    if (!isRunning) {
      timerInterval = setInterval(() => {
        if (timeLeft > 0) {
          timeLeft--;
          updateDisplay();
        } else {
          stopTimer();
        }
      }, 1000);
      isRunning = true;
      pauseButton.style.display = "block";
      playButton.style.display = "none";
    }
  }
  function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    pauseButton.style.display = "none";
    playButton.style.display = "block";
  }
  function resetTimer() {
    stopTimer();
    timeLeft = 43;
    updateDisplay();
  }
  updateDisplay();

  pauseButton.addEventListener("click", stopTimer);
  playButton.addEventListener("click", startTimer);
  restartButton.addEventListener("click", resetTimer);

  addMinuteButton.addEventListener("click", () => {
    timeLeft += 60;
    updateDisplay();
  });
  startTimer();
});
