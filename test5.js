/**
 * Shunday function yasang, unga ikkita argument kiritilsin, biri array ikkinchisi string.
 * Bu function bizga usha ikkinchida kiritilgan argumentdan
 * (yani string variable) tashqari qiymatlarni qaytarsin
 */

let array = ["ali", "mahliyoni", "sevadi"];
let str = "sevadi";

function result(a, b) {
  a = a.filter(function (ele) {
    return ele !== b;
  });
  console.log(a);
}

result(array, str);
