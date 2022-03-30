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
