import chai from 'chai';
import sorts from '../sorts';
import timer from './helpers/timer';
import { TEST_NUM, TEST_SIZE } from './helpers/const';

let should = chai.should();

let sortTimes = [];

let copy = (array) => {
  return array.slice(0);
}

let sortAndPrint = (array, property) => {
  let arrayCopy = copy(array);

  arrayCopy.sort((a, b) => {
    return a[property] - b[property];
  });

  console.log(property + " ranks: ")
  arrayCopy.forEach((val, index) =>{
    console.log(++index + ': ' + val.name, "averaging", val[property] * 1e-6, "ms");
  });
}

let generateUnsorted = () => {
  let unsortedArrays = [];
  for(let i = 0; i < TEST_NUM; i++) {
    let unsorted = [];
    for (let i = 0, t = TEST_SIZE; i < t; i++) {
      unsorted.push(Math.round(Math.random() * t))
    }
    unsortedArrays[i] = unsorted;
  }
  return unsortedArrays;
}

// Tests all sort methods so I only have to write tests once.
describe('Sorts', function() {
  let unsortedArrays, presortedArray, reverseArray;

  before(function() {
    unsortedArrays = generateUnsorted();
    presortedArray = [];
    reverseArray = [];
    for (let j = 0, t = TEST_SIZE; j < t; j++) {
      presortedArray.push(j);
      reverseArray.push(TEST_SIZE - j)
    }
  });

  sorts.forEach(sort => { 
    let Sort = new sort();
    let name = Sort.name;

    describe(name, function() {
      this.timeout(0);

      describe('isSorted function', function() {
        it('should return false for an unsorted array', function() {
          Sort.isSorted([2, 3, 1, 4]).should.be.false;
        });

        it('should return true for a sorted array', function() {
          Sort.isSorted([1, 2, 3, 4]).should.be.true;
        });

        it('should return true for an empty array', function() {
          Sort.isSorted([]).should.be.true;
        })
      });

      describe('sort function', function() {
        let times;

        before(function() {
          times = {
            name,
            random: null,
            presorted: null,
            reverse: null
          }
        });

        it('should sort an unsorted array', function() {
          let total = 0;
          for(let i = 0; i < TEST_NUM; i++) {
            let unsorted = copy(unsortedArrays[i]);
            let { result, time } = timer(Sort, 'sort', unsorted);
            Sort.isSorted(result).should.be.true
            total += time;
          }

          times.random = total / TEST_NUM;
        });

        it('should keep a preSorted array sorted', function() {
          let total = 0;
          for(let i = 0; i < TEST_NUM; i++) {
            let presorted = copy(presortedArray);
            let { result, time } = timer(Sort, 'sort', presorted);
            Sort.isSorted(result).should.be.true;
            total += time;
          }
          times.presorted = total / TEST_NUM;
        });

        it('should reverse a backwards sorted array', function() {
          let total = 0;
          for(let i = 0; i < TEST_NUM; i++) {
            let reverse = copy(reverseArray);
            let { result, time } = timer(Sort, 'sort', reverse);
            Sort.isSorted(result).should.be.true;
            total += time;
          }

          times.reverse = total / TEST_NUM;
        });

        after(function() {
          sortTimes.push(times);
        });
      });
    });
  });

  after(function() {
    sortAndPrint(sortTimes, 'random');
    sortAndPrint(sortTimes, 'presorted');
    sortAndPrint(sortTimes, 'reverse');
  });
});
