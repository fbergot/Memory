import {
   buildDataOfCard,
   displayGameInfos,
   buildTargetsHTML,
   $,
   buildAndDisplayPopup,
} from "../utils/utils";
import gameState from "../game/State";

/**
 * Build array of data cards
 * @param {number} numberPairsOfCards
 * @param {number} numberPerCard
 * @returns {{id: number, path: string}[]}
 */
export function buildArrayCards(numberOfElements, numberPerCard) {
   gameState.numberOfCard = numberOfElements;

   const ratioForBuildInitArray = numberOfElements / numberPerCard;
   if (ratioForBuildInitArray % 1 !== 0) {
      throw Error(
         `Ratio numberElements / numberPerCard must be an integer, find: ${ratioForBuildInitArray}`
      );
   }

   const arrayPairsOfElements = Array(ratioForBuildInitArray)
      .fill(0)
      .map((_, index) => {
         return [buildDataOfCard(index + 1), buildDataOfCard(index + 1)];
      });

   return arrayPairsOfElements.flat();
}

/**
 * Randomize elements in an Array
 * @param {any[]} cardsArray
 * @returns {any[]} (new Array)
 */
export function shuffleArray(cardsArray) {
   return [...cardsArray.sort(() => Math.random() - 0.5)];
}

/**
 * Build game board
 * @param {HTMLElement} target
 * @param {{id: number, path: string}[]} arrayCards
 */
export function setBoard(target, arrayCards) {
   let stringOfCardsHTML = "";

   arrayCards.forEach((card, index) => {
      stringOfCardsHTML += `
            <div class='card'>
               <div class="container-img">
                  <img src="${card.path}" alt='card to guess'/>
                  <div data-target="${index}" data-id='${card.id}' id="filter" class='filter initCard'></div>
               </div>
            </div>
        `;
   });
   target.innerHTML = stringOfCardsHTML;
}

export function handleClickImg(event) {
   analyzeGameState(event, gameState, buildTargetsHTML());
}

/**
 * @param {Event} event
 * @param {State} state
 * @param {() => void} callbackWhenWin
 */
export function analyzeGameState(event, gameState, scoreAndLifeTargetHTML) {
   const target = event.target;
   const keyCurrCardTry = target.dataset.target;

   target.classList.remove("initCard");

   if (gameState._state[0]) {
      if (gameState._state[0].dataset.id === target.dataset.id) {
         removeListener([target, gameState._state[0]], "click", handleClickImg);
         gameState._state = [];
         winOrLose(gameState, scoreAndLifeTargetHTML, "win");
      } else {
         winOrLose(gameState, scoreAndLifeTargetHTML, "lose");
         reInitAfterTry(target, gameState, 1000);
      }
      gameState.reInitCardsFinded();
      gameState.addCardsFinded(keyCurrCardTry);
      return;
   }
   // also in beginning
   gameState.addItemInState(target);
}

/**
 * Re init state and add css class on target HTML
 * @param {HTMLElement} target
 * @param {State} state
 * @param {number} timeBeforeReinit (in ms)
 */
function reInitAfterTry(target, state, timeBeforeReinit) {
   window.setTimeout(() => {
      state._state[0].classList.add("initCard");
      target.classList.add("initCard");
      state._state = [];
   }, timeBeforeReinit);
}

/**
 * @param {State} state
 * @param {HTMLElement[]} targetsHTML
 * @param {string} action
 */
function winOrLose(state, targetsHTML, action) {
   // for bonus end of game
   let scoreMultiplyPerLife;

   switch (action) {
      case "win":
         updateGameState(targetsHTML, "score", state);
         if (state.isOver()) {
            scoreMultiplyPerLife = state._score * state._life;
            addBlur("#game-cont");
            displayGameInfos([targetsHTML[0], scoreMultiplyPerLife]);
            createPopUp($("main"), true, scoreMultiplyPerLife);
         }
         break;
      case "lose":
         updateGameState(targetsHTML, "life", state);
         if (state.isOver()) {
            addBlur("#game-cont");
            createPopUp($("main"), false, state._score);
         }
         break;
      default:
         throw Error(`Bad parameter action, given: ${action}`);
   }
}

/**
 * @param {string} tagOfTarget
 */
function addBlur(tagOfTarget) {
   $(tagOfTarget).classList.add("blur");
}

/**
 * Update game interface (score, life)
 * @param {HTMLElement[]} target
 * @param {string} scoreOrLife
 * @param {State} state
 */
function updateGameState(target, scoreOrLife, state) {
   let lifeText = "";

   switch (scoreOrLife) {
      case "score":
         state.scoreIncrement();
         displayGameInfos([target[0], state._score]);
         break;
      case "life":
         state.lifeDecrement();
         lifeText = state._life <= 1 ? `Vie: ${state._life}` : `Vies: ${state._life}`;
         displayGameInfos([target[1], lifeText]);
         break;
      default:
         throw Error(`bad parameter scoreOrLife, given: ${scoreOrLife}`);
   }
}

/**
 * Add an event listener in all elements in NodeList
 * @param {NodeList} elements
 * @param {string} typeOfEvent
 * @param {() => void} callback
 */
export function setAddEventListener(elements, typeOfEvent, callback) {
   const arrayFromNodeList = [...elements];

   arrayFromNodeList.forEach((element) => {
      element.addEventListener(typeOfEvent, callback, false);
   });
}

/**
 * Add an event listener on all elements in a NodeList
 * @param {HTMLElement} elements
 * @param {string} typeOfEvent
 * @param {() => void} callback
 */
export function removeListener(elements, typeOfEvent, callback) {
   elements.forEach((element) => {
      element.removeEventListener(typeOfEvent, callback, false);
   });
}

/**
 * @param {HTMLElement} target
 * @param {boolean} winOrLose
 * @param {number} score
 */
function createPopUp(target, winOrLose, score) {
   let message;
   switch (true) {
      case winOrLose:
         message = strMessWinOrLose("gagné", score);
         buildAndDisplayPopup(target, message);
         break;
      case !winOrLose:
         message = strMessWinOrLose("perdu", score);
         buildAndDisplayPopup(target, message);
   }
}

/**
 * @param {["win", "lose"]} wOrL (like tupple lol)
 * @param {string | number} score
 * @returns {string}
 */
function strMessWinOrLose(wOrL, score) {
   return `Vous avez ${wOrL} ! votre score: ${score}`;
}
