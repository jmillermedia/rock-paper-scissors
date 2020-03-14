// global variables declared for game
var choices = ['Rock', 'Paper', 'Scissors'];
var computer_choice;
var player_choice;
var player_lives = 3;
var computer_lives = 3;
var message_area = document.getElementById('game_area');
var clearArea = false;

document.getElementById('playGame').addEventListener('click', runGame);

document.getElementById('resetGame').addEventListener('click', resetGame);

// game function

function resetGame() {
  clearArea = true;
  player_lives = 3;
  computer_lives = 3;
  message_area.innerHTML += 'Game Lives have reset! <br>';
}

function runGame() {
  if (clearArea) {
    message_area.innerHTML = '';
  }

  clearArea = true;

  message_area.innerHTML += '******************** <br>';
  message_area.innerHTML += 'Computer Lives: ' + computer_lives + '<br>';
  message_area.innerHTML += 'Player Lives: ' + player_lives + '<br>';
  message_area.innerHTML += 'Choose Your Weapon!' + '<br>';
  
  var player_choices = document.getElementById('gameOption');
  player_choice = player_choices.options[player_choices.selectedIndex].value;
  computer_choice = choices[Math.floor(Math.random() * choices.length)];
  
  message_area.innerHTML += '******************** <br>';
  message_area.innerHTML += 'Computer Chose: ' + computer_choice + '<br>';
  message_area.innerHTML += 'Player Chose: ' + player_choice + '<br>';
  
  if (player_choice == computer_choice) {
  message_area.innerHTML += "It's A Tie! No One Wins! <br>"; //if the code can stop at a certain point, it's better to have it stop there than run the code to the bottom
  } else if (player_choice == 'Rock') {
    checkComputerWins('Paper', 'covers', 'smashes');
  } else if (player_choice == 'Paper') {
    checkComputerWins('Scissors', 'cuts', 'covers');
  } else if (player_choice == 'Scissors') {
    checkComputerWins('Rock', 'smashes', 'cuts');
  } else { 
  message_area.innerHTML += "Well, that's not a valid choice. <br>";
  }
  
  checkStatus();
}

function checkComputerWins(validateChoice, winMessage, loseMessage){
  if (computer_choice == validateChoice) {
        message_area.innerHTML += 'You lose! ' + computer_choice + ' ' + winMessage + ' ' + player_choice + '<br>';
        player_lives = player_lives -1;
    } else {
        message_area.innerHTML += 'You win! ' + player_choice + ' ' + loseMessage + ' ' + computer_choice + '<br>';
        computer_lives = computer_lives -1;
    }
  
}

function checkStatus() {
   if (player_lives == 0) {
     showWinLoseMessage("lost")
   }  else if (computer_lives == 0) {
     showWinLoseMessage ("won")
   }  else {
    message_area.innerHTML += 'Select another choice!<br>'
    message_area.innerHTML += '******************** <br><br>'
     }
   }

function showWinLoseMessage(status) {
  message_area.innerHTML += '******************** <br>';
  message_area.innerHTML += 'Game Over. <br>'
  message_area.innerHTML += '******************** <br>';
  message_area.innerHTML += 'You ' + status + '! Would you like to play again? <br>';
  clearArea = true;
}