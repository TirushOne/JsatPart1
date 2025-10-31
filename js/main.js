// find the index of an element in a sorted array in O(log2(n)) time.
// returns the index of the element if it is found, otherwise return -1, as per point 6.
function binarySearch(array, target) {
    // the left-most bound of the search range (inclusive)
    let l = 0;
    // the right-most bound of the search range (exclusive)
    let r = array.length;

    while (l < r) {
        // the mid point of the search range
        let m = Math.floor((l + r) / 2);

        if (array[m] < target) {
            l = m + 1;
        } else if (array[m] > target) {
            r = m;
        } else {
            return m;
        }
    }

    return -1;
}

test(
  "Binary search example",
  () => {
    let arr = [1, 2, 3, 4];
    console.log(`searching the following array: ${arr} \n for the number 3`);
    let res = binarySearch(arr, 3);
    console.log(`returned index: ${res}`);
    return res == 2;
  }
);

test(
  "Binary search item not found example",
  () => {
    let arr = [1, 2, 3, 4];
    console.log(`searching the following array: ${arr} \n for the number 5`);
    let res = binarySearch(arr, 5);
    console.log(`returned index:  ${res}`);
    return res == -1;
  }
);

// finds the index of an element in an array in O(n) time.
// returns the index of the element if it is found, otherwise returns -1, as per point 5.
function sequencialSearch(array, value) {
    // i is the current index being searched
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }

    return -1;
}

test(
  "Seqntial search example",
  () => {
    let arr = [4, 7, 6];
    console.log(`searching the following array: ${arr} \n for the number 7`);
    let res = binarySearch(arr, 7);
    console.log(`returned index:  ${res}`);
    return res == 2;
  }
);

test(
  "Sequential search item not found example",
  () => {
    let arr = [4, 7, 6];
    console.log(`searching the following array: ${arr} \n for the number 8`);
    let res = binarySearch(arr, 8);
    console.log(`returned index:  ${res}`);
    return res == -1;
  }
);

// removes a value from a sorted array using bineary search.
function removeValue(array, value) {
    let i = binarySearch(array, value);

    if (i == -1) {
        return;
    }

    array.splice(i, 1);
}

// array for question 1.1
let array = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
console.log(array);

// answer for question 1.3
array.push(19);
array.push(23);
array.push(30);
array.sort((a, b) => a - b);

console.log(array);

// removes a target value from an array. 
// it must exist though or else unepected results may occure.
function removeValue(array, target) {
  let index = binarySearch(array, target);
  array.splice(index, 1);
}

// answer for question 1.4
removeValue(array, 8);
removeValue(array, 31);

function test(name, func) {
  console.log(`starting test: ${name}`);
  let result = func() ? "test completed succesfully" : "test failed";
  console.log(result);
}

test(
  "Squential Search 1",
  () => {
    let arr = [1, 2, 3, 4, 5];
    return sequencialSearch(arr, 3) == 2;
  }
);

test(
  "Sequntial Search 2",
  () => {
    let arr = [71, 4, 8, 3, 5];
    return sequencialSearch(arr, 3) == 3;
  }
);

test(
  "Sequential Search 3",
  () => {
    let arr = [16, 12, 48, 21];
    return sequencialSearch(arr, 3) == -1;
  }
)

test(
  "Binary Search 1",
  () => {
    let arr = [2, 3, 7, 9];
    return binarySearch(arr, 2) == 0;
  }
)

test(
  "Binary Search 2",
  () => {
    let arr = [-14, 14, 15, 16];
    return binarySearch(arr, -14) == 0;
  }
)

test(
  "Binary Search 3",
  () => {
    let arr = [21, 92, 103];
    return binarySearch(arr, 12) == -1;
  }
)


