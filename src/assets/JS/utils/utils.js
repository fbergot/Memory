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
