## Digital Clock with Background Animation

This project is a digital clock that displays the current time in a 12-hour format, complete with AM/PM. The clock is styled with a visually appealing background image and smooth animation transitions. It updates automatically every second.

## Features
- Displays the current time in HH:MM:SS AM/PM format.
- Dynamically updates the time every second using JavaScript.
- Stylish background images with animation transitions.

## Technologies Used
- HTML: Structure of the clock.
- CSS: Styling, background image animations, and responsive layout.
- JavaScript: Logic for retrieving the current time and updating it every second.

## Folder Structure
- clock.html: Main HTML file that links the CSS and JavaScript files.
- clock.css: Contains the styling, including animations and layout.
- clock.js: Contains the JavaScript logic for the clock functionality.
- images/: Folder containing the background images used for animation.

## How It Works
1. JavaScript Logic:
- The Date object is used to fetch the current time.
setInterval ensures the time updates every second.
Formatting is done using padStart to ensure two-digit display.

2. CSS Animations:
- Background images transition smoothly using the @keyframes rule.

