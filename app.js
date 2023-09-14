//user gets a prompt to answer question;
//the question is stored in a variable as a string;
//a function checks if the answer given has the correct keywords
//then the user is congratulated for submitting the correct answer
"use strict";
let theQuestion = prompt('what is the name of the data type used to cary a list of data:', 'answer');
console.log(typeof(theQuestion)); 
let answer = 'array';

function checkAnswer(theQuestion, answer){
    if (answer === theQuestion){
        return(
        alert('that was the correct answer')
        )
    }else{
        return(
        alert('wrong answer, please try again')
        )
    }
};
checkAnswer();
