// link: https://leetcode.com/problems/binary-search/description/

function search(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const guess = array[middle];
    if (guess === target) {
      return middle;
    }
    if (guess > target) {
      right = middle - 1;
    }
    if (guess < target) {
      left = middle + 1;
    }
  }

  return -1;
}

const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;
const result = search(nums, target);
console.log(result);

const anotherNums = [-1, 0, 3, 5, 9, 12];
const anotherTarget = 2;
const anotherResult = search(anotherNums, anotherTarget);
console.log(anotherResult);
