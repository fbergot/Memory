class State {
   constructor() {
      this.state = [];
   }

   get _state() {
      return this.state;
   }

   set _state(value) {
      this.state = value;
   }

   addItemInState(item) {
      this.state.push(item);
   }
}

export default State;
