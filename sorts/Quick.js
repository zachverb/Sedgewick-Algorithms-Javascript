import Sort from './Sort';
import { shuffle } from '../helpers/util';

export default class Quick extends Sort {
  constructor() {
    super();
    this.name = 'Quick Sort';
  }

  sort(array) {
    if(this.isSorted(array)) {
      return array;
    };
    array = shuffle(array);
    this.sortHelper(array, 0, array.length - 1);
    return array;
  }

  sortHelper(array, low, high) {
    if(high <= low) {
      return;
    }
    let part = this.partition(array, low, high);
    this.sortHelper(array, low, part - 1);
    this.sortHelper(array, part + 1, high);
  }

  partition(array, low, high) {
    let i = low;
    let j = high + 1;
    let v = array[low];
    while(true) {
      while(this.less(array[++i], v)) {
        if (i === high) {
          break;
        }
      }
      while(this.less(v, array[--j])) {
        if (j === low) {
          break;
        }
      }
      if (i >= j) {
        break;
      }
      this.exchange(array, i, j);
    }
    this.exchange(array, low, j);
    return j;
  }
}