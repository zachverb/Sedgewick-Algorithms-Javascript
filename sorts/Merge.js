import Sort from './Sort';

export default class Merge extends Sort {
  constructor() {
    super();
    this.name = 'Merge Sort';
  }

  sort(array) {
    if(this.isSorted(array)) {
      return array;
    }
    let aux = [];

    let merge = (array, low, mid, high) => {
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

    let sortHelper = (array, low, high) => {
      if(high <= low) {
        return;
      }

      let mid = low + Math.floor((high - low) / 2);

      sortHelper(array, low, mid);
      sortHelper(array, mid + 1, high);
      merge(array, low, mid, high);
    }

    sortHelper(array, 0, array.length - 1);

    return array;
  }
}