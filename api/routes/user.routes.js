const express = require("express")
const { verifyToken } = require("../middleware/authJWT");
const router = express.Router()
const User = require("../controllers/user.controller.js");

      
router.get("/user/:userId",[verifyToken], User.findOneUser);

router.put("/user/:userId",[verifyToken], User.updateUser);

router.delete("/user/:userId",[verifyToken], User.deleteUser);

module.exports = router;
