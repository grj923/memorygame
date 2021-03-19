document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "chesseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "chesseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },

    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },

    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },

    {
      name: "pizza",
      img: "images/pizza.png",
    },

    {
      name: "pizza",
      img: "images/pizza.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipcard);
      grid.appendChild(card);
    }
  }

  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("You Have Clicked The Same Image");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You Have Found A Match");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cards[optionOneId].removeEventListener("click", flipcard);
      cards[optionTwoId].removeEventListener("click", flipcard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("Sorry, Try Again!");
    }

    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if ((cardsWon.length = cardsArray.length / 2)) {
      resultDisplay.textContent = "Congratutaltions! You Found Them All!";
    }
  }

  function flipcard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
