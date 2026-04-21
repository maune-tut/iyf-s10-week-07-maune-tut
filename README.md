# Week 7: JavaScript Logic & Persistence

## Author
- **Name:** Nyamal Maune
- **GitHub:** [@maune-tut](https://github.com/maune-tut)
- **Date:** April 15, 2026

## Project Description
A shopping cart application that uses centralized state management and persists data across page refreshes using the LocalStorage API. I also implemented a modular file structure to keep code clean and organized.

## Technologies Used
- HTML5 / CSS3
- JavaScript (ES6+ Modules)
- Node.js (npm)
- ESLint & Prettier

## Features
- **Persistent Shopping Cart:** Items are saved in storage, so they don't disappear on refresh.
- **State Management:** Centralized object to track products and cart totals.
- **Modular Code:** Separated storage logic into `js/storage.js`.
- **Auto-Save Form:** Uses sessionStorage for temporary form data.

## How to Run
1. Clone this repository.
2. Run `npm install` to set up tools.
3. Open `index.html` in your browser.

## Lessons Learned
I learned how to use `JSON.stringify` and `JSON.parse` to handle objects in localStorage and how to manage large amounts of files using `.gitignore`.

## Challenges Faced
The biggest challenge was moving from a single JS file to a modular structure. I solved it by organizing everything into a `/js` folder and using `type="module"`.

## Live Demo (if deployed)
[View Live Demo](https://maune-tut.github.io/iyf-s10-week-07-maune-tut/)