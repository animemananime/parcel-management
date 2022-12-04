const { Parcel } = require("../../database/mongodb.database");

const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    const parcelModel = await Parcel();
    const body = req.body;

    const numberOfParcel = await parcelModel.count();

    if (numberOfParcel < process.env.PARCEL_LIMIT) {
      await parcelModel.insertOne(body);
      return res.status(200).json(true);
    }
    return res.status(400).json("You have reached parcel limit.");
  } catch (error) {
    return res.status(400).json("Internal server problem. Try again later.");
  }
});

module.exports = router;
