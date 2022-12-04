const { Parcel } = require("../../database/mongodb.database");

const router = require("express").Router();

router.put("/:trackingNumber", async (req, res) => {
  try {
    const parcelModel = await Parcel();

    const body = req.body;
    const params = req.params;

    var fetchedParcel = await (
      await parcelModel.findOneAndUpdate(
        {
          tracking_number: req.params.trackingNumber,
        },
        { $set: body },
        { returnNewDocument: true }
      )
    )?.value;

    return res.status(200).json(fetchedParcel);
  } catch (error) {
    return res.status(400).json("Internal server problem. Try again later.");
  }
});

module.exports = router;
