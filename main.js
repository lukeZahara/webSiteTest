"use strict";
/*
	WEB 230
	Assignment 7a
	{your name here}
*/

// 1. Create two variables called "playerX" and "playerY". Set them to the DOM element with the id "X" and "Y" respectively.
const playerX = document.querySelector('#X');
const playerO = document.querySelector('#O');

// 2. Add the class "current-player" to the "playerX" element. Notice that the style changes on the "Player X" at the top of the page.
playerX.classList.add('current-player');

// 3. Create a named function with whatever name you like. In this function add a `console.log()` statement to display a message in the console.
const squareClicked = function(event) {
	// 5. In your event handler function, add a statement to get the id of the element with the class "current-player" and save it to a variable. Display this value in the `console.log()` you already have.
	const player = document.querySelector('.current-player').id;
	console.log('Square clicked ' + player);
	// 7. In your event handler function, add a statement to add the class "X-marker" or "O-marker" to the target element depending on who's turn it is.
	event.target.classList.add(player + '-marker');
	// 6. At the end of your event handler function, add a statement to switch the "current-player" class from `playerX` to `playerO` or visa-versa.
	playerX.classList.toggle('current-player');
	playerO.classList.toggle('current-player');
};

// 4. Use a `for` loop to add this function as a `click` event handler to each of the TD elements in the table.
const squares = document.querySelectorAll('td');
for(let square of squares) {
	square.addEventListener('click', squareClicked);
}

// 8. Add an event handler to the "New Game" button to clear all the squares.
document.querySelector('input.button').addEventListener('click', function() {
	for(let square of squares) {
		square.className = '';
	}
});