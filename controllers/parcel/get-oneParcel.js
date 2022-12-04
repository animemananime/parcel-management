const { Parcel } = require("../../database/mongodb.database");

const router = require("express").Router();

router.get("/:trackingNumber", async (req, res) => {
  try {
    const parcelModel = await Parcel();
    var fetchedParcel = await parcelModel.findOne({
      tracking_number: req.params.trackingNumber,
    });

    return res.status(200).json(fetchedParcel);
  } catch (error) {
    return res.status(400).json("Internal server problem. Try again later.");
  }
});

module.exports = router;
