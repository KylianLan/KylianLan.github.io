const game = document.getElementById('game');
const resetButton = document.getElementById('reset-game');

const optionnalText = document.getElementById('opt');

const startButton = document.getElementById('start-button');

let cardsVisible = 0;

startButton.addEventListener('click', () => {
    game.classList.remove('disabled');
    resetButton.classList.remove('disabled');
    startButton.classList.add('disabled');

    initGame();
});

resetButton.addEventListener('click', () => {
    game.classList.remove('disabled');
    resetButton.classList.remove('disabled');
    startButton.classList.add('disabled');

    initGame();
});

let dimension = 150;

const filenames = [
    'Cruelty','Curiosity','Falsity',
    'Lovity','Moggity',
    'Verity','VerityCreepyOpen', 'VerityDispleased'
];
const images = filenames.map(name => `./images/${name}.webp`);
let cards = [...images, ...images];


function shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
}

function initGame() {
    game.querySelectorAll('.card').forEach(el => el.remove());
    
    cards = shuffle(cards);

    cards.forEach(card => {
        console.log(card);
        const cardElement = document.createElement('button');
        cardElement.className = 'card card-hidden';
        cardElement.type = 'button';
        cardElement.innerHTML = `
            <span class="card-face card-front"><img src="${card}" alt="Carte"></span>
        `;
        cardElement.setAttribute('aria-label', 'Carte de jeu');
        cardElement.addEventListener('click', () => {
            if (cardsVisible < 2){
                cardElement.classList.remove('card-hidden');
                cardsVisible++;
            }
        });
        game.appendChild(cardElement);
    });
}