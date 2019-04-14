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

var timeCounter=120;
var score = 0;
var wrongAnswers = 0;
var selectedValue;

// $(document).ready(function(){
//     $(".card").hide();
// });



$("input").click(function(){
    var selectedValue = $("input[name=options ]:checked").val();
if (selectedValue === answers[0]) {
    score ++;
   $("#testing").off("click");
    console.log("Score is..." ,score);
}  else if  (selectedValue === answers[1]) {
   var newscore =  score += newscore;
    $("#testing2").off("click");
     console.log("Score is..." ,newscore);
    
}  else if  (selectedValue === answers[2]) {
    console.log("Correct answer")
}  else if  (selectedValue === answers[3]) {
    console.log("Correct answer")
}  else if  (selectedValue === answers[4]) {
    console.log("Correct answer")
}  else if  (selectedValue === answers[5]) {
    console.log("Correct answer")
}  else if  (selectedValue === answers[6]) {
    console.log("Correct answer")
}  else if  (selectedValue === answers[7]) {
    console.log("Correct answer")
}  else if  (selectedValue === answers[8]) {
    console.log("Correct answer")
}  else if  (selectedValue === answers[9]) {
    console.log("Correct answer")
}  else if  (selectedValue === answers[10]) {
    console.log("Correct answer")
}  else if  (selectedValue === answers[11]) {
    console.log("Correct answer")
}  else if  (selectedValue === answers[12]) {
    console.log("Correct answer")
}  else if  (selectedValue === answers[13]) {
    console.log("Correct answer")
}  else if  (selectedValue === answers[14]) {
    console.log("Correct answer")
    } else {
        console.log("Wrong answer")
wrongAnswers += 0;
    }
});   


$("button").click(function(){
    window.location = "index.html";
});
  

// counter /timer
// set interval / timeout
// var intId = setInterval(function(){
//     timeCounter--;
//     console.log("1 sec tic", timeCounter);
//     if (timeCounter<=0){
//         alert("Time is Up")// check all the answers
//     }

// },1000)

//clear

//create var for: 
//questions 
