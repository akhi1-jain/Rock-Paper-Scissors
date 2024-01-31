const winningCombinations = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (winningCombinations[playerSelection] === computerSelection) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game(playerSelection) {
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);

    document.getElementById("playerChoice").textContent =
      "Player Choice: " + playerSelection;
    document.getElementById("computerChoice").textContent =
      "Computer Choice: " + computerSelection;
    document.getElementById("result").textContent = "Result: " + roundResult;
}

// Add event listener to the parent element of the buttons
const buttonsContainer = document.querySelector(".container-user-selection");
buttonsContainer.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    game(event.target.id);
  }
});

// In the expression `winningCombinations[playerSelection]`, `playerSelection` is used as a key to access a value in the `winningCombinations` object. Here's how it works:

// 1. **Object Lookup:**
//    - `winningCombinations` is an object that contains key-value pairs where each key represents a player's choice (e.g., "rock", "paper", "scissors"), and each value represents the choice that it beats in the game (e.g., "scissors" beats "paper").
//    - When you use `winningCombinations[playerSelection]`, JavaScript looks for the property in the `winningCombinations` object that matches the value of `playerSelection`.

// 2. **Comparison with Computer's Selection:**
//    - After accessing the value corresponding to `playerSelection` in `winningCombinations`, the code compares this value with `computerSelection` using the `===` operator.
//    - If `winningCombinations[playerSelection]` (the value corresponding to the player's selection) is equal to `computerSelection`, it means the player's choice beats the computer's choice, and the condition evaluates to `true`.
//    - For example, if `playerSelection` is "rock", `winningCombinations["rock"]` would return "scissors", so the comparison would be `("scissors" === computerSelection)`.

// 3. **Return Value:**
//    - If the comparison evaluates to `true`, the function returns a string indicating that the player wins the round.
//    - If the comparison evaluates to `false`, the function continues to the next `else` block to determine if the player has lost the round.

// In summary, `winningCombinations[playerSelection]` is used to look up the value associated with the player's selection in the `winningCombinations` object. This value is then compared to `computerSelection` to determine the outcome of the round based on the game rules.
