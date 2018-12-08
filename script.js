//BRADLEY MITCHELL N220-27547 12/7/18
var memoryGame =document.querySelector(".memory-game");

var cards = [
    {
        id: '1a',
        name:'slaw',
        image:'images/slaw.jpg',
        visibility: false,

    },
    {
        id: '1c',
        name: 'download',
        image: 'images/download.jpg',
        visibility: false
    },
    {
        id: '1b',
        name: 'disappointment',
        image:'images/disappointment.png',
        visibility: false
    },
    {
        id: '1d',
        name: 'Eee',
        image: 'images/Eee.png',
        visibility:false
    },
    {
        id: '1e',
        name: 'Pew',
        image: 'images/pew.png',
        visibility: false
    },
    {
        id: '1f',
        name: 'tseries',
        image: 'images/tseries.jpg',
        visibility: false
    },
    {
        id: '2a',
        name:'slaw',
        image:'images/slaw.jpg',
        visibility: false

    },
    {
        id: '2c',
        name: 'download',
        image: 'images/download.jpg',
        visibility: false
    },
    {
        id: '2d',
        name: 'Eee',
        image: 'images/Eee.png',
        visibility:false
    },
    {
        id: '2e',
        name: 'Pew',
        image: 'images/pew.png',
        visibility: false
    },
    {
        id: '2b',
        name: 'disappointment',
        image:'images/disappointment.png',
        visibility: false
    },
    {
        id: '2f',
        name: 'tseries',
        image: 'images/tseries.jpg',
        visibility: false
    }
]
var randomCards = cards.sort(function(){return .5 - Math.random()});

cards.map(generateCard).join("");

document.addEventListener("DOMContentLoaded", function(){

});


function generateCard(card){
    var bgImage = `${card.image}`;
    var image = document.createElement("img");
    image.src = `${card.image}`;
    image.className = "memory-card";
    image.setAttribute("id", card.id);
    image.setAttribute("src", "images/redCardBack.png");

    image.addEventListener("click", function(ev) {
        setVisibility(ev, function(currentTarget) {
            if (currentTarget.classList.contains("is-visible")) {
                currentTarget.setAttribute("src", getCard(currentTarget.id).image);
            }
            else {
                currentTarget.setAttribute("src", "images/redCardBack.png");
            }
        });
    });
    memoryGame.appendChild(image)
}


function flipCard(card){
    console.log(card.dataset)
}




function getCard(id) {
    return cards.find(card => card.id === id);
}

function setVisibility(ev, cb) {
    var found = getCard(ev.currentTarget.id);

    if (found.id === ev.currentTarget.id) {
        ev.currentTarget.classList.toggle("is-visible")
    }

    cb(ev.currentTarget);
}


function compareCards(){


}

function returnCards(){


}

function lockBoard(){

}
