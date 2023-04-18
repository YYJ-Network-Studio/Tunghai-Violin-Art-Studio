const questions = [
    {
        question: "東海提琴夢工場在什麼時候會去華山文創？",
        answers: ["5/18~5/20", "4/28~4/30", "4/18~4/20"],
        correctAnswer: "4/28~4/30",
        score: 50

    },
    {
        question: "東海提琴夢工場在華山文創的攤位是？",
        answers: ["北ㄧ館51攤", "西一館24攤", "西一館57攤"],
        correctAnswer: "西一館57攤",
        score: 50
    }
];
  
    let currentQuestionIndex = 0; // 當前問題的索引
    let score = 0;
  
    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
  
        const questionElement = document.getElementById("question");
        const answerElements = document.getElementsByName("answer");
  
        questionElement.textContent = currentQuestion.question;
        for (let i = 0; i < answerElements.length; i++) {
            answerElements[i].nextSibling.textContent = currentQuestion.answers[i];
        }
    }
  
    function submitAnswer() {
        const currentQuestion = questions[currentQuestionIndex];
        const answerElements = document.getElementsByName("answer");
        
        for (let i = 0; i < answerElements.length; i++) {
            if (answerElements[i].checked) {
                if (answerElements[i].nextSibling.textContent === currentQuestion.correctAnswer) {
                    score += currentQuestion.score;
                }
            break;
        }
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        const scoreElement = document.getElementById("score");
        scoreElement.textContent = score;
        showQuestion();
    } else {
        const scoreElement = document.getElementById("score");
        scoreElement.textContent = score;
        document.querySelector("form").style.display = "none";
        document.querySelector(".btn").style.display = "none";
        document.querySelector("#question").style.display = "none";
    }
}

showQuestion();  