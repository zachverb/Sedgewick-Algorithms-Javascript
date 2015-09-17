# Sedgewick Algorithms in Javascript

These are my implementations of Sedgewick's Algorithm's book. I have been reading this book in order to improve my knowledge of Data Structures and Algorithms, as well as improve my understanding of Unit Testing and ES6.

Please don't comment asking about why I did these in javascript - I want to expand my knowledge in the language and also improve my algorithmic skills at the same time. I also considered doing this in Ruby, C, or Go, but I chose to focus on Javascript because it's more fun.

## Tests

Run the command ```npm test``` in order to see the results of the times of each of the algorithms. For the sorts, the tests will run 100 times with size 1000 arrays. If you want change these values, you can update the values TEST_NUM and TEST_SIZE respectively within /spec/helpers/const.js

In general, the larger you set these consts, the longer the elementary sorts will take. Generally, if you get above 1000, you should only include the linearithmic sorts. In order to do this, go into /spec/sort-spec.js and alter the second line from ```import { All as sorts } from '../sorts';
``` to ```import { Linearithmic as sorts } from '../sorts';```
