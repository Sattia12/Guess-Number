const form = document.querySelector("#guessForm");
const userNumberDisplay = document.querySelector("#userNumber");
const computerNumberDisplay = document.querySelector("#computerNumber");
const resultDisplay = document.querySelector("#result");

form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const inputField = document.querySelector("#enterNumber");
    let userNumber = Number(inputField.value);

    if (isNaN(userNumber) || userNumber > 10 || userNumber < 1 || inputField.value === "") {
        resultDisplay.textContent = "Please enter a valid number between 1 and 10.";
        inputField.value = ""; 
        return;
    }

    const computerNumber = Math.ceil(Math.random() * 10);

    userNumberDisplay.textContent = userNumber;
    computerNumberDisplay.textContent = computerNumber;

    if (userNumber === computerNumber) {
        resultDisplay.textContent = `You got it! The random number was ${computerNumber}.`;
    } else {
        resultDisplay.textContent = `Unlucky! The random number was ${computerNumber}.`;
    }

    inputField.value = "";
});
