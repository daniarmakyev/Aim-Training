const circle = document.querySelector('.circle')
function createElement(x, y) {
    const newElement = document.createElement('div');
    newElement.className = 'circle';
    newElement.style.left = `${x}px`;
    newElement.style.top = `${y}px`;
    const body = document.querySelector('.aim__body');
    body.appendChild(newElement);

    newElement.addEventListener('click', () => {
        deleteElement(newElement)
        console.log('yes');
    })
}
function deleteElement(newElement){
    newElement.remove()
    createElement(getRandomInt(940), getRandomInt(740));
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
createElement(getRandomInt(940), getRandomInt(740));

