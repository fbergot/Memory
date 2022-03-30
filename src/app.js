import "./assets/CSS/index.css";
import { $ } from "./assets/JS/utils/utils";
import {
   buildArrayCards,
   shuffleArray,
   setBoard,
   setAddEventListener,
} from "./assets/JS/game/game";

const board = $("#container");
const score = $("#score");
const life = $("#life");

const dataCards = buildArrayCards(8);
const shuffleDataCards = shuffleArray(dataCards);

setBoard(board, shuffleDataCards);

const cards = $(".card img", true);

let state = [];

const handleClickImg = (event) => {
   event.target.classList.remove("initCard");
   if (state[0]) {
      if (state[0].dataset.id === event.target.dataset.id) {
         state = [];
         event.target.classList.remove("initCard");
         alert("gagner");
         return;
      } else {
         event.target.classList.remove("initCard");
         reInit();
         return;
      }
   }
   state.push(event.target);

   function reInit() {
      window.setTimeout(() => {
         state[0].classList.add("initCard");
         event.target.classList.add("initCard");
         state = [];
      }, 1000);
   }
};

setAddEventListener(cards, handleClickImg);
