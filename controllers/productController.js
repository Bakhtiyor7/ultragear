let productController = module.exports;

productController.getAllProducts = async (req, res) => {
  try {
    console.log("GET: cont/getAllProducts");
  } catch {
    console.log(`ERROR, cont/getAllProducts, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

productController.addNewProduct = async (req, res) => {
  try {
    console.log("POST: cont/addNewProduct");
    // TODO: product creation develop

    res.send("OK");
  } catch {
    console.log(`ERROR, cont/addNewProduct, ${err.message}`);
  }
};

productController.updateChoosenProduct = async (req, res) => {
  try {
    console.log("POST: cont/updateChoosenProduct");
  } catch {
    console.log(`ERROR, cont/updateChoosenProduct, ${err.message}`);
  }
};
