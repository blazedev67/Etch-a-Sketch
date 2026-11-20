const container = document.querySelector('#container');

// loop to create 256 grids

for(let i = 0; i < 256; i++){
    const newDiv = document.createElement('div');
    newDiv.className = "divdrag";
    container.appendChild(newDiv);
};

// Selecting all the squares and storing in a variable
const squares = document.querySelectorAll('.divdrag');

// Adding the hover ro change color effect to all the squares
squares.forEach((square) => {
square.addEventListener('mouseenter', () =>{
    square.style.backgroundColor = 'lightblue';
})
});

const btn = document.querySelector('#btn');

btn.addEventListener('click', () =>{
   let userInput = prompt('How many squares per side would you like?');
   let grideSize = Number(userInput);
    //   console.log(typeof(gradeSize));
  while(!Number.isInteger(grideSize) || 
grideSize < 1 ||
grideSize > 100){
     userInput = prompt('Invalid size! Enter a number between 1 and 100')
    grideSize = Number(userInput);
}
  
});