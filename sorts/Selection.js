import Sort from './Sort'

export default class Selection extends Sort {
  constructor() {
    super();
    this.name = 'Selection Sort'
  }

  sort(array) {
    for(let i = 0; i < array.length; i++) {
      let minIndex = i;
      for(let j = i; j < array.length; j++) {
        if(array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      this.exchange(array, i, minIndex);
    }
    return array;
  }
}