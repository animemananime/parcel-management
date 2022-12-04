var router = require("express").Router();

// split up route handling
// router.use("/parcel", require("./parcel"));
router.get('/ping', (req, res) => {
    res.send('Everything is pinging.')
  })

module.exports = router;
