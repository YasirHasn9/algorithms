// link: https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer-solutions/

function maximumCountLinar(array) {
  const pos = array.filter((num) => num > 0).length;
  const neg = array.filter((num) => num < 0).length;

  return Math.max(pos, neg);
}

const nums = [-2, -1, -1, 1, 2, 3];
console.log(maximumCountLinar(nums));
