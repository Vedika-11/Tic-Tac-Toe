# Tic-Tac-Toe
A simple Tic Tac Toe game built using HTML, CSS, and JavaScript.

## Features:
Playable by two players (X and O)

Automatically disables already selected boxes

Displays winner when a player wins

Reset and New Game functionality

## How to Play
1. Open the game in a web browser.

2. Player O starts the game.

3. Players take turns selecting a box.

4. The game announces a winner when three marks align in a row, column, or diagonal.

5. Use the Reset button to clear the board and start a new round.

## Technologies Used
1. HTML

2. CSS

3. JavaScript

## Functionalities Used
#### DOM Manipulation:
Used document.querySelectorAll, document.querySelector, and innerText to manipulate elements.
#### Event Handling:
Added click event listeners to boxes and buttons using addEventListener.
#### Game Logic: 
Implemented a function to check winning conditions based on predefined patterns.
#### Disabling and Enabling Elements: 
Used disabled property to prevent clicking on already selected boxes.
#### Class Manipulation: 
Used classList.remove('hide') and classList.add('hide') to show/hide messages.
#### Reset Button Functionality: 
Resets the game by clearing the board, re-enabling all boxes, and hiding the winner message.

