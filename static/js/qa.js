const questions = [
    {
        question: "製作一把小提琴需要花費多久的時間？",
        answers: ["100小時以上", "50~70小時", "30~80小時"],
        correctAnswer: "100小時以上",
        score: 10
    },
    {
        question: "與提琴夢工場學習小提琴製作，需要買工具嗎？",
        answers: ["需要，價格約5千~1萬", "需要，價格約1千~3千", "不需要，我們會提供"],
        correctAnswer: "不需要，我們會提供",
        score: 20
    },
    {
        question: "製作提琴有沒有什麼門檻？",
        answers: ["沒有，不限年齡", "有，學習製作一把提琴至少花費10~20萬", "有，需要花費很多體力"],
        correctAnswer: "沒有，不限年齡",
        score: 20
    },
    {
        question: "製作提琴第一件要做的事是什麼？",
        answers: ["鋸面板或背板", "鋸側板", "製作模板"],
        correctAnswer: "製作模板",
        score: 20
    },
    {
        question: "現場有一把彩繪提琴，請問他的名稱叫什麼？",
        answers: ["採筍精靈", "採蜜精靈", "採木精靈"],
        correctAnswer: "採筍精靈",
        score: 30
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