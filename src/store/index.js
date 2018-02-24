import { observable, computed, action } from 'mobx';

class State {
    @observable counter = 1;
    @observable name = `Name${this.counter}`;
    @action.bound
    increment () {
      this.counter++;
    }
}

export default { State };
