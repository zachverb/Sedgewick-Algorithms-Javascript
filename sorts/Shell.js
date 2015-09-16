import Sort from './sort';

export default class Shell extends Sort {
  constructor() {
    super();
    this.name = 'Shell Sort';
  }

  // h-sorted array - every hth entry yields a sorted subsequence
  sort(array) {
    if(this.isSorted(array)) {
      return array;
    }
    let length = array.length;
    let h = 1;
    while (h < Math.round(length / 3)) {
      h = h * 3 + 1;
    }
    while (h >= 1) {
      for (let i = h; i < length; i++) {
        for (let j = i; j >= h && this.less(array[j], array[j-h]); j -= h) {
          this.exchange(array, j, j-h);
        }
      }
      h = Math.round(h/3);
    }
    return array;
  }
}