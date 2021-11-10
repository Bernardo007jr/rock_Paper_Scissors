/*Create varibles for the score of each player, computer and human*/
let playerScore = 0;
let computerScore = 0;

/*Function computerSelection() takes randomly the values from an array called weapons */
function computerSelection(){
    const weapons = ['rock', 'paper', 'scissors'];
    const computerSelection = weapons[Math.floor(Math.random() * weapons.length)];
    return computerSelection;
}


/*Function playerSelection asks to the player to choose between rock, paper and scissors and stores the value in the variable selection*/
function playerSelection(){
    const playerSelection = prompt('Choose your weapon: Rock, paper or scissors').toLocaleLowerCase();
    return playerSelection;
}

/*Function game() uses the variable _playerWeapon and computerWeapon to determine who is the winer of the round*/
function score(playerSelection, computerSelection){
    /*Conditionals for rock*/
    if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'Player score: ' + ++playerScore + ` ${playerSelection} beats ${computerSelection}`;
    }else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return 'Computer score: ' + ++computerScore + ` ${computerSelection} beats ${playerSelection}`;
    }else if(playerSelection === 'rock' && computerSelection === 'rock'){
        return 'It\'s a tie';
    }
    /*Conditionals for paper*/
    else if(playerSelection=== 'paper' && computerSelection === 'rock'){
        return 'Player score: ' + ++playerScore + ` ${playerSelection} beats ${computerSelection}`;
    }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'Computer score: ' + ++computerScore + ` ${computerSelection} beats ${playerSelection}`;
    }else if(playerSelection === 'paper' && computerSelection === 'paper'){
        return 'It\'s a tie';
    }
    /*Conditionals for scissors*/
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'Player score: ' + ++playerScore + ` ${playerSelection} beats ${computerSelection}`;
    }else if(playerSelection === 'scissors' && computerSelection=== 'rock'){
        return 'Computer score: ' + ++computerScore + ` ${computerSelection} beats ${playerSelection}`;
    }else if(playerSelection === 'scissors' && computerSelection === 'scissors'){
        return 'It\'s a tie';
    }else{
        return 'Thats not a weapon bro! Both of you lose your chance';
    }

}
/*Function game creates another round until it becomes 5 and shows the scores*/
function game(){
    for (i = 0; i < 5; i++){
        console.log(score(playerSelection(), computerSelection()));
        console.log(computerScore);
        console.log(playerScore)
        
    }
}
game();

function finalGame(){
    if(playerScore > computerScore){
        return 'You have destroyed the computer, congrats!';
    }else if (playerScore < computerScore){
        return 'Computer has destoyed you, f**cking loser >:(';
    }else if(playerScore === computerScore){
        return 'Now you are friends, did you see? There are other ways ;)';
    }
}
console.log(finalGame())