const Definer = require("../lib/mistake");
const Member = require("../models/Member");
const Product = require("../models/Product");
const assert = require("assert");
const Brand = require("../models/Brand");

let brandController = module.exports;

brandController.getBrands = async (req, res) => {
  try {
    console.log("GET: cont/getBrands");
    const data = req.query,
      brand = new Brand(),
      result = await brand.getBrandsData(req.member, data);
    res.json({ state: "success", data: result });
  } catch (err) {
    console.log(`ERROR, cont/getBrands, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

brandController.getChosenBrand = async (req, res) => {
  try {
    console.log("GET: cont/getChosenBrand");
    const id = req.params.id,
      getBrands = new Brand(),
      result = await getBrands.getChosenBrandData(req.member, id);

    res.json({ state: "success", data: result });
  } catch (err) {
    console.log(`ERROR, cont/getChosenBrand, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

/**************************
 * BSSR RELATED METHODS
 **************************/

brandController.home = (req, res) => {
  try {
    console.log("GET: cont/home");
    res.render("home-page");
  } catch (err) {
    console.log(`ERROR, cont/home, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

brandController.getMyBrandProducts = async (req, res) => {
  try {
    console.log("GET: cont/getMyBrandProducts");
    const product = new Product();
    const data = await product.getAllProductsDataBrand(res.locals.member);
    res.render("brand-menu", { brand_data: data });
  } catch (err) {
    console.log(`ERROR, cont/getMyBrandProducts, ${err.message}`);
    res.redirect("/brand");
  }
};

brandController.getSignupMyBrand = async (req, res) => {
  try {
    console.log("GET: cont/getSignupMyBrand");
    res.render("signup");
  } catch (err) {
    console.log(`ERROR, cont/signup, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

brandController.signupProcess = async (req, res) => {
  try {
    console.log("POST: cont/signupProcess");
    assert(req.file, Definer.general_err3);

    let new_member = req.body;
    new_member.mb_type = "BRAND";
    new_member.mb_image = req.file.path;

    const member = new Member();
    const result = await member.signupData(new_member);
    assert(req.file, Definer.general_err1);

    req.session.member = result;
    res.redirect("/brand/products/menu");
  } catch (err) {
    console.log(`ERROR, cont/sign-up, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

brandController.getLoginMyBrand = async (req, res) => {
  try {
    console.log("GET: cont/getLoginMyBrand");
    res.render("login-page");
  } catch (err) {
    console.log(`ERROR, cont/getLoginMyBrand, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

brandController.loginProcess = async (req, res) => {
  try {
    console.log("POST: cont/loginProcess");
    const data = req.body,
      member = new Member(),
      result = await member.loginData(data);

    req.session.member = result;
    req.session.save(function() {
      result.mb_type === "ADMIN"
        ? res.redirect("/brand/all-brand")
        : res.redirect("/brand/products/menu");
    });
  } catch (err) {
    console.log(`ERROR, cont/login, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

brandController.logout = (req, res) => {
  try {
    console.log("GET cont/logout");
    req.session.destroy(function() {
      res.redirect("/brand");
    });
  } catch (err) {
    console.log(`ERROR, cont/logout, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

brandController.validateAuthBrand = (req, res, next) => {
  if (req.session?.member?.mb_type === "BRAND") {
    req.member = req.session.member;
    next();
  } else
    res.json({
      state: "fail",
      message: "Only authenticated members with brand type are allowed",
    });
};

brandController.checkSessions = (req, res) => {
  if (req.session?.member) {
    res.json({ state: "success", data: req.session.member });
  } else {
    res.json({ state: "fail", message: "You are not authenticated." });
  }
};

brandController.validateAdmin = (req, res, next) => {
  if (req.session?.member?.mb_type === "ADMIN") {
    req.member = req.session.member;
    next();
  } else {
    const html = `<script>
       alert('Admin page: Persmission denied!');
       window.location.replace('/brand');
     </script>`;
    res.end(html);
  }
};

brandController.getAllBrands = async (req, res) => {
  try {
    console.log("GET cont/getAllBrands");

    const brand = new Brand();
    const brands_data = await brand.getAllBrandsData();
    console.log("brands_data:", brands_data);
    res.render("all-brands", { brands_data: brands_data });
  } catch (err) {
    console.log(`ERROR, cont/getAllBrands, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

brandController.updateBrandByAdmin = async (req, res) => {
  try {
    console.log("GET cont/updateBrandByAdmin");
    const brand = new Brand();
    const result = await brand.updateBrandByAdmin(req.body);
    await res.json({ state: "success", data: result });
  } catch (err) {
    console.log(`ERROR, cont/updateBrandByAdmin, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};
