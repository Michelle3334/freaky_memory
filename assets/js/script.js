// Wait for the DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", function() {

    //Card list (named easy to allow for more difficulty levels to be added at 
    //a later stage).
    const easyCardList = [
      {
        name:"green-two",
        img:"./assets/images/cards/green-alien2.png"
      },
      {
        name:"blue",
        img:"./assets/images/cards/blue-alien.png"
      },
      {
        name:"green",
        img:"./assets/images/cards/green-alien.png"
      },
      {
        name: "red",
        img:"./assets/images/cards/red-alien.png"
      },
      {
        name:"reddragon",
        img:"./assets/images/cards/red-dragon.png"
      },
      {
        name:"purple",
        img:"./assets/images/cards/purple-alien.png"
      },
      {
        name:"blue",
        img:"./assets/images/cards/blue-alien.png"
      },
      {
        name:"green-two",
        img:"./assets/images/cards/green-alien2.png"
      },
      {
        name:"reddragon",
        img:"./assets/images/cards/red-dragon.png"
      },
      {
        name:"green",
        img:"./assets/images/cards/green-alien.png"
      },
      {
        name:"red",
        img:"./assets/images/cards/red-alien.png"
      },
      {
        name:"purple",
        img:"./assets/images/cards/purple-alien.png"
      }
    ];
  
    // Randomly sort cards
    easyCardList.sort(() => 0.5 - Math.random());
  
    // Set constants
    const game = document.getElementById("game");
    const score = document.getElementById("result");
    const movesCount = document.getElementById("moves");
    const reset = document.getElementById("reset-btn");
  
    const cardsChosen = [];
    const cardsChosenId = [];
    const cardsRight = [];
  
    // Create game
    function createGame () {
      for (let i = 0; i < easyCardList.length; i++) {
        var card = document.createElement("img");
        card.setAttribute("src", "./assets/images/cards/blank.png");
        card.setAttribute("class", "game-cards");
        card.setAttribute("data-id", i);
        game.appendChild(card);
      }
    }
    
    createGame();
  
  })