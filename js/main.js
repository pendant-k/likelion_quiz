// Buttons
const startBtn = document.getElementById("btn-start");
const dashboardBtn = document.getElementById("btn-dash");
const startQuiz = () => {
  window.location.href = "/quiz.html";
};
const navigateToDashboard = () => {
  window.location.href = "/dashboard.html";
};

startBtn.addEventListener("click", startQuiz);
dashboardBtn.addEventListener("click", navigateToDashboard);
