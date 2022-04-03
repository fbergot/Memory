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

/**
 * @export
 * @param {HTMLElement} target
 * @param {string} message
 */
export function buildAndDisplayPopup(target, message) {
   const container = document.createElement("div");
   const h2 = document.createElement("h2");
   const but = document.createElement("button");

   h2.innerText = message;
   but.innerText = "Rejouer";

   container.appendChild(h2);
   container.appendChild(but);

   container.classList.add("popup");
   h2.classList.add("popup-h2");
   but.classList.add("popup-but");

   target.appendChild(container);
}
