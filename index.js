const body = document.querySelector('.aim__body');
let timer;
let score = 0;
let remainingTime = 30; 
const header = document.querySelector('.header');
const scoreElement = document.querySelector('.score');
const timerElement = document.querySelector('.timer');

let gameActive = true; 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createElement(x, y) {
    if (!gameActive) return; 
    
    const newElement = document.createElement('div');
    newElement.className = 'circle';
    newElement.style.left = `${x}px`;
    newElement.style.top = `${y}px`;
    body.appendChild(newElement);

    newElement.addEventListener('click', (event) => {
        if (!gameActive) return; 
        
        event.stopPropagation();
        newElement.remove();
        score += 1; 
        scoreElement.textContent = `Score: ${score}`;
        resetTimer(); 
        createElement(getRandomInt(940), getRandomInt(740));
    });

    resetTimer();
}

function resetTimer() {
    if (timer) clearTimeout(timer);
    if (!gameActive) return; 
    
    timer = setTimeout(() => {
        if (!gameActive) return;
        
        document.querySelector('.circle')?.remove();
        createElement(getRandomInt(940), getRandomInt(740));
    }, 2500);
}

function updateTimer() {
    if (remainingTime > 0) {
        remainingTime -= 1;
        timerElement.textContent = `Time: ${remainingTime}`;
    } else {
        endGame();
    }
}

function endGame() {
    gameActive = false; 
    clearInterval(countdownTimer); 
    clearTimeout(timer); 
    header.innerHTML = `<h1 class="over">Game Over! Final Score: ${score}</h1>`;
}

const countdownTimer = setInterval(updateTimer, 1000);

createElement(getRandomInt(940), getRandomInt(740));