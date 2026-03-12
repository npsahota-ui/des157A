(function() {
    "use strict";
    
    const startGame = document.getElementById("startgame");
    const gameControl = document.getElementById("gamecontrol");
    const game = document.getElementById("game");
    const scoreDisplay = document.getElementById("score");
    const actionsArea = document.getElementById("actions");
    const quitContainer = document.getElementById("quit-container");
    const queen1ScoreDisplay = document.getElementById("queen1score");
    const queen2ScoreDisplay = document.getElementById("queen2score");
    
    const gameData = {
        cards: [
            { name: "heart1.jpg", value: 1, isAce: true },
            { name: "heart2.jpg", value: 2, isAce: false },
            { name: "heart3.jpg", value: 3, isAce: false },
            { name: "heart4.jpg", value: 4, isAce: false },
            { name: "heart5.jpg", value: 5, isAce: false },
            { name: "heart6.jpg", value: 6, isAce: false },
            { name: "heartqueen.jpg", value: 10, isAce: false },
            { name: "spade1.jpg", value: 1, isAce: true },
            { name: "spade2.jpg", value: 2, isAce: false },
            { name: "spade3.jpg", value: 3, isAce: false },
            { name: "spade4.jpg", value: 4, isAce: false },
            { name: "spade5.jpg", value: 5, isAce: false },
            { name: "spade6.jpg", value: 6, isAce: false },
            { name: "spadequeen.jpg", value: 10, isAce: false }
        ],
        players: ["Queen 1", "Queen 2"],
        score: [0, 0],
        card1: null,
        card2: null,
        roundScore: 0,
        index: 0,
        gameEnd: 30
    };
    
    // Start the game
    startGame.addEventListener("click", function() {
        gameData.index = Math.round(Math.random());
        
        // Hide start button
        gameControl.innerHTML = "";
        
        // Add quit button to its own container
        quitContainer.innerHTML = '<button id="quit">Wanna Quit?</button>';
        
        document.getElementById("quit").addEventListener("click", function() {
            location.reload();
        });
        
        setUpTurn();
    });
    
    // Set up a turn
    function setUpTurn() {
        gameData.roundScore = 0;
        game.innerHTML = `<p>Pick your cards, ${gameData.players[gameData.index]}!</p>`;
        actionsArea.innerHTML = '<button id="pick">Pick Cards</button>';
        
        document.getElementById("pick").addEventListener("click", function() {
            pickCards();
        });
        
        updateScore();
    }
    
    // Pick two random cards
    function pickCards() {
        actionsArea.innerHTML = "";
        
        // Pick two random cards
        const randomIndex1 = Math.floor(Math.random() * gameData.cards.length);
        const randomIndex2 = Math.floor(Math.random() * gameData.cards.length);
        
        gameData.card1 = gameData.cards[randomIndex1];
        gameData.card2 = gameData.cards[randomIndex2];
        
        // Display the cards
        game.innerHTML = `<p>Pick your cards, ${gameData.players[gameData.index]}!</p>`;
        game.innerHTML += `<div style="display: flex; gap: 1em; justify-content: center;">
                            <img src="images/${gameData.card1.name}" alt="card" height="170" width="100"> 
                            <img src="images/${gameData.card2.name}" alt="card" height="170" width="100">
                          </div>`;
        
        // Check for aces
        const aceCount = (gameData.card1.isAce ? 1 : 0) + (gameData.card2.isAce ? 1 : 0);
        
        if (aceCount === 2) {
            // Two aces - score goes to 0 and switch players
            game.innerHTML += "<p>Oh no! Two aces! Your score is now 0!</p>";
            gameData.score[gameData.index] = 0;
            switchPlayer();
            updateScore();
            setTimeout(setUpTurn, 2000);
            
        } else if (aceCount === 1) {
            // One ace - switch players
            game.innerHTML += `<p>You pulled an ace! Switching to ${gameData.players[gameData.index === 0 ? 1 : 0]}</p>`;
            switchPlayer();
            setTimeout(setUpTurn, 2000);
            
        } else {
            // No aces - add to round score
            gameData.roundScore = gameData.card1.value + gameData.card2.value;
            game.innerHTML += `<p>You got ${gameData.roundScore} points this round!</p>`;
            
            // Check if player won
            if (gameData.score[gameData.index] + gameData.roundScore >= gameData.gameEnd) {
                gameData.score[gameData.index] += gameData.roundScore;
                updateScore();
                endGame();
            } else {
                // Give option to pick again or pass
                actionsArea.innerHTML = '<button id="pickagain">Pick Again</button> <button id="pass">Pass</button>';
                
                document.getElementById("pickagain").addEventListener("click", function() {
                    pickCards();
                });
                
                document.getElementById("pass").addEventListener("click", function() {
                    gameData.score[gameData.index] += gameData.roundScore;
                    switchPlayer();
                    updateScore();
                    setUpTurn();
                });
                
                updateScore();
            }
        }
    }
    
    // Switch to the other player
    function switchPlayer() {
        gameData.index = gameData.index === 0 ? 1 : 0;
    }
    
    // Update the score display
    function updateScore() {
        queen1ScoreDisplay.textContent = `Queen 1: ${gameData.score[0]}`;
        queen2ScoreDisplay.textContent = `Queen 2: ${gameData.score[1]}`;
        
        scoreDisplay.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}: 
        ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}: 
        ${gameData.score[1]}</strong></p>`;
    }
    
    // End the game
    function endGame() {
        scoreDisplay.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
        actionsArea.innerHTML = "";
        quitContainer.innerHTML = '<button id="newgame">Start a New Game?</button>';
        
        document.getElementById("newgame").addEventListener("click", function() {
            location.reload();
        });
    }
    
})();