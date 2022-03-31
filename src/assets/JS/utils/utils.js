import getImgPath from "../utils/dictionnaryImg";
/**
 * Return an or many HTML elements
 * @param {string} tag
 * @param {true | undefined} isAll
 * @return {HTMLElement | NodeList}
 */
export function $(tag, All) {
   return All ? document.querySelectorAll(tag) : document.querySelector(tag);
}

/**
 * @param {number} index
 * @return {{id: number, path: string}}
 */
export function buildDataOfCard(index) {
   return { id: index, path: getImgPath(index) };
}

/**
 * Display game data (score, life) in target HTML
 * @param {[HTMLElement, string | number]} targetAndValue
 */
export function displayGameInfos(targetAndValue) {
   targetAndValue[0].innerText = targetAndValue[1];
}

export function buildTargetsHTML() {
   return [$("#score"), $("#life")];
}

export function buildAndDisplayPopup(target, message) {
   const container = document.createElement("div");
   container.classList.add("popup");
   const stringHTMLPopup = `
      <h2>${message}</h2>
      <div class='cont-but>
         <button type='button' id='reload'>Rejouer</button>
      </div>`;
   container.innerHTML = stringHTMLPopup;
   target.appendChild(container);
}
