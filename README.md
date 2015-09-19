# Sedgewick Algorithms in Javascript

These are my implementations of Sedgewick's Algorithm's book. I have been reading this book in order to improve my knowledge of Data Structures and Algorithms, as well as improve my understanding of Unit Testing and ES6.

Please don't comment asking about why I did these in javascript - I want to expand my knowledge in the language and also improve my algorithmic skills at the same time. I also considered doing this in Ruby, C, or Go, but I chose to focus on Javascript because it's more fun.

## Tests

Run the command ```npm test``` in order to see the results of the times of each of the algorithms. For the sorts, the tests will run 100 times with size 1000 arrays. If you want change these values, you can update the values TEST_NUM and TEST_SIZE respectively within /helpers/const.js

When your TEST_SIZE exceeds 1000, the Elementary sorts generally slow down more than you would want (unless you like waiting more than a minute for your times to complete). Because of this, I would suggest only including the Linearithmic sorts in your tests. To do this, go back into the const file and update the first line from ```import { All as sorts } from '../sorts';``` to ```import { Linearithmic as sorts } from '../sorts';```
