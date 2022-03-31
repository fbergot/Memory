import { buildDataOfCard, displayGameInfos, buildTargetsHTML } from "../utils/utils";
import gameState from "../game/State";

/**
 * Build array of data cards
 * @param {number} numberPairsOfCards
 * @param {number} numberPerCard
 * @returns {{id: number, path: string}[]}
 */
export function buildArrayCards(numberOfElements, numberPerCard) {
   const ratioForBuildInitArray = numberOfElements / numberPerCard;
   if (ratioForBuildInitArray % 1 !== 0) {
      throw Error(
         `Ratio numberElements / numberPerCard must be integer, find: ${ratioForBuildInitArray}`
      );
   }

   const arrayOfPairsOfElements = Array(ratioForBuildInitArray)
      .fill(0)
      .map((_, index) => {
         return [buildDataOfCard(index + 1), buildDataOfCard(index + 1)];
      });

   return arrayOfPairsOfElements.flat();
}

/**
 * Shuffle elements in an Array
 * @param {any[]} cardsArray
 * @returns {any[]} (new Array)
 */
export function shuffleArray(cardsArray) {
   const shuffledArray = [...cardsArray.sort(() => Math.random() - 0.5)];
   return shuffledArray;
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
               <div data-target="${index}" data-id='${card.id}' class="container-img">
                  <img data-target="${index}" data-id='${card.id}' src="${card.path}" alt='card to guess'/>
                  <div data-target="${index}" data-id='${card.id}'  class='filter initCard'></div>
               </div>
            </div>
        `;
   });
   target.innerHTML = stringOfCardsHTML;
}

/**
 * @param {Event} event
 * @param {State} state
 * @param {() => void} callbackWhenWin
 */
export function analyzeGameState(event, gameState, scoreAndLifeTargetHTML) {
   const target = event.target.offsetParent.children[0].children[0];
   const keyCurrCardTry = target.dataset.target;

   event.target.classList.remove("initCard");

   if (~gameState._cardsFinded.indexOf(keyCurrCardTry)) {
      alert("Vous ne pouvez pas jouer cette carte !");
      gameState.reInitCardsFinded();
      return;
   }

   if (gameState._state[0]) {
      if (gameState._state[0].dataset.id === target.dataset.id) {
         removeListener([event.target, gameState._state[0]], "click", handleClickImg);
         gameState._state = [];
         removeClassCAndCall(
            false,
            event.target,
            gameState,
            () => winOrLose(gameState, scoreAndLifeTargetHTML, "win"),
            event.target
         );
      } else {
         winOrLose(gameState, scoreAndLifeTargetHTML, "lose");
         removeClassCAndCall(true, event.target, gameState, "", event.target);
      }
      gameState.reInitCardsFinded();
      gameState.addCardsFinded(keyCurrCardTry);
      return;
   }
   // also beginning
   gameState.addCardsFinded(keyCurrCardTry);
   gameState.addItemInState(event.target);
}

/**
 * @param {boolean} re_nit
 * @param {Event} e
 * @param {State} state
 * @param {() => void} callback
 */
function removeClassCAndCall(re_nit, target, state, callback, filterELement) {
   if (re_nit) {
      reInit(target, state, 1000, filterELement);
   } else {
      callback();
   }
}

/**
 * Re init state and add css class on target HTML
 * @param {Event} e
 * @param {State} state
 * @param {number} timeBeforeReinit (in ms)
 */
function reInit(target, state, timeBeforeReinit, filterTarget) {
   window.setTimeout(() => {
      state._state[0].classList.add("initCard");
      filterTarget.classList.add("initCard");
      state._state = [];
   }, timeBeforeReinit);
}

/**
 * @param {State} state
 * @param {HTMLElement[]} targetsHTML
 * @param {string} action
 */
function winOrLose(state, targetsHTML, action) {
   switch (action) {
      case "win":
         updateGameState(targetsHTML, "score", state);
         alert("win");
         break;
      case "lose":
         updateGameState(targetsHTML, "life", state);
         alert("lose");
         break;
      default:
         throw Error(`Bad parameter action, given: ${action}`);
   }
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

export function handleClickImg(event) {
   analyzeGameState(event, gameState, buildTargetsHTML());
}

/**
 * Add an event listener in all elements in NodeList
 * @param {NodeList} elements
 * @param {string} typeOfEvent
 * @param {() => void} callback
 */
export function setAddEventListener(elements, typeOfEvent, callback) {
   const arrayFromNodeList = Array.from(elements);

   arrayFromNodeList.forEach((element) => {
      element.addEventListener(typeOfEvent, callback, {
         useCapture: false,
      });
   });
}

/**
 * Add an event listener in all elements in NodeList
 * @param {HTMLElement} elements
 * @param {string} typeOfEvent
 * @param {() => void} callback
 */
export function removeListener(elements, typeOfEvent, callback) {
   elements.forEach((element) => {
      element.removeEventListener(typeOfEvent, callback, true);
   });
}
