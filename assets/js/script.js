// Wait for the DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", () => {

  //Card list (named 'easyCardList' to allow for more difficulty levels to be added at 
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
  const game = document.querySelector("#game");
  const score = document.querySelector("#result");
  const movesCount = document.querySelector("#moves");
  let moves = 0;

  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsRight = [];

  // Create game
  function createGame () {
    for (let i = 0; i < easyCardList.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "./assets/images/cards/blank.png");
      card.setAttribute("class", "game-card");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard)
      game.appendChild(card);
    }
  }

  // Check if cards selected match
  function checkMatch () {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    
    if (cardsChosen[0] === cardsChosen[1] && cardsChosenId[0] !== cardsChosenId[1]) {
      cards[optionOneId].removeEventListener("click", flipCard)
      cards[optionTwoId].removeEventListener("click", flipCard)
      cardsRight.push(cardsChosen);
      movesCounter();
    } else {
      cards[optionOneId].setAttribute("src", "./assets/images/cards/blank.png")
      cards[optionTwoId].setAttribute("src", "./assets/images/cards/blank.png")
      movesCounter();
    }
    
    //clear cards chosen
    cardsChosen = [];
    cardsChosenId = [];
        
    //Increase score for every correct match
    score.textContent = cardsRight.length;
    //Display alert when all cards collected
    if (cardsRight.length === easyCardList.length/2) {
      alert("Congratulations! You found all the matches!");;
      }
    }

  //flip card on selection
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(easyCardList[cardId].name);
    cardsChosenId.push(cardId);
    // add image
    this.setAttribute("src", easyCardList[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkMatch, 400);
    }
  }
// Reset game
reset.addEventListener("click", resetEverything);
function resetEverything() {
  game.innerHTML = "";
  easyCardList.sort(() => 0.5 - Math.random());
  createGame(game, easyCardList);
  cardsRight = [];
  score.innerHTML = 0;
  cardsChosen = [];
  cardsChosenId = [];
  movesCount.innerHTML = 0;
  moves = 0;
}
// Count moves
function movesCounter () {
  movesCount.innerHTML ++;
  moves ++;
}

createGame();

})