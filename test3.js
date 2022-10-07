/**
 * array hosil qiling arrayni ichidagi qiymatlarda bosh qiymat ham bolsin (null)
 * va agar bosh qiymatlar bolsa ularni delete qiilib qiymati bor arrayni qaytarsin
 */

let numbers = [1, 2, 3, 4, , 5, null, 6, 7, 8, , , 9, null];

let myArray = numbers.filter(function (ele) {
  return ele != null;
});

console.log(myArray);
