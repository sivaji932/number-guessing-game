let randomNumber;
let lifes;
let maxNumber;
let rangeText;

function startGame(level) {
    switch(level) {
        case 1:
            maxNumber = 5;
            lifes = 3;
            rangeText = "1 to 5";
            break;
        case 2:
            maxNumber = 10;
            lifes = 4;
            rangeText = "1 to 10";
            break;
        case 3:
            maxNumber = 20;
            lifes = 5;
            rangeText = "1 to 20";
            break;
        default:
            document.getElementById("hint").textContent = "Invalid choice!";
            return;
    }

    randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    console.log("(Debug) Random Number:", randomNumber);

    document.getElementById("difficulty-selection").style.display = "none";
    document.getElementById("game").style.display = "block";
    
    document.getElementById("status").textContent = 
      `The number was chosen. Enter a number in the range of ${rangeText}.`;
      
    document.getElementById("lifes").textContent = `Chances left: ${lifes}`;
    document.getElementById("hint").textContent = "";
    document.getElementById("result").textContent = "";
    document.getElementById("playAgainBtn").style.display = "none";
}

function makeGuess() {
    const guess = parseInt(document.getElementById("guessInput").value);
    const hint = document.getElementById("hint");
    const result = document.getElementById("result");

    if (isNaN(guess)) {
        hint.textContent = "⚠️ Please enter a valid number!";
        return;
    }

    if (guess === randomNumber) {
        hint.textContent = "";
        result.innerHTML = `<strong>🎉 Congrats, you won!</strong><br>The number was ${randomNumber}.<br>Your guess: ${guess}`;
        endGame();
    } else {
        lifes--;
        if (guess > randomNumber) {
            hint.textContent = "📈 Hint: Too high!";
        } else {
            hint.textContent = "📉 Hint: Too low!";
        }
        document.getElementById("lifes").textContent = `Chances left: ${lifes}`;

        if (lifes === 0) {
            hint.textContent = "";
            result.innerHTML = `<strong>😢 Better luck next time!</strong><br>The number was ${randomNumber}.`;
            endGame();
        }
    }

    document.getElementById("guessInput").value = ""; // Clear input
}

function endGame() {
    document.getElementById("guessInput").disabled = true;
    document.querySelector("#game button").disabled = true; // disable Guess! button
    document.getElementById("playAgainBtn").style.display = "inline-block"; // show Play Again button
}

function playAgain() {
    location.reload(); // Reload page to start from home
}
