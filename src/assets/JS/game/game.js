import { buildDataOfCard, displayGameInfos } from "../utils/utils";

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
export function setAddEventListener(elements, typeOfEvent, callback) {
   const arrayFromNodeList = Array.from(elements);

   arrayFromNodeList.forEach((element) => {
      element.addEventListener(typeOfEvent, callback);
   });
}

/**
 * @param {Event} event
 * @param {State} state
 * @param {() => void} callbackWhenWin
 */
export function analyzeGameState(event, state, scoreAndLifeTargetHTML) {
   const target = event.target;

   target.classList.remove("initCard");

   if (state._state[0]) {
      if (state._state[0].dataset.id === target.dataset.id) {
         state._state = [];
         removeClassCAndCall(false, target, state, () =>
            winOrLose(state, scoreAndLifeTargetHTML, "win")
         );
         return;
      } else {
         winOrLose(state, scoreAndLifeTargetHTML, "lose");
         removeClassCAndCall(true, target, state);
         return;
      }
   }
   state.addItemInState(target);
}

/**
 * @param {boolean} re_nit
 * @param {Event} e
 * @param {State} state
 * @param {() => void} callback
 */
function removeClassCAndCall(re_nit, target, state, callback) {
   if (re_nit) {
      reInit(target, state, 1000);
   } else {
      callback();
   }
   target.classList.remove("initCard");
}

/**
 * Re init state and add css class on target HTML
 * @param {Event} e
 * @param {State} state
 * @param {number} timeBeforeReinit (in ms)
 */
function reInit(target, state, timeBeforeReinit) {
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
         throw Error("Bad parameter action");
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
         state._score += 10;
         displayGameInfos([target[0], state._score]);
         break;
      case "life":
         state._life -= 1;
         lifeText = state._life <= 1 ? `Vie: ${state._life}` : `Vies: ${state._life}`;
         displayGameInfos([target[1], lifeText]);
         break;
      default:
         throw Error("bad parameter scoreOrLife");
   }
}
