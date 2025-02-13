const questions=[
    {
        question:"which is larget animal in the world?",
        answers:[
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers:[
            {text: "Mars", correct: false},
            {text: "Saturn", correct: false},
            {text: "Jupiter", correct: true},
            {text: "Neptune", correct: false},
        ]
    },
    {
        question:"What is the tallest mountain in the world?",
        answers:[
            {text: "Mount Everest", correct: true},
            {text: "K2", correct: false},
            {text: "Kangchenjunga", correct: false},
            {text: "Makalu", correct: false},
        ]
    },
    {
        question:"Which is the largest ocean on Earth?",
        answers:[
            {text: "Pacific Ocean", correct: true},
            {text: "Indian Ocean", correct: false},
            {text: "Atlantic Ocean", correct: false},
            {text: "Arctic Ocean", correct: false},
        ]
    },
    {
        question:"What is the chemical symbol for gold?",
        answers:[
            {text: "Ag", correct: false},
            {text: "Au", correct: true},
            {text: "Fe", correct: false},
            {text: "Cu", correct: false},
        ]
    },
    {
        question:"Which planet is known as the Red Planet?",
        answers:[
            {text: "Mercury", correct: false},
            {text: "Uranus", correct: false},
            {text: "Mars", correct: true},
            {text: "Venus", correct: false},
        ]
    },
    {
        question:"Which animal is known as the King of the Jungle?",
        answers:[
            {text: "Elephant", correct: false},
            {text: "Lion", correct: true},
            {text: "Giraffe", correct: false},
            {text: "Tiger", correct: false},
        ]
    },
    {
        question:"What is the largest species of shark?",
        answers:[
            {text: "Great White Shark", correct: false},
            {text: "Whale Shark", correct: true},
            {text: "Tiger Shark", correct: false},
            {text: "Hammerhead Shark", correct: false},
        ]
    }
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-butttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
        
}

function showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();
