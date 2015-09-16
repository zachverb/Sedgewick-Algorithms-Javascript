export let copy = (array) => {
  return array.slice(0);
}

export let sortAndPrint = (array, property) => {
  let arrayCopy = copy(array);

  arrayCopy.sort((a, b) => {
    return a[property] - b[property];
  });

  console.log(property + " ranks: ")
  arrayCopy.forEach((val, index) =>{
    console.log(++index + ': ' + val.name, "averaging", val[property] * 1e-6, "ms");
  });
}

// generates random arrays which may have duplicated values
export let generateUnsorted = (arrayNum, arraySize) => {
  let unsortedArrays = [];
  for(let i = 0; i < arrayNum; i++) {
    let unsorted = [];
    for (let i = 0, t = arraySize; i < t; i++) {
      unsorted.push(Math.round(Math.random() * t))
    }
    unsortedArrays[i] = unsorted;
  }
  return unsortedArrays;
}

// generates a arrayNumber of arrays that shuffles a given array
export let generateShuffled = (array, arrayNum) => {
  let shuffledArrays = [];
  for(let i = 0; i < arrayNum; i++) {
    let arrayCopy = copy(array);
    shuffledArrays.push(shuffle(arrayCopy));
  }
  return shuffledArrays;
}

export let shuffle = (array) => {
  let shuffledArray = copy(array);
  for (var i = shuffledArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[j];
    shuffledArray[j] = temp;
  }
  return shuffledArray;
}