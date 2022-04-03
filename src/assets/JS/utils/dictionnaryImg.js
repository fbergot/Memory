import Img1 from "../../img/img1-min.png";
import Img2 from "../../img/img2-min.png";
import Img3 from "../../img/img3-min.png";
import Img4 from "../../img/img4-min.png";
import Img5 from "../../img/img5-min.png";
import Img6 from "../../img/img6-min.png";
import Img7 from "../../img/img7-min.png";
import Img8 from "../../img/img8-min.png";

const dictionaryImagesPath = {
   1: Img1,
   2: Img2,
   3: Img3,
   4: Img4,
   5: Img5,
   6: Img6,
   7: Img7,
   8: Img8,
};

/**
 * Get path img from index
 * @param {number} index
 * @returns {string}
 */
export default function getImgPath(index) {
   const stringIndex = index.toString();

   if (stringIndex in dictionaryImagesPath) {
      return dictionaryImagesPath[stringIndex];
   }

   throw Error(`Bad index, given: ${index}`);
}
