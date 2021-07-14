var questions = [
    {
        questiontext: "This is question 1",
        answers: ["Answer 1","Answer 2", "Answer 3", "Answer 4"],
        correctAnswerIndex: 1

    },
    {
        questiontext: "This is question 2",
        answers: ["Answer 1","Answer 2", "Answer 3", "Answer 4"],
        correctAnswerIndex: 4
    },
    {
        questiontext: "This is question 3",
        answers: ["Answer 1","Answer 2", "Answer 3", "Answer 4"],
        correctAnswerIndex: 3

    },
    {
        questiontext: "This is question 4",
        answers: ["Answer 1","Answer 2", "Answer 3", "Answer 4"],
        correctAnswerIndex: 1

    },
    {
        questiontext: "This is question 5",
        answers: ["Answer 1","Answer 2", "Answer 3", "Answer 4"],
        correctAnswerIndex: 2

    },
    {
        questiontext: "This is question 6",
        answers: ["Answer 1","Answer 2", "Answer 3", "Answer 4"],
        correctAnswerIndex: 2

    },
    {
        questiontext: "This is question 7",
        answers: ["Answer 1","Answer 2", "Answer 3", "Answer 4"],
        correctAnswerIndex: 1

    },
    {
        questiontext: "This is question 8",
        answers: ["Answer 1","Answer 2", "Answer 3", "Answer 4"],
        correctAnswerIndex: 4

    },
    {
        questiontext: "This is question 9",
        answers: ["Answer 1","Answer 2", "Answer 3", "Answer 4"],
        correctAnswerIndex: 3

    },
    {
        questiontext: "This is question 10",
        answers: ["Answer 1","Answer 2", "Answer 3", "Answer 4"],
        correctAnswerIndex: 4

    },
  
];
console.log(questions);

function placeQuestionOnPage(question) {
        console.log("place on page");
        var {questiontext, answers} = question;
        console.log("the question is" + question)
        gameInfo.currentQuestion = question
        var questionContainer = document.querySelector(".questionContainer");
        var qText=document.createElement("h2");
        qTest.textContent=questionText;
        var answerList = document.createElement("ol");
        var answerItems = [];
 
        for (let i=0; i<answers.length; i++){
        console.log("in answer loop");
        var answerItem = document.createElement("li");
        answerItem.dataset.index = i
        answerItem.textContent = answers[i];
       
        console.log(answerlist);

        answerItems.push(answerItem);
     
}
    answerList.append(answerItem);
    questionContainer.append(qText);
  
}  

console.log("line 87");


function startGame(event) {
    event.preventDefault;

    console.log("startGame");

    for (let index = 0; index < questions.length; index++) {
        const element = questions[index];
       
    }
    placeQuestionOnPage()
}

document.querySelector("#startbutton").addEventListener("click", startGame)