/**
Task 1:

let numbers = [2, 34, 1, 34, 54, 4, 109, 45, 999, 5, 23]
ushbu arrayni reverse methodidan foydalanilmagan holatda teskarisiga hosil qiling
yani ohirgi index birinchi va birinch indexdaga value ohiriga otgan holdagi arrayni hosil qiling
 */

function reversedArray(input) {
  let rev = new Array();
  for (var i = input.length - 1; i >= 0; i--) {
    rev.push(input[i]);
  }
  return rev;
}

let numbers = [2, 34, 1, 34, 54, 4, 109, 45, 999, 5, 23];
let revNumbers = reversedArray(numbers);

console.log(revNumbers);
