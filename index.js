newGame();

//starts and resets the game


function newGame()
{
    document.querySelector("#dice").style.display = "none";
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    document.querySelector("#score-0").textContent = "0";
    document.querySelector("#score-1").textContent = "0";
    document.querySelector("#roundScore-0").textContent = "0";
    document.querySelector("#roundScore-0").textContent = "0";
}

//sets the winning game score

document.querySelector('#winnerScore')


//function to update dice image randomly when the roll button is clicked and update scores

document.querySelector("#rollDice").addEventListener('click', function() {

    //random number

    var dice = Math.floor(Math.random()*6) + 1;

    // display the result
    var diceDOM = document.querySelector("#dice");
    diceDOM.style.display = "block";
    diceDOM.src = "images/dice-" + dice + ".png";

    //update the round score IF the rolled number is not 1 

    if (dice !== 1) {
    roundScore += dice;
    document.querySelector("#score-" + activePlayer).textContent = roundScore;

    } else {
        nextPlayer();
    }
    
});

//function to allow the player to hold their score 

document.querySelector("#hold").addEventListener("click", function(){
    scores[activePlayer] += roundScore;

    document.querySelector("#roundScore-" + activePlayer).textContent = scores[activePlayer];

    var settingsInput = document.querySelector('#winnerScore').value;
    var winningScore;

if(settingsInput) {
    var winningScore = settingsInput;
} else {
    winningScore = 100;
}

//check if player has won the game
    if(scores[activePlayer] >= winningScore) {
        document.querySelector("#name-" + activePlayer).textContent = "WINNER!";
        document.querySelector("#dice").style.display = "none";
        displayImage();
    } else {
    nextPlayer();
    }
});

//function to change player
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector("#score-0").textContent = "0";
    document.querySelector("#score-1").textContent = "0";

    document.querySelector(".playerOne").classList.toggle("active");
    document.querySelector(".playerOne").classList.toggle("toggle");
    document.querySelector(".playerTwo").classList.toggle("active");
}

//new game button

document.querySelector('#newGame').addEventListener('click', newGame);


//displays image when player wins
function displayImage() {
    var img = document.querySelector("#winner");
    img.style.visibility = "visible";
    setTimeout(function () {document.querySelector("#winner").style.display = "none"}, 5000);

}