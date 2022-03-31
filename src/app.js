import "./assets/CSS/index.css";
import { $ } from "./assets/JS/utils/utils";
import {
   buildArrayCards,
   shuffleArray,
   setBoard,
   setAddEventListener,
   handleClickImg,
} from "./assets/JS/game/game";

const dataCards = buildArrayCards(16, 2);

setBoard($("#container"), shuffleArray(dataCards));

const cards = $("#filter", true);

setAddEventListener(cards, "click", handleClickImg);
