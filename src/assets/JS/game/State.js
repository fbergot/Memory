class State {
   #state;
   #score;
   #life;
   #lifesPerDefault = 3;

   constructor(numberOfLife) {
      this.#state = [];
      this.#score = 0;
      this.#life = numberOfLife ?? this.#lifesPerDefault;
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

   set _score(value) {
      this.#score = value;
   }

   get _life() {
      return this.#life;
   }

   set _life(value) {
      this.#life = value;
   }

   addItemInState(item) {
      this.#state.push(item);
   }
}

export default State;
