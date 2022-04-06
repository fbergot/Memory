import "./assets/CSS/index.css";
import { $, displayGameInfos } from "./assets/JS/utils/utils";
import State from "./assets/JS/game/State";
import {
   buildArrayCards,
   shuffleArray,
   setBoard,
   setAddEventListener,
   handleClickImg,
} from "./assets/JS/game/game";

let nbCards = 16;

if (window.innerWidth < 450) {
   nbCards = 12;
}
const dataCards = buildArrayCards(nbCards, 2);

setBoard($("#container"), shuffleArray(dataCards));

const filterOncards = $("#filter", true);

displayGameInfos([$("#life"), `Vies: ${State._life}`]);

setAddEventListener(filterOncards, "click", handleClickImg);
