class Definer {
  /** general errors */
  static general_err1 = "att: something went wrong!";
  static general_err2 = "att: there is no data with that params!";
  static general_err3 = "att: file upload error!";

  /** member auth related errors */
  static auth_err1 = "att: mongodb validation failed!";
  static auth_err2 = "att: jwt token creation error";
  static err_auth3 = "att: no member with that mb_nick!";
  static err_auth4 = "att: your credentials do not match!";

  /** product related errors */
  static product_err1 = "att: product creation failed!";
}

module.exports = Definer;
