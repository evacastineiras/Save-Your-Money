const express = require("express")
const router = express.Router()
const User = require("../controllers/user.controller.js");

router.post("/create", User.createUser);
        
router.get("/get-all", User.findAllUsers);

router.get("/user/:userId", User.findOneUser);

router.put("/user/:userId", User.updateUser);

router.delete("/user/:userId", User.deleteUser);

module.exports = router;
