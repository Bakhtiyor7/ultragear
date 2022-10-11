/**
 * Bitta class yaratamiz.
Va unda methodlar bo'ladi, constructor bo'lishi shart emas.

1. Kelgan 2 ta datani qabul qilsin. ( 1-data password, 2-data esa phone number)
2. Kelgan datani 1 chisini type string bo'lsa uni hashing qiluvchi bitta methodga borsin va u yerdan javobni olsin.
3. Kelgan datani 2 chisini type number bo'lsa oxirgi 4 ta raqamini yashirib (****) qilib qaytarib beruvchi method bo'lsin.
Va oxirida siz databasega muvaffaqiyatli qo'shildingiz. Sizning ma'lumotlaringiz: 2 ta shriftlangan datani qaytarsin
 */

class Person {
  hashCode = function (s) {
    return s.split("").reduce(function (a, b) {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
  };

  numdHide(num) {
    let hideNum = [];
    for (let i = 0; i < num.length; i++) {
      if (i < num.length - 4) {
        hideNum.push("*");
      } else {
        hideNum.push(num[i]);
      }
    }
    return hideNum.join("");
  }
}

let phoneNum = 123445567;

const person_1 = new Person();
console.log(person_1.hashCode("Baxtiyor"));
console.log(person_1.numdHide(phoneNum));

// Oxirida qaytaradigan stringni bajara olmadim
