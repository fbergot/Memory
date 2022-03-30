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

const gameState = new State();

const board = $("#container");
const score = $("#score");
const life = $("#life");

const dataCards = buildArrayCards(16, 2);
const shuffleDataCards = shuffleArray(dataCards);

setBoard(board, shuffleDataCards);

const cards = $(".card img", true);

function handleClickImg(event) {
   analyzeGameState(event, gameState, () => alert("ok"));
}
setAddEventListener(cards, handleClickImg);
