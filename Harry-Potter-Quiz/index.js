var chalk= require('chalk');
var readlineSync = require('readline-sync');
var score =0;
console.log(chalk.red.bold.bgBlackBright("🧙‍♂️  WELCOME TO WIZARDRY QUIZ !! 🧙‍♂️ \n"))
console.log(chalk.cyan.bold.bgBlackBright("CORRECT ANSWER :  1 point Gain 🔼 \n"))
console.log(chalk.red.bold.bgBlackBright("WRONG ANSWER :  1 point Loss 🔻 \n"))

var userName=readlineSync.question(chalk.red.bold("What's your name ? "));

console.log(chalk.green.bold.bgBlackBright("Welcome "+userName+" to the game 😀 !!"));

//high score
var highScore=[
  {
    name: "Anjali",
    score: 10
  },{
    name: "Anju",
    score: 9
  }
]



//play function

function play(question, answer){
  var userAnswer=readlineSync.question(question);
  
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.cyan.bold.bgBlack("right !"));
    score=score+1;
  }
  else{
    console.log(chalk.yellow.bold.bgBlack("wrong !"));
    score=score-1;
  }
  console.log(chalk.red.bold("current score : ",score));
  console.log("\n\n")
  console.log("------------------");
  
}


//arrays of object
var questions=[{
  question: '1. Whos is The Mother of Harry Potter ?\na)Lily\nb)Rose\nc)Rowling\nd)Marie\n',
    answer: 'a'
},{
  question: '2. Who was half Blood Prince ?\na)Dumbledore\nb)Sirius Black\nc)Snape\nd)Voldemort\n',
  answer: 'c'
},{
  question: "In Deathly Hallows, Harry married to ?\na)Harmione\nb)Ginny\nc)Emma Watson\nd)Cho Chang\n",
  answer: 'b'
},{
  question: "Who Killed Dumbledore at Half Blood Prince ?\na)Lucious Malfoy\nb)Severus Snape\nc)Harry\nd)Draco Malfoy\n",
  answer: 'b'
},{
  question: "Who was NOT a member of Order Of Phoenix ? \na)Mad-Eye Moody\nb)Bellatrix\nc)Sirius Black\nd)Elphias Doge\n",
  answer: 'b'
},{
  question: "Who was Priosoner Of Azkaban ?\na)Voldemort\nb)Sirius\nc)Dobby\nd)Cornelius Fuge\n",
  answer: 'b'
},{
  question: "Professor who removes his turban to reveal Voldemort on the back of his head ?\na)Quirrell\nb)Lockhart\nc)Snape\nd)Dumbledore\n",
  answer: 'a'
},{
  question: "Who teaches Transfiguration ?\na)Snape\nb)Sprout\nc)McGonagall\nd)Lucious Malfoy\n",
  answer: 'c'
},{
  question: "How many Weasley Siblings ?\na)2\nb)4\nc)7\nd)6\n",
  answer: 'c'
},{
  question: "Wizarding Prisoner and The foul Creature to guard it ?\na)Azkaban & Demantors\nb)Absolom &  Dementors\nc)Arkaben & Deluminators\nd)Azkaban & Slytherin\n",
  answer: 'a'
},{
  question: "Copies sold by Deathly hallows on first day of their release ?\na)5 million\nb)8 million\nc)11 million\nd)100 million\n",
  answer: 'c'
}];

//loop
for(var i=0;i<questions.length;i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
 console.log(chalk.red.bold.bgBlack("YAY 🤯 " + userName+" Your Score is "+score+" !!!!"));

 console.log(chalk.cyan.bold.bgBlack("The highest scorer is: "+ "anjali"));