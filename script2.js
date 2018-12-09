//BRADLEY MITCHELL N220-27547 12/7/18

let visibleCard = {};

const initialCards = [
  {
    id: "1a",
    type: "slaw",
    image: "images/slaw.jpg"
  },
  {
    id: "1c",
    type: "download",
    image: "images/download.jpg"
  },
  {
    id: "1b",
    type: "disappointment",
    image: "images/disappointment.png"
  },
  {
    id: "1d",
    type: "Eee",
    image: "images/Eee.png"
  },
  {
    id: "1e",
    type: "Pew",
    image: "images/pew.png"
  },
  {
    id: "1f",
    type: "tseries",
    image: "images/tseries.jpg"
  },
  {
    id: "2a",
    type: "slaw",
    image: "images/slaw.jpg"
  },
  {
    id: "2c",
    type: "download",
    image: "images/download.jpg"
  },
  {
    id: "2d",
    type: "Eee",
    image: "images/Eee.png"
  },
  {
    id: "2e",
    type: "Pew",
    image: "images/pew.png"
  },
  {
    id: "2b",
    type: "disappointment",
    image: "images/disappointment.png"
  },
  {
    id: "2f",
    type: "tseries",
    image: "images/tseries.jpg"
  }
];

const shuffledCards = initialCards.sort(() => 0.5 - Math.random());

document.addEventListener("DOMContentLoaded", () => {
  const gameElement = document.querySelector(".memory-game");

  shuffledCards.forEach(card => {
    const cardElement = document.createElement("img");

    cardElement.src = card.image;
    cardElement.className = "memory-card";
    cardElement.setAttribute("id", card.id);
    cardElement.setAttribute("src", "images/redCardBack.png");
    cardElement.addEventListener("click", () => {
      if (visibleCard.id === card.id) {
        return;
      }

      cardElement.setAttribute("src", card.image);

      setTimeout(() => {
        const visibleCardElement = document.getElementById(visibleCard.id);

        if (visibleCard.id) {
          if (card.type === visibleCard.type) {
            cardElement.style.visibility = "hidden";
            visibleCardElement.style.visibility = "hidden";
            visibleCard = {};
          } else {
            cardElement.setAttribute("src", "images/redCardBack.png");
            visibleCardElement.setAttribute("src", "images/redCardBack.png");
            visibleCard = {};
          }
        } else {
          visibleCard = card;
        }
      }, 2000);
    });
    gameElement.appendChild(cardElement);
  });
});
