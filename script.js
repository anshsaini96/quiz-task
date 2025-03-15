document.getElementById("submitBtn").addEventListener("click", checkAnswers);
document.getElementById("resetBtn").addEventListener("click", resetQuiz);

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
        resultMessage += `Question ${index + 1}: Bilkul sahi! <span id="celebration">🎉</span><br>`;
      } else {
        selectedAnswer.parentElement.classList.add("incorrect");
        selectedAnswer.parentElement.classList.remove("correct");
        resultMessage += `Question ${index + 1}: Arre yaar, galat! <span>😓</span><br>`;
      }
    } else {
      resultMessage += `Question ${index + 1}: Koi jawab nahi diya! <span>😕</span><br>`;
    }
  });

  // Show a final message based on correct answers
  if (correctCount === 6) {
    resultMessage += "<p>Full marks, bhai! You nailed it! 😎</p>";
  } else {
    resultMessage += "<p>Better luck next time, yaar! Keep it up! 💪</p>";
  }

  // Display the result
  document.getElementById("result").innerHTML = resultMessage;
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
  document.getElementById("celebration").style.animation = "none";
}


