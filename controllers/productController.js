const Product = require("../models/Product");
const assert = require("assert");
const Definer = require("../lib/mistake");
const product_commentModel = require("../schema/product_comment.model");
const productModel = require("../schema/product.model");
const productComment = require("../schema/product_comment.model");

let productController = module.exports;

productController.getAllProducts = async (req, res) => {
  try {
    console.log("POST: cont/getAllProducts");
    const product = new Product();
    const result = await product.getAllProductsData(req.member, req.body);
    res.json({ state: "success", data: result });
  } catch (err) {
    console.log(`ERROR, cont/getAllProducts, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

productController.getChosenProduct = async (req, res) => {
  try {
    console.log("GET: cont/getChosenProduct");
    const product = new Product(),
      id = req.params.id,
      result = await product.getChosenProductData(req.member, id);

    res.json({ state: "success", data: result });
  } catch (err) {
    console.log(`ERROR, cont/getChosenProduct, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

productController.addProductComment = async (req, res) => {
  try {
    console.log("POST: cont/addProductComment");

    const { product_id, comment_content } = req.body;

    assert.ok(product_id, Definer.comment_err1);
    assert.ok(comment_content, Definer.comment_err2);

    const productComment = new product_commentModel({
      product_id,
      comment_content,
      mb_id: req.member,
    });

    const savedComment = await productComment.save();
    assert.ok(savedComment, Definer.comment_err3);

    // Update the product to include the new comment
    const updatedProduct = await productModel.findByIdAndUpdate(
      product_id,
      { $push: { comments: savedComment._id } },
      { new: true }
    );

    assert.ok(updatedProduct, Definer.comment_err1);

    res.json({ state: "success", data: savedComment });
  } catch (err) {
    console.log(`ERROR, cont/addProductComment, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

productController.getAllProductComments = async (req, res) => {
  try {
    console.log("GET: cont/getAllProductComments");

    const { product_id } = req.params;

    assert.ok(product_id, Definer.comment_err4);

    const comments = await productComment.find({ product_id }).exec();

    res.json({ state: "success", data: comments });
  } catch (err) {
    console.log(`ERROR, cont/getAllProductComments, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

/**************************
 * BSSR RELATED METHODS
 **************************/

productController.addNewProduct = async (req, res) => {
  try {
    console.log("POST: cont/addNewProduct");
    assert(req.files, Definer.general_err3);

    const product = new Product();
    let data = req.body;

    data.product_images = req.files.map((ele) => {
      return ele.path;
    });

    const result = await product.addNewProductData(data, req.member);

    const html = `<script>alert('new product added successfully');
                   window.location.replace('/brand/products/menu');
                  </script>`;
    res.end(html);
  } catch (err) {
    console.log(`ERROR, cont/addNewProduct, ${err.message}`);
  }
};

productController.updateChosenProduct = async (req, res) => {
  try {
    console.log("POST: cont/updateChoosenProduct");
    const product = new Product();
    const id = req.params.id;
    const result = await product.updateChosenProductData(
      id,
      req.body,
      req.member._id
    );
    await res.json({ state: "success", data: result });
  } catch (err) {
    console.log(`ERROR, cont/updateChoosenProduct, ${err.message}`);
  }
};
