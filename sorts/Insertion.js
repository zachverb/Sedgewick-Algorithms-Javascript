import Sort from './Sort';

export default class Insertion extends Sort {
  constructor() {
    super();
    this.name = 'Insertion Sort';
  }

  sort(array) {
    let length = array.length;
    for (let i = 1; i < length; i++) {
      for(let j = i; j > 0 && this.less(array[j], array[j - 1]); j--) {
        this.exchange(array, j, j - 1);
      }
    }
    return array;
  }
}