/**
 * Shunday function yasang, unga ikkita argument kiritilsin, biri array ikkinchisi string.
 * Bu function bizga usha ikkinchida kiritilgan argumentdan
 * (yani string variable) tashqari qiymatlarni qaytarsin
 */
const array = ["Navoi", "Surkhandarya", "Jizzakh"];

function test(a, b) {
  b = a.splice(2);
  console.log(a);
  //   console.log(b);
  //Jizzakh ni arraydan ajratib alohida variablega saqlab oldik.
}

test(array, "");
