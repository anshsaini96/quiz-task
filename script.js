// Array to store scores
let scores = [];

document.getElementById("submitBtn").addEventListener("click", checkAnswers);
document.getElementById("resetBtn").addEventListener("click", resetQuiz);
document.getElementById("submitBtn").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form submission

  const questions = document.querySelectorAll(".question");
  let unanswered = false;

  questions.forEach(question => {
      const selectedAnswer = question.querySelector('input[type="radio"]:checked');
      if (!selectedAnswer) {
          unanswered = true;
      }
  });

  if (unanswered) {
      alert("Sabhi sawalon ke jawab do phir submit karo!😡");
  } else {
      checkAnswers(); // Call your function to check answers
  }
}
)

// Check answers function with scoreboard logic
function checkAnswers() {
  const correctAnswers = {
    q1: "Paris",
    q2: "Mars",
    q3: "Einstein",
    q4: "Pacific",
    q5: "Washington",
    q6: "H2O"
  };

  let resultMessage = "";
  let correctCount = 0;

  // Loop through each question and check the selected answer
  const questions = document.querySelectorAll(".question");
  questions.forEach((question, index) => {
    const questionName = "q" + (index + 1);
    const selectedAnswer = document.querySelector(`input[name="${questionName}"]:checked`);

    if (selectedAnswer) {
      if (selectedAnswer.value === correctAnswers[questionName]) {
        selectedAnswer.parentElement.classList.add("correct");
        selectedAnswer.parentElement.classList.remove("incorrect");
        correctCount++;
        resultMessage += `Question ${index + 1}: Bilkul sahi! 🎉<br>`;
      } else {
        selectedAnswer.parentElement.classList.add("incorrect");
        selectedAnswer.parentElement.classList.remove("correct");
        resultMessage += `Question ${index + 1}: Arre yaar, galat! 😓<br>`;
      }
    } else {
      resultMessage += `Question ${index + 1}: Koi jawab nahi diya! 😕<br>`;
    }
  });

  // Show final message based on correct answers
  if (correctCount === 6) {
    resultMessage += "<p>Full marks, bhai! You nailed it! 😎</p>";
  } else {
    resultMessage += "<p>Better luck next time, yaar! Keep it up! 💪</p>";
  }

  // Display the result
  document.getElementById("result").innerHTML = resultMessage;

  // Store the score and update the scoreboard
  scores.push(correctCount); // Store the user's score
  updateScoreboard(); // Update the scoreboard with the new score
}

// Function to update the scoreboard
function updateScoreboard() {
  const scoreList = document.getElementById("scoreList");
  scoreList.innerHTML = ""; // Clear the previous score list

  // Loop through scores and display them
  scores.forEach((score, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Attempt ${index + 1}: ${score} correct answers`;
    scoreList.appendChild(listItem);
  });
}

function resetQuiz() {
  // Reset radio buttons
  document.querySelectorAll("input[type='radio']").forEach(input => {
    input.checked = false;
  });

  // Remove result highlights
  document.querySelectorAll(".question label").forEach(label => {
    label.classList.remove("correct", "incorrect");
  });

  // Clear result message
  document.getElementById("result").innerHTML = "";

  // Optionally clear the scoreboard or keep the old scores
  // scores = [];
  // updateScoreboard();
}


