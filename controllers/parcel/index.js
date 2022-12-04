var router = require("express").Router();

// split up route handling
router.use("/", require("./get-oneParcel"));
router.use("/", require("./update-oneParcel"));
router.use("/", require("./post-oneParcel"));
router.use("/", require("./get-noOfTokenLeft"));

module.exports = router;
