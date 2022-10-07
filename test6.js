/**
 * Members array ichidan "david" va "orif" bo'lsa ajratib bering
 */

const members = ["oscar", "david", "walter", "orif", "shawn", "rawshan"];
const test = ["david", "shawn"];

const result = members.filter((ele) => {
  if (test.includes(ele)) {
    return true;
  } else {
    false;
  }
});

console.log(result);
