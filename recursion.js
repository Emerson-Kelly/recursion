#!/usr/bin/env node

// Fibonacci Iterative

function fibs(int) {
  let fibArray = [0, 1];

  for (let i = 2; i < int; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];

    fibArray[int];
  }

  //console.log(fibArray);
}

fibs(8);


// Fibonacci Recursive

let output = fibsRec(8);
//console.log(output);

function fibsRec(recInt) {
  if (recInt === 1) return [0];
  if (recInt === 2) return [0, 1];

  let recArray = fibsRec(recInt - 1);

  recArray.push(recArray[recArray.length - 1] + recArray[recArray.length - 2]);

  return recArray;
}


//Merge Sort

let mergeOutput = mergeSort([3, 2, 1, 13, 8, 5, 0, 1]);
console.log(mergeOutput);

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}
