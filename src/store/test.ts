import {makeAutoObservable} from 'mobx';

class Todo {
  number = 0;
  title = 'ㅌㅔ스트';

  constructor() {
    makeAutoObservable(this);
  }

  get numberValue() {
    return this.number;
  }

  plus() {
    this.number = 1;
  }

  minus() {
    this.number = -1;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title: string) {
    this.title = title;
  }
}

export const todoStore = new Todo();
