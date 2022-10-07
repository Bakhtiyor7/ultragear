/**
 *bitta object hosil qilinsin va insertUser() methodi bolsin, 
 u yerga name, password parametrlarini qabul qilsin. agar name yoki passwordni 
 uzunligi 4 tadan kam bolsa qabul qilmasin va errorni consolega chiqarsin 
 agar 4 tadan ko’p bo’lsa xush kelibsiz <ismi> ni chiqarsin
 */

const obj = {
  insertUser(name, password) {
    if (name.length <= 4 || password.length <= 4) {
      console.error("you need to enter more than 4 characters!");
    } else {
      console.log(`Xush kelibsiz ${name}!`);
    }
  },
};

obj.insertUser("Leonardo", "Leo1998");
