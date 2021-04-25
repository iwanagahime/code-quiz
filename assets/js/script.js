const startButtonElement = document.getElementById("start-quiz-button");
const startQuizDiv = document.getElementById("start-quiz-section");
const timerSpanElement = document.getElementById("timer-span");
const bodyElement = document.body;
let highScores = [];
let questionNumber = 0;
// const quizCard = "questionAndAnswers";

let timerValue = 30;

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

const displayQuestion = (currentQuestion) => {};

const constructQuizContainer = () => {
  const quizContainerDiv = document.createElement("div");
  quizContainerDiv.setAttribute("class", "quiz-container");
  quizContainerDiv.setAttribute("id", "quiz-container");

  const questionAndAnswersContainerDiv = document.createElement("div");
  questionAndAnswersContainerDiv.setAttribute(
    "class",
    "question-and-answers-container"
  );
  questionAndAnswersContainerDiv.setAttribute(
    "id",
    "question-and-answer-container"
  );
  let currentQuestion = questions[questionNumber];

  const h2 = document.createElement("h2");
  // we are creating a div to hold the questions
  const exampleDiv = document.createElement("div");

  //  we are setting the inner text of each h2 to the question title of each question
  h2.textContent = currentQuestion.title;
  // we are appending h2 to the div that holds the questions
  exampleDiv.appendChild(h2);
  // we are grabbing each choices array of each question and putting it into variable that we can use
  const choices = currentQuestion.choices;
  // We are looping through a questions array so that we can get each question object using forEach method
  // questions.forEach((question) => {

  console.log(choices);

  questionAndAnswersContainerDiv.appendChild(exampleDiv);

  quizContainerDiv.appendChild(questionAndAnswersContainerDiv);
  // we are looping through the length of the choices array
  for (let i = 0; i < choices.length; i++) {
    // we are creating a button for each choice in that array
    const button = document.createElement("button");
    button.addEventListener("click", (event) => {
      const userAnswers = event.target.innerText;
      const correctAnswer = currentQuestion.correctAnswer;
      if (userAnswers === correctAnswer) {
        questionNumber++;
        constructQuizContainer();
      } else {
        timerValue = timerValue - 5;
      }
    });
    // we are setting text content of each button to the value of each choice in that array
    button.textContent = choices[i];
    // we are appending that button to the div that holds the questions
    exampleDiv.appendChild(button);
  }

  return quizContainerDiv;
};

// Construct form div
const constructFormContainer = () => {
  const h1 = document.createElement("form");
  const form = `<div id ="form-container" class ="form-container">
    
 <div>All done! Your final score is <span id="score-span">25</span></div>
 <label for="high-scores-input"><h1>Your initials and score</h1></label>
 <form id="score-form" >
  <textarea id = "initials-input" class="input-box" name ="high-scores-input" rows ="1" cols="50"></textarea>
  <div><button id = "submit-score-button" class = "submit-button">Submit score</button></div>
 </form>  
</div> `;
  return form;
};

// Construct form

// Add timer
const startTimer = () => {
  const timerTick = () => {
    timerSpanElement.textContent = timerValue;
    timerValue -= 1;

    if (timerValue < 0) {
      clearInterval(timer);
      // construct form container
      const formContainer = constructFormContainer();
      // remove quiz container div from bodyElement
      const quizCardContainer = document.getElementById("quiz-container");
      bodyElement.removeChild(quizCardContainer);

      // append form container to bodyElement
      bodyElement.appendChild(formContainer);
    }
  };
  const timer = setInterval(timerTick, 1000);
};

// save high scores in local storage
const saveScores = () => {
  // get initials from input
  let initials = document.getElementById("initials-input").value;
  const finalScore = calculateFinalScore;
  if (initials !== "") {
    const userFinalScore = {
      initials: initials,
      score: finalScore,
    };
    highScores.push(userFinalScore);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.href = "./high-scores.html";
  } else {
    alert("Please enter your initials to save your score.");
  }
};

// Get high scores from local storage and set them into highScoresArray
const loadHighScores = () => {
  let highScoresArray = localStorage.getItem("highScores");
  if (highScoresArray) {
    highScores = JSON.parse(highScoresArray);
  } else {
    localStorage.setItem("highScores", JSON.stringify(highScores));
  }
};

// Preventing default when submitting high scores
const submitScore = (event) => {
  event.preventDefault();
  storeUserScores();
};

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
  console.log(parentDiv);
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
  console.log(divContainer);
  return divContainer;
};

const startQuiz = () => {
  document.body.removeChild(startQuizDiv);
  const quizContainerDiv = constructQuizContainer();
  document.body.appendChild(quizContainerDiv);

  loadHighScores();
  // displayQuestion();
  timerSpanElement.textContent = timerValue;
  startTimer();
};

startButtonElement.addEventListener("click", startQuiz);
