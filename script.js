// Global variables
const activeTimers = []; // Store active timers here

// Function to start a new timer
function startTimer(hours, minutes, seconds) {
  // Convert hours, minutes, seconds to milliseconds
  const totalMilliseconds = (hours * 3600000) + (minutes * 60000) + (seconds * 1000);
  
  // Create a new timer object
  const timer = {
    totalMilliseconds,
    intervalId: null,
    isEnded: false,
    // Add other properties like timerId, etc. if needed
  };
  
  // Add the timer to the active timers array
  activeTimers.push(timer);

  // Start the interval to update the timer every second
  timer.intervalId = setInterval(() => {
    timer.totalMilliseconds -= 1000;

    // Update the timer display
    // Implement this function to update the timer display

    if (timer.totalMilliseconds <= 0) {
      // Timer has ended
      timer.isEnded = true;
      clearInterval(timer.intervalId);
      // Play the audio alert
      const alertSound = new Audio('path/to/your/sound/alert.mp3');
      alertSound.play();
      // Update the timer display to match the end display design
      // Implement this function to change the timer display when it ends
    }
  }, 1000);
}

// Function to stop a timer
function stopTimer(timerId) {
  // Find the timer in the activeTimers array using its timerId
  const timerIndex = activeTimers.findIndex(timer => timer.timerId === timerId);
  if (timerIndex !== -1) {
    const timer = activeTimers[timerIndex];
    clearInterval(timer.intervalId);
    // Remove the timer from the activeTimers array
    activeTimers.splice(timerIndex, 1);
    // Remove the timer display from the UI
    // Implement this function to remove the timer from the UI
  }
}

// Function to handle form submission and start a new timer
function handleFormSubmit(event) {
  event.preventDefault();
  const hoursInput = document.getElementById('hours');
  const minutesInput = document.getElementById('minutes');
  const secondsInput = document.getElementById('seconds');
  const hours = parseInt(hoursInput.value) || 0;
  const minutes = parseInt(minutesInput.value) || 0;
  const seconds = parseInt(secondsInput.value) || 0;

  // Validate the input (ensure they are non-negative integers, etc.)
  // Implement validation logic here

  // Start a new timer
  startTimer(hours, minutes, seconds);

  // Clear the input fields after starting the timer
  hoursInput.value = '';
  minutesInput.value = '';
  secondsInput.value = '';
}

// Add event listener to the form submit button
const form = document.getElementById('timer-form');
form.addEventListener('submit', handleFormSubmit);

// Function to update the timer display
function updateTimerDisplay() {
  // Implement this function to update the timer display every second
  // You can iterate through the activeTimers array and update each timer's display
}

// Call the updateTimerDisplay function every second
setInterval(updateTimerDisplay, 1000);
