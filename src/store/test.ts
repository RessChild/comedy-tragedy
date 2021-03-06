import {makeObservable, observable, action} from 'mobx';

class Todo {
  id = Math.random();
  title = '';
  finished = false;

  constructor(title: string) {
    makeObservable(this, {
      title: observable,
      finished: observable,
      toggle: action,
    });
    this.title = title;
  }

  toggle() {
    this.finished = !this.finished;
  }
}

export const todoStore = new Todo('하이');
