const ascendingOrderComparator = function (value1, value2) {
  return value1 - value2;
};

const descendingOrderComparator = function (value1, value2) {
  return value2 - value1;
};

const stringLengthAscendingComparator = function (word1, word2) {
  return word1.length - word2.length;
};

const stringLengthDescendingComparator = function (word1, word2) {
  return word2.length - word1.length;
};

const stringDescendingOrderComparator = function (word1, word2) {
  if (word1 > word2) {
    return -1;
  }

  if (word1 < word2) {
    return 1;
  }

  return 0;
};

const values1 = [1, 50, 42, 23, 111, 56, 19, 20];
const values2 = [1, 50, 42, 23, 111, 56, 19, 20];
const words = ["step", "thoughtworks", "screen", "touchpad", "learnings",
  "ball", "key", "recycling"
];

const evenAndOddComparator = function (number1, number2) {
  if (((number1 + number2) & 1) === 0) {
    return number1 - number2;
  }

  return (number1 & 1) === 0 ? -1 : 1;
};

const numbers = [34, 59, 20, 12, 8, 1, 97, 55, 20];

console.log("before sorting based on even and odd order :", numbers);
console.log("after sorting based on even and odd order :",
  numbers.sort(evenAndOddComparator));

console.log("before sorting in ascending order of alphabet wise :", words);
console.log("after sorting in ascending order of alphabet wise :", words.sort());

console.log("--------------------------------------------");

console.log("before sorting in descending order of alphabet wise :", words);
console.log("after sorting in descending order of alphabet wise :",
  words.sort(stringDescendingOrderComparator));

console.log("--------------------------------------------");

console.log("before sorting in ascending order of lengths :", words);
console.log("after sorting in ascending order of lengths :", words.sort(criteriaOfStringLengthsAsc));

console.log("--------------------------------------------");

console.log("before sorting in descending order of lengths :", words);
console.log("after sorting in descending order of lengths :", words.sort(criteriaOfStringLengthsDsc));

console.log("--------------------------------------------");

console.log("before sorting in ascending order :", values1);
console.log("after sorting in ascending order :",
  values1.sort(criteriaOfAscending));

console.log("--------------------------------------------");

console.log("before sorting in descending order :", values2);
console.log("after sorting in descending order :",
  values2.sort(criteriaOfDescending));
