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
var timerElement = document.querySelector(".timerContainer");
var timerCount;

function startTimer() {
    // Sets timer
    console.log("timer is started")
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            // Tests if win condition is met
            if (isWin && timerCount > 0) {
                // Clears interval and stops timer
                clearInterval(timer);
                winGame();
            }
        }
        // Tests if time has run out
        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
    return timerCount;
}

var gameInfo = {
    currentQuestion:{}
}
   
    function startGame() {
   
        console.log("startGame");

        placeQuestionOnPage(questions[0]);
        var timerCount = 10
        startTimer();

    }
   
    function placeQuestionOnPage(question) {

        console.log("place on page");

          //  var questiontext = question.questiontext;
          //  var answers = question.answers;
          //  var correctAnswerIndex = question.correctAnswerIndex
            var {questiontext, answers} = question;

            gameInfo.currentQuestion = question

            var questionContainer = document.querySelector(".questionContainer");
            var qText=document.createElement("h2");
            qText.textContent=questiontext;
            var answerList = document.createElement("ol");
            var answerItems = [];
       // console.log("the question is " + questiontext)
    
        for (let i=0; i<answers.length; i++){

         //   console.log("in answer loop");
            
            var answerItem = document.createElement("li");
            var answerItemBtn = document.createElement("button");

            // data-index attr for each item
            answerItem.dataset.index = i
           // answerItem.textContent = answers[i];
            answerItemBtn.textContent = answers[i];
            answerItemBtn.dataset.index = i;
            answerItem.append(answerItemBtn);
            answerItems.push(answerItem);

            console.log(answerItem);
        }
        // loop thru possible answers
        for (let i = 0; i < answerItems.length; i++) {
            answerList.append(answerItems[i]);  
        }
            questionContainer.append(qText, answerList );
  
}  

console.log("line 87");



document.querySelector("#startbutton").addEventListener("click", startGame)