const express = require("express")
const { verifyToken } = require("../middleware/authJWT");
const router = express.Router()
const Spent = require("../controllers/spent.controller.js");

router.post("/create-spent",[verifyToken], Spent.createSpent);
        
router.get("/get-all-spents",[verifyToken], Spent.findAllSpents);

router.get("/spent/:spentId",[verifyToken], Spent.findOneSpent);

router.put("/spent/:spentId",[verifyToken], Spent.updateSpent);

router.delete("/spent/:spentId",[verifyToken], Spent.deleteSpent);

module.exports = router;
