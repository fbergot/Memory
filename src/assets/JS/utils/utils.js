/**
 * Return an or many HTML elements
 * @param {string} tag
 * @param {true | undefined} isAll
 * @return {HTMLElement | NodeList}
 */
export function $(tag, isAll) {
   return isAll ? document.querySelectorAll(tag) : document.querySelector(tag);
}
