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

const dataCards = buildArrayCards(16, 2);

setBoard($("#container"), shuffleArray(dataCards));

const filterOncards = $("#filter", true);

displayGameInfos([$("#life"), `Vies: ${State._life}`]);

setAddEventListener(filterOncards, "click", handleClickImg);
