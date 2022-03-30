import "./assets/CSS/index.css";
import { $ } from "./assets/JS/utils/utils";
import State from "./assets/JS/game/State";
import {
   buildArrayCards,
   shuffleArray,
   setBoard,
   setAddEventListener,
   analyzeGameState,
} from "./assets/JS/game/game";

const scoreAndLifeTargetHTML = [$("#score"), $("#life")];

const gameState = new State(3);

const dataCards = buildArrayCards(16, 2);

setBoard($("#container"), shuffleArray(dataCards));

const cards = $(".card img", true);

function handleClickImg(event) {
   analyzeGameState(event, gameState, scoreAndLifeTargetHTML);
}

setAddEventListener(cards, "click", handleClickImg);
