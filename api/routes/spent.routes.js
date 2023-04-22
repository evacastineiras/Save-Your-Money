const express = require("express")
const router = express.Router()
const Spent = require("../controllers/spent.controller.js");

router.post("/create-spent", Spent.createSpent);
        
router.get("/get-all-spents", Spent.findAllSpents);

router.get("/spent/:spentId", Spent.findOneSpent);

router.put("/spent/:spentId", Spent.updateSpent);

router.delete("/spent/:spentId", Spent.deleteSpent);

module.exports = router;
