class State {
   #state;
   #score;
   #life;
   #lifesPerDefault = 3;
   #incrementScoreRate = 10;
   #cardsFinded;

   constructor(numberOfLife, incScoreRate) {
      this.#state = [];
      this.#score = 0;
      this.#life = numberOfLife ?? this.#lifesPerDefault;
      this.#incrementScoreRate = incScoreRate ?? this.#incrementScoreRate;
      this.#cardsFinded = [];
   }

   isOver() {
      if (this.#life === 0) {
         return [true, "end_lose"];
      }
      if ((16 / 2) * 10 === this._score) {
         return [true, "end_win"];
      }
      return [false, null];
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

const newState = new State(3);

export default newState;
