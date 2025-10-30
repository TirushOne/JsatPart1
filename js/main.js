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

array.sort((a, b) => a - b);
console.log(array);