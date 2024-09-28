// Task # 2
// Problem: Simple Quiz App
// Write a JavaScript program that conducts a quiz for a user. The program should:

// Store a list of 5 questions and their correct answers in two arrays.
// Use a for loop to display each question using prompt and ask for the user's answer.
// Use if-else to check if the user's answer is correct.
// Keep track of how many answers are correct and how many are wrong.
// At the end, display the user's total score and a message based on their performance (using nested if for grading).
// Requirements:
// Use two arrays: one for the questions and one for the correct answers.
// Use a for loop to display the questions and capture the user's answer.
// Use if-else to compare the user's answer with the correct one.
// Use nested if statements to give feedback based on the score (like grading A, B, C, etc.).



const questions = [
    "What is the capital city of Pakistan?",
    "What is 100/2 * 3?",
    "What do people eat at Pizza hut?",
    "Where is Mount K2?",
    "When do we celebrate independence day?"
];

const answers = [
    "Islamabad",
    "150",
    "Pizza",
    "Pakistan",
    "14 August"
];

var correctCount = 0;
var wrongCount = 0;

for(i=0; i <questions.length; i++){
    var userAnswers = prompt(questions[i]);
    if (userAnswers !== null && userAnswers.trim().toLowerCase() === answers[i].toLowerCase()) {
        correctCount++; // If answer is correct
    } else {
        wrongCount++; // If answer is wrong
    }
}

var score = (correctCount / questions.length) * 100; // Calculate percentage score
var grade = "";

if (score === 100) {
    grade = "A+";
} else if (score >= 80) {
    grade = "A";
} else if (score >= 70) {
    grade = "B";
} else if (score >= 60) {
    grade = "C";
} else if (score >= 50) {
    grade = "D";
} else {
    grade = "F";
}

// Display the user's total score and message
alert(`You got ${correctCount} correct answers and ${wrongCount} wrong answers.`);
alert(`Your total score is ${score}%. You earned a grade of ${grade}.`);

