export default class Sort {
  constructor() {
    this.name = 'Base Sort';
  }

  sort(array) {
    if(this.isSorted(array)) {
      return array;
    }
    return array.sort((a, b) => a - b);
  }

  less(a, b) {
    return a < b;
  }

  exchange(array, a, b) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
  }

  show(array) {
    array.forEach(console.log);
  }

  isSorted(array) {
    for(let i = 1; i < array.length; i++) {
      if(this.less(array[i], array[i - 1])) {
        return false
      }
    }
    return true;
  }
}
