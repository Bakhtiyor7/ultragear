const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const {
  product_collection_enums,
  product_status_enums,
  product_size_enums,
  product_volume_enums,
} = require("../lib/config");

const productSchema = new mongoose.Schema(
  {
    product_name: { type: String, required: true },
    product_collection: {
      type: String,
      required: true,
      enum: {
        values: product_collection_enums,
        message: "{VALUE} is not among permitted enum values",
      },
    },
    product_status: {
      type: String,
      required: false,
      default: "PROCESS",
      enum: {
        values: product_status_enums,
        message: "{VALUE} is not among permitted enum values",
      },
    },
    product_price: {
      type: Number,
      required: true,
    },
    product_discount: {
      type: Number,
      required: false,
      default: 0,
    },
    product_left_cnt: {
      type: Number,
      required: true,
    },
    product_description: { type: String, required: true },
    product_images: { type: Array, required: false, default: [] },
    product_likes: {
      type: Number,
      required: false,
      default: 0,
    },
    product_views: {
      type: Number,
      required: false,
      default: 0,
    },
    brand_mb_id: {
      type: Schema.Types.ObjectId,
      ref: "Member",
      required: false,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "ProductComment",
      },
    ],
  },
  { timestamps: true }
);

productSchema.index({ brand_mb_id: 1, product_name: 1 }, { unique: true });

module.exports = mongoose.model("Product", productSchema);
