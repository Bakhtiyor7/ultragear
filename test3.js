/**
 * array hosil qiling arrayni ichidagi qiymatlarda bosh qiymat ham bolsin (null)
 * va agar bosh qiymatlar bolsa ularni delete qiilib qiymati bor arrayni qaytarsin
 */

var numbers = [1, 3, 4, 5, , 6, null, 8, 9, 10, , , 11, null];

var Array = numbers.filter(function (ele) {
  return ele != null;
});

console.log(Array);
