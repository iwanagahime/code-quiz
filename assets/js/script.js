const startButtonElement = document.getElementById("start-quiz-button");
const startQuizDiv = document.getElementById("start-quiz-section");
const timerSpanElement = document.getElementById("timer-span");
const bodyElement = document.body;

// const quizCard = "questionAndAnswers";

let timerValue = 5;

const questions = [
  {
    title: "What symbol do we use to terminate statements in JavaScript?",
    choices: ["colon", "coma", "underscore", "semicolon"],
    correctAnswer: "semicolon",
  },
  {
    title: "What are methods?",
    choices: [
      "Functions that allow us repeat an action a number of times",
      "Functions attached to an objects",
      "Variables used to store data in global memory",
      "Values of variables",
    ],
    correctAnswer: "Functions attached to an object",
  },
  {
    title: "How many heading elements are there in HTML?",
    choices: ["3 headings", "6 headings", "5 headings", "2 headings"],
    correctAnswer: "6 headings",
  },
  {
    title:
      "Which CSS property allows us to adapt our application to different viewport sizes?",
    choices: ["margin", "justify content", "flex box", "text align"],
    correctAnswer: "flex box",
  },
  {
    title: "What is index?",
    choices: [
      "Array length",
      "Object within an array",
      "Technical term for an array of arrays",
      "Position of the box in the array",
    ],
    correctAnswer: "Position of a box in the array",
  },
];

const constructQuizContainer = () => {
  const quizContainerDiv = document.createElement("div");
  quizContainerDiv.setAttribute("class", "quiz-container");
  quizContainerDiv.setAttribute("id", "quiz-container");
  const questionAndAnswersContainerDiv = document.createElement("div");
  questionAndAnswersContainerDiv.setAttribute(
    "class",
    "question-and-answers-container"
  );

  // constructQuizCard();
  // TODO content of this container needs to be put in place
  // questionAndAnswersContainerDiv

  quizContainerDiv.appendChild(questionAndAnswersContainerDiv);

  return quizContainerDiv;
};

// Construct form div
const constructFormContainer = () => {
  const h1 = document.createElement("h1");
  h1.textContent = "hello";
  return h1;
};

// Add timer
const startTimer = () => {
  const timerTick = () => {
    timerSpanElement.textContent = timerValue;
    timerValue -= 1;

    if (timerValue < 0) {
      clearInterval(timer);
      // construct form container
      const formContainer = constructFormContainer();
      // remove quiz container
      const quizCardContainer = document.getElementById("quiz-container");
      bodyElement.removeChild(quizCardContainer);

      // append form container to body
      bodyElement.appendChild(formContainer);
    }
  };
  const timer = setInterval(timerTick, 1000);
};

//  remove quiz container div from bodyElement
// append form container div to bodyElement

const createChoices = (choices) => {
  const parentDiv = document.createElement("div");
  const createChoice = (choice) => {
    const div = document.createElement("div");
    const button = document.createElement("button");
    button.setAttribute("data-answer", choice);

    button.textContent = choice;

    div.appendChild(button);

    parentDiv.appendChild(div);
  };
  choices.forEach(createChoice);

  return parentDiv;
};

const createQuestionSection = (question) => {
  const divContainer = document.createElement("div");
  divContainer.setAttribute("id", "question");
  divContainer.setAttribute("data-answer", question.correctAnswer);

  const h2 = document.createElement("h2");
  h2.textContent = question.title;

  // create choices
  const choices = createChoices(question.choices);

  divContainer.append(h2, choices);
};

const startQuiz = () => {
  // create question container
  createQuestionSection(questions[0]);
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
