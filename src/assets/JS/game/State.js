class State {
   #state;
   #score;
   #life;
   #incrementScoreRate = 10;
   #cardsFinded;
   #numberOfCards = 0;

   constructor(numberOfLife = 8, incScoreRate) {
      this.#state = [];
      this.#score = 0;
      this.#life = numberOfLife;
      this.#incrementScoreRate = incScoreRate ?? this.#incrementScoreRate;
      this.#cardsFinded = [];
   }

   get _state() {
      return this.#state;
   }

   set _state(value) {
      this.#state = value;
   }

   get _score() {
      return this.#score;
   }

   get _life() {
      return this.#life;
   }

   get incrementScoreRate() {
      return this.#incrementScoreRate;
   }

   get _cardsFinded() {
      return this.#cardsFinded;
   }

   set numberOfCard(value) {
      this.#numberOfCards = value;
   }

   isOver() {
      if (this.#life === 0) {
         return true;
      }
      if ((this.#numberOfCards / 2) * this.#incrementScoreRate === this.#score) {
         return true;
      }
      return false;
   }

   addCardsFinded(value) {
      this.#cardsFinded.push(value);
   }

   reInitCardsFinded() {
      this.#cardsFinded = [];
   }

   scoreIncrement() {
      this.#score += this.#incrementScoreRate;
   }

   lifeDecrement() {
      this.#life -= 1;
   }

   addItemInState(item) {
      this.#state.push(item);
   }
}

const newState = new State();

export default newState;
