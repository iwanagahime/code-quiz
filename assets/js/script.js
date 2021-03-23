const startButtonElement = document.getElementById("start-quiz-button");
const startQuizDiv = document.getElementById("start-quiz-section");
const timerSpanElement = document.getElementById("timer-span");
const bodyElement = document.body;

// const quizCard = "questionAndAnswers";
let timerValue = 60;

// TODO how to construct questions and answers for quiz card
const constructQuizCard = () => {
  // const question =
  // const answers =
};

const constructQuizContainer = () => {
  const quizContainerDiv = document.createElement("div");
  quizContainerDiv.setAttribute("class", "quiz-container");
  const questionAndAnswersContainerDiv = document.createElement("div");
  questionAndAnswersContainerDiv.setAttribute(
    "class",
    "question-and-answers-container"
  );

  constructQuizCard();
  // TODO content of this container needs to be put in place
  // questionAndAnswersContainerDiv

  quizContainerDiv.appendChild(questionAndAnswersContainerDiv);

  return quizContainerDiv;
};

const startTimer = () => {
  const timerTick = () => {
    timerSpanElement.textContent = timerValue;
    timerValue -= 1;

    if (timerValue < 0) {
      clearInterval(timer);
    }
  };
  const timer = setInterval(timerTick, 1000);
};

// construct form container
//  remove quiz container div and append form container div to body

const startQuiz = () => {
  // replace the start-quiz-section div with the quiz-container div

  const quizDivElement = constructQuizContainer();

  // remove start-quiz section

  bodyElement.removeChild(startQuizDiv);

  // insert the quiz-container div

  bodyElement.appendChild(quizDivElement);

  // start timer here
  startTimer();
};
console.log("Start Quiz");

startButtonElement.addEventListener("click", startQuiz);
