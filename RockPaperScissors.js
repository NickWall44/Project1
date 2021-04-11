var userNum;
var compNum;
var wins = 0;
var losses = 0;
var ties = 0;

var rounds = prompt("How may rounds do you want to play?");

while(rounds > 0){

var userChoice = prompt("Rock, Paper or Scissors? (enter r, p, or s)");

switch (userChoice) {
  case "r":
    userNum = 0
    break;
  case "p":
    userNum = 1
    break;
  case "s":
    userNum = 2
    break;
}

compNum = Math.floor(Math.random() * 3);

//user chose rock
if (userNum == 0) {
  switch (compNum) {
    case 0:
      ties += 1
      alert("You tied!")
      break;
    case 1:
      losses += 1
      alert("You lost!")
      break;
    case 2:
      wins += 1
      alert("You won!")
      break;
  }
}
//user chose paper
if (userNum == 1) {
  switch (compNum) {
    case 0:
      wins += 1
      alert("You won!")
      break;
    case 1:
      ties += 1
      alert("You tied!")
      break;
    case 2:
      losses += 1
      alert("You lost!")
      break;
  }
}
//user chose scissors
if (userNum == 2) {
  switch (compNum) {
    case 0:
      losses += 1
      alert("You lost!")
      break;
    case 1:
      wins += 1
      alert("You won!")
      break;
    case 2:
      ties += 1
      alert("You tied!")
      break;
  }
}
rounds--;
}

alert("Total wins: " + wins + "\n" + "Total losses: " + losses + "\n" + "Total ties: " + ties);
