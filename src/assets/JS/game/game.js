import getImgPath from "../utils/dictionnaryImg";

/**
 * Build array of data cards
 * @param {number} numberPairsOfCards
 * @returns {{id: number, path: string}[]}
 */
export function buildArrayCards(numberPairsOfCards) {
   const array = [];
   let i;
   let y;

   for (i = 1; i <= numberPairsOfCards; i++) {
      for (y = 0; y < 2; y++) {
         array.push({ id: i, path: getImgPath(i) });
      }
   }

   return array;
}

/**
 * Shuffle array of data cards
 * @param {any[]} cardsArray
 * @returns {{id: number, path: string}[]}
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
   let cardsHTML = "";

   for (let card of arrayCards) {
      cardsHTML += `
            <div class='card'><img data-id='${card.id}' class='initCard' src="${card.path}" alt='card to guess'/></div>
        `;
   }
   target.innerHTML = cardsHTML;
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
