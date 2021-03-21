const startButtonElement = document.getElementById("start-quiz-button");

const constructQuizContainer = () => {
  const quizContainerDiv = document.createElement("div");
  quizContainerDiv.setAttribute("class", "quiz-container");
};

const startQuiz = () => {
  // replace the start-quiz-section div with the quiz-container div

  // construct the quiz-container div in JS
  const quizDivElement = constructQuizContainer();
};

startButtonElement.addEventListener("click", startQuiz);
