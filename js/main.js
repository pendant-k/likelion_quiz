// Buttons
const startBtn = document.getElementById("btn-start");

const startQuiz = () => {
    window.location.href = "/quiz.html";
};

startBtn.addEventListener("click", startQuiz);
