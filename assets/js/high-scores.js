const goBackButton = document.getElementById("go-back-button");
const clearButton = document.getElementById("clear-button");

const goBack = () => {
  localStorage.clear();
};

goBackButton.addEventListener("click", goBack);
clearButton.addEventListener("click", clear);
