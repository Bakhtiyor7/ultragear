/**
 * Sonlar ketma-ketligiga qarab berilgan sonni
 * arrayning qaysi indexiga joylashishini belgilang
 */

const findIndex = (arr, n, K) => {
  arr.push(K);
  arr.sort(function (a, b) {
    return a - b;
  });

  return arr;
};

let arr = [1, 3, 5, 6];
let n = arr.length;
let K = 4;

const result = findIndex(arr, n, K);

console.log("result:", result);

// arr.push(K)
//       arr.sort(function (a, b) {
//         return a - b;
//       });
