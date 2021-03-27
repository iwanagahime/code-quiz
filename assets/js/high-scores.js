const goBack = document.getElementById("go-back");
const clear = document.getElementById("clear");

const goBack = () => {
  localStorage.clear();
};

const getFromLocalStorage = () => {
  const highScores = localStorage.getItem("highScores");
  if (highScores) {
    return highScores;
  } else {
    return [];
  }
};

// TODO
const renderHighScoresTable = (highScores) => {};

const onLoad = () => {
  const highScores = getFromLocalStorage();
  renderHighScoresTable(highScores);
};

goBack.addEventListener("click", goBack);
clear.addEventListener("click", clear);

window.addEventListener("load", onLoad);
