import "./assets/CSS/index.css";
import {
   buildArrayCards,
   shuffleArray,
   setBoard,
   setAddEventListener,
} from "./assets/JS/game/game";

const board = document.querySelector("#container");

const dataCards = buildArrayCards(8);
const shuffleDataCards = shuffleArray(dataCards);

setBoard(board, shuffleDataCards);

const cards = document.querySelectorAll(".card img");

const state = [];

const $ = (event) => {
   event.target.classList.remove("initCard");
   state.push(Number(event.target.dataset.id));
   console.log(state);
};

setAddEventListener(cards, $);
