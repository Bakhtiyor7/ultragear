const mongoose = require("mongoose");
const {
  board_id_enum_list,
  board_article_status_enum_list,
} = require("../lib/config");
const Schema = mongoose.Schema;

const productCommentSchema = new mongoose.Schema(
  {
    product_id: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    comment_content: { type: String, required: true },
    comment_likes: { type: Number, required: false, default: 0 },
    mb_id: { type: Schema.Types.ObjectId, ref: "Member", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductComment", productCommentSchema);
