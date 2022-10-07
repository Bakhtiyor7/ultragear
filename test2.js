/**
 * 1 ~ 10 gacha bogan sonlarni juft va toq sonlarga ajratish,
 * toq sonlar alohida arrayda, juft sonlar alohida array'da bo'lishi kerak;
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function myArray(array) {
  const toq = array.filter((num) => num % 2 === 1);

  const juft = array.filter((num) => num % 2 === 0);

  return { toq: toq, juft: juft };
}

console.log(myArray(numbers));
