// var questions = [["What text displays on Michael Scott's coffee mug?" , "World's Best Boss"], 
//                 ["In the Pilot episode, Jim puts what in Jell-O that upsets Dwight?" , " Stapler"]
//                 ]
var answers = ["World's Best Boss" ,
                "Stapler",
                 "Gary", 
                "www.creedthoughts.gov.www/creedthoughts", 
                "Ryan", 
                "bernard", 
                "Kurt", 
                "Carol", 
                "Gas station" , 
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
            var  timeCounter = 30;
        
$('input[name = option1]').click(function(){
    console.log("You clicked " + this.value);
    if (this.value == answers[0]){
        console.log("answer is correct")
      score = score + 1;
        console.log(score);
    } else {
       
        wrongAns = wrongAns + 1;
        console.log(wrongAns);
    }
});
$('input[name = option2]').click(function(){
    console.log("You clicked " + this.value);
    if (this.value == answers[1]){
        console.log("answer is correct")
        score = score + 1;
        console.log(score);
    } else {
       
        wrongAns = wrongAns + 1;
        console.log(wrongAns);
    }
});
$('input[name = option3]').click(function(){
    console.log("You clicked " + this.value);
    if (this.value == answers[2]){
        console.log("answer is correct")
        score += 1;
        console.log(score);
    } else {
      
        wrongAns = wrongAns + 1;
        console.log(wrongAns);
    }
});
$('input[name = option4]').click(function(){
    console.log("You clicked " + this.value);
    if (this.value == answers[3]){
        console.log("answer is correct")
        score += 1;
        console.log(score);
    } else {
     
        wrongAns = wrongAns + 1;
        console.log(wrongAns);
    }
});
$('input[name = option5]').click(function(){
    console.log("You clicked " + this.value);
    if (this.value == answers[4]){
        console.log("answer is correct")
        score += 1;
        console.log(score);
    } else {
        
        wrongAns = wrongAns + 1;
        console.log(wrongAns);
    }
});
$('input[name = option6]').click(function(){
    console.log("You clicked " + this.value);
    if (this.value == answers[5]){
        console.log("answer is correct")
        score += 1;
        console.log(score);
    } else {
        
        wrongAns = wrongAns + 1;
        console.log(wrongAns);
    }
});
$('input[name = option7]').click(function(){
    console.log("You clicked " + this.value);
    if (this.value == answers[6]){
        console.log("answer is correct")
        score += 1;
        console.log(score);
    } else {
        
        wrongAns = wrongAns + 1;
        console.log(wrongAns);
    }
});
$('input[name = option8]').click(function(){
    console.log("You clicked " + this.value);
    if (this.value == answers[7]){
        console.log("answer is correct")
        score += 1;
        console.log(score);
    } else {
    
        wrongAns = wrongAns + 1;
        console.log(wrongAns);
    }
});
$('input[name = option9]').click(function(){
    console.log("You clicked " + this.value);
    if (this.value == answers[8]){
        console.log("answer is correct")
        score += 1;
        console.log(score);
    } else {
        
        wrongAns = wrongAns + 1;
        console.log(wrongAns);
    }
});
$('input[name = option10]').click(function(){
    console.log("You clicked " + this.value);
    if (this.value == answers[9]){
        console.log("answer is correct")
        score += 1;
        console.log(score);
    } else {
     
        wrongAns = wrongAns + 1;
        console.log(wrongAns);
    }
    
});


setInterval(function() {
timeCounter --;
console.log(timeCounter);
$("#timer").text("Timer :" + " " + timeCounter);
if(timeCounter == 0){
    clearInterval(timeCounter);
  displayScore();
}
}, 1000);

function displayScore(){
    var scoreCard = window.open("", "_self");
    scoreCard.document.write("<p><strong> Total Correct Answers: </strong> </p>" +  score);
    scoreCard.document.write("<p><strong> Total Wrong Answers: </strong> </p>" +  wrongAns);
}
// counter /timer
// set interval / timeout
// var intId = setInterval(function(){
//     timeCounter--;
//     console.log("1 sec tic", timeCounter);
//     if (timeCounter =0){
// var scoreCard = window.open("", "_self");
// scoreCard.document.write("Total Correct Answers :")
//         console.log("Time is Up")// check all the answers
//     }

// } ,10);

// var timeCounter=10;
// var wrongAnswers = 0;
// var score = 0;
// var totalQuestions = 15;
// var userClicked = "";

// var a = form.elements["test"].value;
// console.log(a);

// $("input:radio").click(function(){
//     var a =  $( "input[type=radio][name=option1]:checked" ).val();
//     var b =  $( "input[type=radio][name=option1]:checked" ).val();
    
//     if (a == answers[0]){
//         console.log("1", "this is correct")
//         score= score + 1;


     
//     } else if  (b === answers[1]) {
//         score=score + 1
//         console.log("2", "this is correct")
   
//     }
 
    
// });























































// for (var i = 0; i < totalQuestions.lenght; i++){
//     click();
// }


//  $("input[type='radio']").click(function(){
//      var question1 = $("input[name=option1]:checked").val();
//      var question2 = $("input[name=option2]:checked").val();
//      if(question1 === answers[0]) {
//           score ++;
//         //  console.log(score);
//      } else {
//          wrongAnswers ++; 
//     //  }   console.log(wrongAnswers);
//  if (question2 === answers[1]) {
//     score ++;
//     console.log(question2)
//     //  console.log(score);
//  } else {
//      wrongAnswers ++; 
//  }   console.log(wrongAnswers);
// }
//  });

// create a function 


// $("input").on("click" ,function(){
// var clickedOn = $("input[name=option1]:checked").val();
// userSelection = clickedOn;
// console.log("This  is a test" ,userSelection);
// if (userSelection == answers[0]){
//     score += 1;
//     console.log(userSelection);
//     console.log("Right answer score", score);
   
// } else {
//     console.log("wrong answer")
//     wrongAnswers += 1;
//     console.log(wrongAnswers);
    
// // }
//             });



// $(document).ready(function(){
//     $(".card").hide();
// });



// $("input").click(function(){
//     var selectedValue = $("input[name=options ]:checked");
    
 
   
// if (selectedValue === answers[0]) {
//     score ++;
//     console.log("Score is..." ,score);

// }  else if  (selectedValue === answers[1]) {
   

    
// }  else if  (selectedValue === answers[2]) {
//     score ++;
//     console.log("Score is..." ,score);
    
// }  else if  (selectedValue === answers[3]) {

     
//     console.log("Score is..." ,score);
// }  else if  (selectedValue === answers[4]) {

      
//     console.log("Score is..." ,score);
// }  else if  (selectedValue === answers[5]) {

    
//     console.log("Score is..." ,score);
// }  else if  (selectedValue === answers[6]) {

    
//     console.log("Score is..." ,score);
// }  else if  (selectedValue === answers[7]) {

    
//     console.log("Score is..." ,score);
// }  else if  (selectedValue === answers[8]) {
//     console.log(answers[8])

//     console.log("Score is..." ,score);
// }  else if  (selectedValue === answers[9]) {

    
//     console.log("Score is..." ,score);
// }  else if  (selectedValue === answers[10]) {

      
//     console.log("Score is..." ,score);
// }  else if  (selectedValue === answers[11]) {

     
//     console.log("Score is..." ,score);
// }  else if  (selectedValue === answers[12]) {
    
//     console.log("Score is..." ,score);
// }  else if  (selectedValue === answers[13]) {

    
//     console.log("Score is..." ,score);
// }  else if  (selectedValue === answers[14]) {
//     score ++;
//     console.log("Score is..." ,score);
//     } else {
//         // console.log("Wrong answer", wrongAnswers)
// wrongAnswers ++;

//     }
    



    



// $("button").click(function(){
//     window.location = "index.html";
// });
  

// counter /timer
// set interval / timeout
// var intId = setInterval(function(){
//     timeCounter--;
//     console.log("1 sec tic", timeCounter);
//     if (timeCounter<=0){

//         console.log("Time is Up")// check all the answers
//     }

// },1000)

//clear

//create var for: 
//questions 
