const authJwt = require("../middleware/authJWT");
const verifySignUp = require("../middleware/verifySignUp");

module.exports = {
  authJwt,
  verifySignUp
};