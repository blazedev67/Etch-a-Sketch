const container = document.querySelector('#container');

// loop to create 256 grids

for(let i = 0; i < 256; i++){
    const newDiv = document.createElement('div');
    newDiv.className = "divdrag";
    container.appendChild(newDiv);
};

// Selecting all the squares and storing in a variable
const squares = document.querySelectorAll('.divdrag');

squares.forEach((square) => {
square.addEventListener('mouseenter', () =>{
    square.style.backgroundColor = 'lightblue';
})
});