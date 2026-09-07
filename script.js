const outputDiv = document.getElementById("output");
const inputContainer = document.getElementById("input-container");
const userInput = document.getElementById("user-input");

let currentStep = 0;
let userName = "";
let n1 = 0, n2 = 0; 

function print(text, className = "") {
  const line = document.createElement("div");
  line.className = className;
  line.innerHTML = text;
  outputDiv.appendChild(line);
  window.scrollTo(0, document.body.scrollHeight);
}

function ask() {
  inputContainer.style.display = "flex";
  userInput.value = "";
  userInput.focus();
}

function hideInput() {
  inputContainer.style.display = "none";
}

function gameOver() {
  hideInput();
}

function runQuiz() {
  switch (currentStep) {
    case 0:
      print("hi and welcome to the boring quiz :|", "bold");
      print("insert random stuff here: ");
      ask();
      break;
      
    case 1:
      print(`${userName}<br>`);
      print("all you have to do is pass the quiz or fail. not my fault if you fail");
      print("very simple but good luck doing it i guess<br>");
      print("ok so the first easy boring question is...");
      print("<span class='primary'>what is 1 + 1 </span>");
      ask();
      break;
      
    case 2:
      print("<br>ok next boring question...");
      n1 = Math.floor(Math.random() * 100000000000);
      n2 = Math.floor(Math.random() * 100000000000);
      print(`<span class='primary'>what is ${n1} + ${n2} (very easy and boring, right?) </span>`);
      ask();
      break;
      
    case 3:
      print("<br>ok next extremely boring question...");
      print("<span class='primary'>this sentence is false (t/f)</span>");
      ask();
      break;
      
    case 4:
      print("<br>ok next extremly extremly boring question...");
      print("<span class='primary'>.-- .... -.-- / .. ... / -.... / .- ..-. .-. .- .. -.. / --- ..-. / --... ..--.. </span>");
      ask();
      break;
      
    case 5:
      print("next borign question!");
      print("<span class='primary'>what is 2 + 2 </span>");
      ask();
      break;
      
    case 6:
      print("<br>ok next boring-to-tears question...");
      print("<span class='primary'>type 'anything' to continue </span>");
      ask();
      break;
      
    case 7:
      print("ok next boring boring boring question...");
      print(`<span class="bold">https://youtube.com</span>`);
      print("<span class='primary'>is this link a rickroll? (y/n) </span>");
      ask();
      break;
      
    case 8: 
      print("are you SURE? (y/n) ");
      ask();
      break;
      
    case 9: 
      print("still here? (y/n) ");
      ask();
      break;
      
    case 10:
      print("ok that wasnt a question, and it wasnt the last");
      print("hehe &gt;:)");
      print("anyways next booooooooooooooooring question...");
      print("<span class='primary'>what is 6 × 7?</span>");
      ask();
      break;
      
    case 11:
      print("ok.");
      print("thats the end of the boring quiz");
      print("very boring right? &gt; ");
      ask();
      break;
      
    case 12:
      print("anyways thx for playing");
      print("it was full of cringe");
      print("you somehow made it out im impressed");
      print("anyways...");
      print("<span class='red'>B</span> <span class='yellow'>Y</span> <span class='green'>E</span> <span class='cyan'>!</span> <span class='blue'>!</span> <span class='magenta'>!</span>");
      hideInput();
      break;
  }
}

userInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    let val = userInput.value;
    let cleanVal = val.toLowerCase().trim();
    
    print(`&gt; ${val}`, "bold");
    hideInput();
    
    if (currentStep === 0) {
      userName = val;
      currentStep = 1;
      runQuiz();
    } 
    else if (currentStep === 1) {
      if (parseInt(cleanVal) === 2) {
        print("correct", "green");
        print("maybe ur smarter than i thought...", "green");
        currentStep = 2;
        runQuiz();
      } else {
        print("incorrect", "red");
        print("you failed.", "red");
        gameOver();
      }
    } 
    else if (currentStep === 2) {
      if (parseInt(cleanVal) === (n1 + n2)) {
        print("correct", "green");
        print("wait did you cheat..? its basically impossibl- i mean boring", "cyan")
        print("ok you passed the quiz (jk lol its not over yet)", "green");
        currentStep = 3;
        runQuiz();
      } else {
        print("incorrect", "red");
        print(`the answer is actually <span class='bold'>{n1 + n2}</span> lol`, "red");
        print("you failed.", "red");
        gameOver();
      }
    } 
    else if (currentStep === 3) {
      if (["t", "true"].includes(cleanVal)) {
        print("incorrect", "red");
        print("explanation: if the sentence being false is true then the sentence is false", "red");
        print("you failed get wrecked lol", "red");
        gameOver();
      } else if (["f", "false"].includes(cleanVal)) {
        print("incorrect", "red");
        print("explanation: if the sentence being false is false then the sentence must be true, but the sentence says it's false which means u r dumb", "red");
        print("you failed get wrecked lol", "red");
        gameOver();
      } else {
        print("correct", "green");
        print("explanation: the sentence is neither true or false, which means it is a paradox and you are smarter than i thought", "green");
        print("you passed the quiz (jk lol its not over yet get wrecked)", "green");
        currentStep = 4;
        runQuiz();
      }
    } 
    else if (currentStep === 4) {
      if (cleanVal === "67" || cleanVal === "-.... --...") {
        print("correct", "green");
        print("wow you ACTUALLY understand morse code! u are WAY smarter than i thought...", "green");
        print("but that was very very boring (and cringe) so...");
        currentStep = 5;
        runQuiz();
      } else if (cleanVal === "7 8 9") {
        print("incorrect", "red");
        print("bro not funny + didnt laugh", "red");
        print("you failed get wrecked lol", "red");
        gameOver();
      } else {
        print("incorrect", "red");
        print("what are you thinking?", "red");
        print("the answer was <span class='bold'>67</span> or <span class='bold'>-.... --...</span> (morse code for 67)", "red");
        print("you failed get wrecked lol", "red");
        gameOver();
      }
    } 
    else if (currentStep === 5) {
      let proofLink = `https://google.com`;
      if (parseInt(cleanVal) === 5) {
        print("correct", "green");
        print("2 + 2 is actually 5 not 4 loll", "green");
        print(`proof: ${proofLink}`, "blue");
        currentStep = 6;
        runQuiz();
      } else if (parseInt(cleanVal) === 4) {
        print("incorrect", "red");
        print("2 + 2 is actually 5 not 4 loll", "red");
        print(`proof: ${proofLink}`, "blue");
        print("you failed get wrecked lol", "red");
        gameOver();
      } else {
        print("incorrect", "red");
        print(`2 + 2 is actually 5 not ${val}`, "red");
        print(`proof: ${proofLink}`, "blue");
        print("you failed get wrecked lol", "red");
        gameOver();
      }
    } 
    else if (currentStep === 6) {
      if (val.trim() === "anything") {
        print("incorrect", "red");
        print("srly? u literally just do whatever i say? have some independence smh", "red");
        print("you failed get wrecked lol", "red");
        gameOver();
      } else {
        print("correct", "green");
        print("wow ok rebel... i see u", "green");
        print("(and i know ur address...)", "green");
        currentStep = 7;
        runQuiz();
      }
    } 
    else if (currentStep === 7) {
      if (cleanVal === "y") {
        currentStep = 8;
        runQuiz();
      } else {
        currentStep = 10;
        runQuiz();
      }
    } 
    else if (currentStep === 8) {
      print("ok.");
      print("click it to prove it. or else......");
      print("&gt;:)");
      print(`<span class="bold">https://www.youtube.com/watch?v=dQw4w9WgXcQ</span>`);
      print("^^^ click it ^^^");
      currentStep = 9;
      runQuiz();
    } 
    else if (currentStep === 9) {
      if (cleanVal === "y") {
        print("*insert rickroll here*");
        print("haha i told u and u never lisnted");
      } else if (cleanVal === "n") {
        print("ok but how are you here if u said no?");
        print("*insert rickroll here*");
      }
      print("deserved lol");
      currentStep = 10;
      runQuiz();
    } 
    else if (currentStep === 10) {
      if (parseInt(cleanVal) === 42) {
        print("half correct", "yellow");
        print("while mathematicatically speaking, 6 × 7 IS 42", "yellow");
        print("BUT 67", "yellow");
        print("6 × 7 = 67", "yellow");
        print("lmao", "yellow");
        currentStep = 11;
        runQuiz();
      } else if (parseInt(cleanVal) === 67) {
        print("yesss correct", "green");
        print("the answer was 67 lol", "green");
        currentStep = 11;
        runQuiz();
      } else {
        print("incorrect", "red");
        print("6 × 7 is 67", "red");
        print("you failed lol", "red");
        gameOver();
      }
    } 
    else if (currentStep === 11) {
      if (cleanVal === "y") {
        print("oh wow i thought it was boring too");
      } else if (cleanVal === "n") {
        print("wdym it wasnt boring??? i slept over this quiz (right?)");
      } else {
        print("ok");
      }
      currentStep = 12;
      runQuiz();
    }
  }
});

runQuiz();
