 const questions = [
  // {
  //   question: "What is the capital of France?",
  //   options: ["Paris", "London", "Berlin", "Madrid"],
  //   answer: "Paris"       
  // },
  // {
  //   question: "What is the largest planet in our solar system?",
  //   options: ["Earth", "Mars", "Jupiter", "Saturn"],
  //   answer: "Jupiter" 
  // },
  // {
  //   question: "Who wrote 'To Kill a Mockingbird'?",
  //   options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
  //   answer: "Harper Lee"
  // },
  // {
  //   question: "What is the chemical symbol for water?",
  //   options: ["H2O", "CO2", "O2", "NaCl"],
  //   answer: "H2O"
  // },
  // {
  //   question: "What is the largest mammal?",
  //   options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
  //   answer: "Blue Whale"
  // }
{
  question: "What is the capital of France?",
  answers: [
    { text: "Paris", correct: true },
    { text: "London", correct: false },
    { text: "Berlin", correct: false },
    { text: "Madrid", correct: false }    
  ]
},
{
  question: "What is the largest planet in our solar system?",
  answers: [
    { text: "Earth", correct: false },    
    { text: "Mars", correct: false },
    { text: "Jupiter", correct: true },
    { text: "Saturn", correct: false }  
  ]
},
{
  question: "Who wrote 'To Kill a Mockingbird'?",   
  answers: [
    { text: "Harper Lee", correct: true },
    { text: "Mark Twain", correct: false }, 
    { text: "Ernest Hemingway", correct: false },
    { text: "F. Scott Fitzgerald", correct: false }    
  ]
},
{
  question: "What is the chemical symbol for water?", 
  answers: [    
    { text: "H2O", correct: true },
    { text: "CO2", correct: false },
    { text: "O2", correct: false }, 
    { text: "NaCl", correct: false }
    ]


},
{  question: "What is the largest mammal?", 
  answers: [    
    { text: "Elephant", correct: false },
    { text: "Blue Whale", correct: true },
    { text: "Giraffe", correct: false },
    { text: "Hippopotamus", correct: false }
  ]
},
 {
  question: "What is the smallest prime number?",
  answers: [
    { text: "0", correct: false },    
    { text: "1", correct: false },
    { text: "2", correct: true },
    { text: "3", correct: false } 
    ]
 },
  { question: "What is the chemical symbol for gold?",
  answers: [
    { text: "Au", correct: true },  
    { text: "Ag", correct: false },
    { text: "Fe", correct: false },
    { text: "Pb", correct: false } 
    ]
 },
 { question: "Who painted the Mona Lisa?",
  answers: [
    { text: "Leonardo da Vinci", correct: true }, 
    { text: "Pablo Picasso", correct: false },
    { text: "Vincent van Gogh", correct: false },
    { text: "Claude Monet", correct: false } 
    ]
 }, { question: "What is the largest ocean on Earth?",
  answers: [
    { text: "Atlantic Ocean", correct: false }, 
    { text: "Indian Ocean", correct: false },
    { text: "Arctic Ocean", correct: false },
    { text: "Pacific Ocean", correct: true }
    ]
}, { question: "What is the square root of 64?",
  answers: [  { text: "6", correct: false },
    { text: "7", correct: false },
    { text: "8", correct: true },
    { text: "9", correct: false } 
    ]
},
{ question: "Who is the author of the Harry Potter series?",
  answers: [
    { text: "J.K. Rowling", correct: true },
    { text: "J.R.R. Tolkien", correct: false },
    { text: "George R.R. Martin", correct: false },
    { text: "C.S. Lewis", correct: false } 
    ]
} 
 ]

 const questionElement = document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-btn");

 let currentQuestionIndex = 0;
 let score = 0;

 function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
 }

 function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener( "click", selectAnswer);
  });
}
function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }
  else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true; 
  });
  nextButton.style.display = "block";

  }
   function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
  } 
  function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
      showQuestion();
    } else {
      showScore();
    }
  }

  nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
      handleNextButton();
    } else {
      startQuiz();
    }
  });

  startQuiz();





