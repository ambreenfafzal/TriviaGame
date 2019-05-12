// var questions = [["What text displays on Michael Scott's coffee mug?" , "World's Best Boss"], 
//                 ["In the Pilot episode, Jim puts what in Jell-O that upsets Dwight?" , " Stapler"]
//                 ]
var answers = ["World's Best Boss",
    "Stapler",
    "Gary",
    "www.creedthoughts.gov.www/creedthoughts",
    "Ryan",
    "bernard",
    "Kurt",
    "Carol",
    "Gas station",
    "Islands in the Stream",
    "Rajnigandha",
    "14",
    "Noelle",
    "Gryffindor",
    "3 Hours",
]
// combine options, var question = array[{ question, answer, right answer}

var score = 0;
var wrongAns = 0;
// var timeCounter = 30;

$('input[name = option1]').click(function () {
    console.log("You clicked " + this.value);
    if (this.value == answers[0]) {
        console.log("answer is correct")
        score = score + 1;
        console.log(score);
    } else {

        wrongAns = wrongAns + 1;
        console.log(wrongAns);
    }
});
$('input[name = option2]').click(function () {
    console.log("You clicked " + this.value);
    if (this.value == answers[1]) {
        console.log("answer is correct")
        score = score + 1;
        console.log(score);
    } else {

        wrongAns = wrongAns + 1;
        console.log(wrongAns);
    }
});
$('input[name = option3]').click(function () {
    console.log("You clicked " + this.value);
    if (this.value == answers[2]) {
        console.log("answer is correct")
        score += 1;
        console.log(score);
    } else {

        wrongAns = wrongAns + 1;
        console.log(wrongAns);
    }
});
$('input[name = option4]').click(function () {
    console.log("You clicked " + this.value);
    if (this.value == answers[3]) {
        console.log("answer is correct")
        score += 1;
        console.log(score);
    } else {

        wrongAns = wrongAns + 1;
        console.log(wrongAns);
    }
});
$('input[name = option5]').click(function () {
    console.log("You clicked " + this.value);
    if (this.value == answers[4]) {
        console.log("answer is correct")
        score += 1;
        console.log(score);
    } else {

        wrongAns = wrongAns + 1;
        console.log(wrongAns);
    }
});
$('input[name = option6]').click(function () {
    console.log("You clicked " + this.value);
    if (this.value == answers[5]) {
        console.log("answer is correct")
        score += 1;
        console.log(score);
    } else {

        wrongAns = wrongAns + 1;
        console.log(wrongAns);
    }
});
$('input[name = option7]').click(function () {
    console.log("You clicked " + this.value);
    if (this.value == answers[6]) {
        console.log("answer is correct")
        score += 1;
        console.log(score);
    } else {

        wrongAns = wrongAns + 1;
        console.log(wrongAns);
    }
});
$('input[name = option8]').click(function () {
    console.log("You clicked " + this.value);
    if (this.value == answers[7]) {
        console.log("answer is correct")
        score += 1;
        console.log(score);
    } else {

        wrongAns = wrongAns + 1;
        console.log(wrongAns);
    }
});
$('input[name = option9]').click(function () {
    console.log("You clicked " + this.value);
    if (this.value == answers[8]) {
        console.log("answer is correct")
        score += 1;
        console.log(score);
    } else {

        wrongAns = wrongAns + 1;
        console.log(wrongAns);
    }
});
$('input[name = option10]').click(function () {
    console.log("You clicked " + this.value);
    if (this.value == answers[9]) {
        console.log("answer is correct")
        score += 1;
        console.log(score);
    } else {

        wrongAns = wrongAns + 1;
        console.log(wrongAns);
    }

});




$(document).ready(function(){
$("#score-container").hide();
});




$("#start-trivia").click(function() {
    $("#start-trivia").hide();
    var counter = 30;
   setInterval(function() {
     counter--;
      if (counter >= 0) {
        $("#timer").text(counter);
        //  span = document.getElementById("timer");
        //  span.innerHTML = counter;
      }
      if (counter === 0) {
        displayResult();
         clearInterval(counter);
         console.log("I love Adnan",score);
         $("#results").append(score);
         $("#wrong-answers").append(wrongAns);
         
       }
     }, 1000);
});

function displayResult(){
    document.getElementById("questions").style.display = "none";
    document.getElementById("score-container").style.display = "block";
    

};
$("#play-again").click(function() {
location.reload();
});

























































