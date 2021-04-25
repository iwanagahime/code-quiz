const goBackButton = document.getElementById("go-back");
const clearButton = document.getElementById("clear");

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
