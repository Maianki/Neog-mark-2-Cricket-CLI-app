var readlineSync = require('readline-sync')
const chalk = require('chalk');

//variables used in the program
//variable to store score of user
score = 0

//array of object to store name and score of high scorer
highScore = [{
  name : "Manish",
  score : 3
},
{
  name : "joshi",
  score : 2
}]

//array of objects to store question,options and answer
var questions = [
  {
    question : chalk.green.bold("What does LBW stands for?"),
    options : "[1] Lower batsman wicket\n[2] Leg before wicket\n[3]Left ball wrong\n",
    answer: 2
  },
  {
    question : chalk.green.bold("Which player has most number of centuries in International cricket?"),
    options : "[1] Sachin\n[2] Virat\n[3] Don Bradman\n",
    answer: 1
  },
  {
    question : chalk.green.bold("Which female cricketer completed first 10000 runs in international cricket?"),
    options : "[1]Charlotte Edwards\n[2] Mitali Raj\n[3] Sarah Taylor\n",
    answer: 1
  },
  {
    question : chalk.green.bold("How many days a test cricket runs?"),
    options : "[1] It never ends\n[2] 4 days\n[3] 5 days\n",
    answer: 3
  }

]
//function to welcome user
function welcome(){
  var username = readlineSync.question(chalk.blue("What's your name? "))
  console.log(chalk.red("Welcome to the CRICKET FANDOM quiz"), chalk.bgRed.bold(username))
  console.log(chalk.red("Type 1,2 or 3 for answering each question."))
  console.log("---------------------------------------------")
}

//quiz function

function quiz(question,options,answer){
  console.log(question)
  var userAnswer = readlineSync.question(options)
  //if userAnswer equals to answer update score else keep it unchanged
  if(userAnswer == answer){
    score+=1
    console.log(chalk.bgBlue("You are right"))
  }else{
    console.log(chalk.bgRed("You are wrong"))
  }
  console.log("Your current score is: ",score)
  console.log()
}

//play function
function play(){
  for(var i=0;i<questions.length;i++){
    quiz(questions[i].question,questions[i].options,questions[i].answer)
  }
}

//function to display score and high scorer's
function displayScore(){
  console.log("Your final score is: ",score)
  console.log("High Scorer's: ")
  for(var i=0;i<highScore.length;i++){
    console.log(highScore[i].name,":",highScore[i].score)
  }
  //if user score is equal or greater than high scorer congrats user
    if(score >= highScore[0].score || score >= highScore[1].score){
      console.log(chalk.bgGrey("Congrats! You made it to the high score chart.\nSend screenshot of your score."))
    }
}

//Calling welcome function
welcome()
play()
displayScore()