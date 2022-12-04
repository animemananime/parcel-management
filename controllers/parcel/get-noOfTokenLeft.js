const { Parcel } = require("../../database/mongodb.database");

const router = require("express").Router();

router.post("/noOfTokenLeft", async (req, res) => {
  try {
    const parcelModel = await Parcel();
    const parceLLimit = process.env.PARCEL_LIMIT;

    const numberOfParcel = await parcelModel.count();
    console.log(numberOfParcel);

    if (numberOfParcel < parceLLimit)
      return res.status(200).json(parceLLimit - numberOfParcel);

    return res.status(200).json(0);
  } catch (error) {
    return res.status(400).json("Internal server problem. Try again later.");
  }
});

module.exports = router;
