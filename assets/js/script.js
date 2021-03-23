const startButtonElement = document.getElementById("start-quiz-button");

const constructQuizContainer = () => {
  const quizContainerDiv = document.createElement("div");
  quizContainerDiv.setAttribute("class", "quiz-container");
  const answersContainerDiv = document.createElement("div");
  answersContainerDiv.setAttribute("class", "answers-container");

  // TODO answersContainerDiv.textContent = "xxx"  How to set the buttons for answers within this answer div?

  quizContainerDiv.appendChild(answersContainerDiv);

  return quizContainerDiv;
};

const startQuiz = () => {
  // replace the start-quiz-section div with the quiz-container div
  // construct the quiz-container div in JS
  quizDivElement = constructQuizContainer();

  document.body.appendChild(quizDivElement);
  //  => replace;
  // document.getElementById(startQuizSection);
  // document.getElementById(quizContainerDiv);
};
console.log("Start Quiz");

startButtonElement.addEventListener("click", startQuiz);
