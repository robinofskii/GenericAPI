const router = require("express").Router();
const Weight = require("../models/weight");

/* This is a route that is used to add a weight to the database. */
router.post("/add", async (req, res) => {
  const weight = new Weight({
    weight: req.body.weight,
    bodyFat: req.body.bodyFat,
    muscleMass: req.body.muscleMass,
  });

  try {
    await weight.save();
    res.send({ weight: weight._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

/* This is a route that is used to get all the weights from the database. */
router.get("/all", async (req, res) => {
  try {
    const weights = await Weight.find();
    res.send(weights);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
