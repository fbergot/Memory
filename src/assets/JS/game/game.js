import { buildDataOfCard } from "../utils/utils";
import { state } from "../../../app";

/**
 * Build array of data cards
 * @param {number} numberPairsOfCards
 * @param {number} numberPerCard
 * @returns {{id: number, path: string}[]}
 */
export function buildArrayCards(numberOfElements, numberPerCard) {
   const arrayOfElements = Array(numberOfElements / numberPerCard)
      .fill(0)
      .map((_, index) => {
         return [buildDataOfCard(index + 1), buildDataOfCard(index + 1)];
      });

   return arrayOfElements.flat();
}

/**
 * Shuffle array of data cards
 * @param {any[]} cardsArray
 * @returns {any[]}
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

   for (let card of arrayCards) {
      stringOfCardsHTML += `
            <div class='card'>
               <img data-id='${card.id}' class='initCard' src="${card.path}" alt='card to guess'/>
            </div>
        `;
   }
   target.innerHTML = stringOfCardsHTML;
}

/**
 * Add an event listener in all elements in NodeList
 * @param {NodeList} elements
 * @param {() => void} callback
 */
export function setAddEventListener(elements, callback) {
   const arrayFromNodeList = Array.from(elements);

   arrayFromNodeList.forEach((element) => {
      element.addEventListener("click", callback);
   });
}

/**
 * @param {Event} event
 * @param {State} state
 * @param {() => void} callbackWhenWin
 */
export function analyzeGameState(event, state, callbackWhenWin) {
   const e = event.target;

   e.classList.remove("initCard");

   if (state._state[0]) {
      if (state._state[0].dataset.id === e.dataset.id) {
         state._state = [];
         removeClassCAndCall(false, e, state, callbackWhenWin);
         return;
      } else {
         removeClassCAndCall(true, e, state, callbackWhenWin);
         return;
      }
   }
   state.addItemInState(e);
}

function removeClassCAndCall(re_nit, e, state, callback) {
   if (re_nit) {
      reInit(e, state);
   } else {
      callback();
   }
   e.classList.remove("initCard");
}

function reInit(e, state) {
   window.setTimeout(() => {
      state._state[0].classList.add("initCard");
      e.classList.add("initCard");
      state._state = [];
   }, 1000);
}
