class Definer {
  /** general errors */
  static general_err1 = "att: something went wrong!";
  static general_err2 = "att: there is no data with that params!";
  static general_err3 = "att: file upload error!";

  /** member auth related errors */
  static auth_err2 = "att: jwt token creation error";
  static auth_err3 = "att: no member with that mb_nick!";
  static auth_err4 = "att: your credentials do not match!";
  static auth_err5 = "att: you are not authenticated";

  /** product related errors */
  static product_err1 = "att: product creation failed!";

  /** comment related errors */
  static comment_err1 = "product id is not correct!";
  static comment_err2 = "comment content is not correct or not provided!";
  static comment_err3 = "failed to add the comment!!";
  static comment_err4 = "product id is not found!";

  // orders related errors
  static order_err1 = "att: order creation failed!";
  static order_err2 = "att: order item creation failed!";
  static order_err3 = "att: no order exists with that params";

  /** article related errors */
  static article_err1 = "att: author member for article not provided!";
  static article_err2 = "att: not article found for that member!";
  static article_err3 = "att: not articles found for that target!";

  /** follow related errors */
  static follow_err1 = "att: self subscription denied!";
  static follow_err2 = "att: new follow & subscription failed!";
  static follow_err3 = "att: no follow data found!";

  // db realted errors
  static mongo_validation_err1 = "att: mongodb validation failed!";
}

module.exports = Definer;
