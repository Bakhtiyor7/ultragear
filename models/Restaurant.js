const assert = require("assert");
const Definer = require("../lib/mistake.js");
const MemberModel = require("../schema/member.model.js");

class Restaurant {
  constructor() {
    this.memberModel = MemberModel;
  }

  async getAllRestaurantsData() {
    try {
      let result = await this.memberModel
        .find({
          mb_type: "RESTAURANT",
        })
        .exec();

      assert(result, Definer.general_err1);
      return result;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Restaurant;
