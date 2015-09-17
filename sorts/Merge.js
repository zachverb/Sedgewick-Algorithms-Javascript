import Sort from './Sort';

export default class Merge extends Sort {
  constructor() {
    super();
    this.name = 'Merge Sort';
    this.aux;
  }

  sort(array) {
    if(this.isSorted(array)) {
      return array;
    }
    this.aux = [];
    this.sortHelper(array, 0, array.length - 1);
    return array;
  }

  merge(array, low, mid, high) {
    let aux = this.aux;
    let i = low,
          j = mid + 1;
    for (let k = low; k <= high; k++) {
      aux[k] = array[k];
    }
    for (let k = low; k <= high; k++) {
      if (i > mid) {
        array[k] = aux[j++];
      } else if (j > high) {
        array[k] = aux[i++];
      } else if (this.less(aux[j], aux[i])) {
        array[k] = aux[j++];
      } else {
        array[k] = aux[i++];
      }
    }
    return array;
  }

  sortHelper(array, low, high) {
    if(high <= low) {
      return;
    }
    let mid = low + Math.floor((high - low) / 2);
    this.sortHelper(array, low, mid);
    this.sortHelper(array, mid + 1, high);
    this.merge(array, low, mid, high);
  }
}
