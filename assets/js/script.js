const startButtonElement = document.getElementById("start-quiz-button");
const startQuizDiv = document.getElementById("start-quiz-section");
const bodyElement = document.body;

const constructQuizContainer = () => {
  const quizContainerDiv = document.createElement("div");
  quizContainerDiv.setAttribute("class", "quiz-container");
  const questionAndAnswersContainerDiv = document.createElement("div");
  questionAndAnswersContainerDiv.setAttribute(
    "class",
    "question-and-answers-container"
  );

  // TODO content of this container needs to be put in place
  // questionAndAnswersContainer

  quizContainerDiv.appendChild(questionAndAnswersContainerDiv);

  return quizContainerDiv;
};

const startQuiz = () => {
  // replace the start-quiz-section div with the quiz-container div
  // construct the quiz-container div in JS
  const quizDivElement = constructQuizContainer();

  // remove start-quiz section

  bodyElement.removeChild(startQuizDiv);

  // insert the quiz-container div

  bodyElement.appendChild(quizDivElement);
  //  => replace;
  // document.getElementById(startQuizSection);
  // document.getElementById(quizContainerDiv);
};
console.log("Start Quiz");

startButtonElement.addEventListener("click", startQuiz);
