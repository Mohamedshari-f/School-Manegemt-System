const express = require("express");
const router = express.Router();
const  FeeControl= require("../controller/Fee");
router.post("/create/fee", FeeControl.CreateFee);
router.get("/read/fee", FeeControl.ReadFee);
router.get("/read/fee/:id", FeeControl.ReadSingleFee);
router.put("/update/fee/:id", FeeControl.UpdateFee);
router.delete("/delete/fee/:id", FeeControl.DeleteFee);

module.exports = router;
