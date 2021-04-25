const goBackButton = document.getElementById("go-back");
const clearButton = document.getElementById("clear");

const highScoresContainerDiv = document.getElementById("high-scores");
const highScoresListContainer = document.getElementById("high-scores-table");
const highScores = JSON.parse(localStorage.getItem("highScores"));

// sort scores
const orderScores = () => {
  highScores.sort(function (a, b) {
    return parseFloat(b.Score) - parseFloat(a.Score);
  });
};

// construct high scores table using data from local storage
const constructHighScoresListItem = (item, index) => {
  let counter = index + 1;
  const highScoreItem = document.createElement("li");
  highScoreItem.setAttribute("class", "list-item");
  highScoreItem.textContent =
    counter + ". " + item["initials"] + "-  " + item["score"];
  highScoresListContainer.appendChild(highScoreItem);
};

//  order high scores items and render table
const onLoad = () => {
  if (highScores) {
    orderScores();
    highScores.forEach(constructHighScoresListItem);
  }
};

// clear high scores
const clearHighScores = () => {
  localStorage.clear();
  highScores.length = 0;
  highScoresContainerDiv.removeChild(constructHighScoresListContainer);
};

const goBack = () => {
  location.href = "/index.html";
};

const clear = () => {
  localStorage.clear();
  onLoad();
};

const getFromLocalStorage = () => {
  const highScores = localStorage.getItem("highScores");
  if (highScores) {
    return highScores;
  } else {
    return [];
  }
};

// TODO loop through array and pull out the score and append that item to table
const renderHighScoresTable = (highScores) => {
  if (highScores.length === 0) {
    console.log("empty");
  } else {
    console.log("create table");
  }
  // create div
  // create table
  // append div to page
};

const onLoad = () => {
  const highScores = getFromLocalStorage();
  renderHighScoresTable(highScores);
};

goBackButton.addEventListener("click", goBack);
clearButton.addEventListener("click", clear);

window.addEventListener("load", onLoad);
