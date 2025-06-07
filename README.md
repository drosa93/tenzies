# 🎲 Tenzies Game

A fun and interactive dice game built with React! The goal is to roll all dice until they show the same number. Click a die to "hold" it in place so it doesn't roll. Try to win in the fewest rolls possible to set a new high score!

---

## 🚀 Features

- 🎯 **Live Score**  
  Track how many rolls you've taken in the current game.

- 🏆 **High Score Tracking**  
  Your best (lowest) roll count is saved using `localStorage`, so it stays even after you refresh the page.

- 🔁 **Reset High Score**  
  Optionally reset your best score and try again from scratch.

- 🎉 **Win Celebration**  
  Confetti animation appears when you win the game.

---

## 📸 Gameplay

1. Click **Roll** to start.
2. Click dice to **hold** numbers you want to keep.
3. Keep rolling until **all 10 dice are held and show the same number**.
4. Try to beat your **best score**!

---

## 🛠️ Tech Stack

- **React**
- **JavaScript (ES6+)**
- **CSS**
- **localStorage** (for best score persistence)

---

## 🧠 How the Game Works

- Each die is an object with a random value (1–6), a unique ID, and an `isHeld` boolean.
- Dice are re-rolled unless they're held.
- When all dice are held and have the same value, the game is won.
- If your current roll count (`score`) is lower than the stored `bestScore`, it's saved to `localStorage`.

---

## 📂 Installation & Setup

1. Clone this repo:
   ```bash
   git clone https://github.com/your-username/tenzies-game.git
   cd tenzies-game
   
2.Install dependencies
  npm install
  
3.Start the dev server:
  npm start


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
