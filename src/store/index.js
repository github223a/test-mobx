import { observable, computed, action } from 'mobx';

class State {
    @observable counter = 1;
    @observable name = `Name1`;
    @action.bound
    increment () {
      this.counter++;
    }
}

export default { State };
