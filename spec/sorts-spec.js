import chai from 'chai';
import sorts from '../sorts';
import timer from './helpers/timer';
import { TEST_NUM, TEST_SIZE } from './helpers/const';
import { copy, sortAndPrint, generateUnsorted, generateShuffled } from './helpers/util';

let should = chai.should();

let sortTimes = [];

// Tests all sort methods so I only have to write tests once.
describe('Sorts', function() {
  this.timeout(0);
  let unsortedArrays, shuffledArrays, presortedArray, reverseArray;

  before(function() {
    presortedArray = [];
    reverseArray = [];
    for (let j = 0, t = TEST_SIZE; j < t; j++) {
      presortedArray.push(j);
      reverseArray.push(TEST_SIZE - j)
    }
    unsortedArrays = generateUnsorted(TEST_NUM, TEST_SIZE);
    shuffledArrays = generateShuffled(presortedArray, TEST_NUM);
  });

  sorts.forEach(sort => { 
    let Sort = new sort();
    let name = Sort.name;

    describe(name, function() {
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
            reverse: null,
            shuffled: null
          }
        });

        it('should sort unsorted arrays', function() {
          let total = 0;
          for(let i = 0; i < TEST_NUM; i++) {
            let unsorted = copy(unsortedArrays[i]);
            let { result, time } = timer(Sort, 'sort', unsorted);
            Sort.isSorted(result).should.be.true
            total += time;
          }

          times.random = total / TEST_NUM;
        });

        it('should sort shuffled arrays', function() {
          let total = 0;
          for(let i = 0; i < TEST_NUM; i++) {
            let shuffled = copy(shuffledArrays[i]);
            let { result, time } = timer(Sort, 'sort', shuffled);
            Sort.isSorted(result).should.be.true
            total += time;
          }

          times.shuffled = total / TEST_NUM;
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
    sortAndPrint(sortTimes, 'shuffled');
  });
});
