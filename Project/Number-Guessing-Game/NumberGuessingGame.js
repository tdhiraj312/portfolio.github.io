let randomNumber = Math.floor(Math.random() * 10) + 1; // random number between 1 and 10
let guess;
let attempts = 0;

while (guess !== randomNumber) {
  guess = Number(prompt("Guess a number between 1 and 10:"));
  attempts++;

  if (guess < randomNumber) {
    console.log("Too low! Try again.");
  } else if (guess > randomNumber) {
    console.log("Too high! Try again.");
  } else {
    console.log("🎉 Correct! The number was " + randomNumber);
    console.log("You guessed it in " + attempts + " attempts.");
  }
}
