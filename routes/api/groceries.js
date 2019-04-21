const router = require("express").Router();
const groceriesController = require("../../controllers/groceriesController");

// corresponds to /api/groceries/
router
  .route("/")
  .get(groceriesController.findAll)
  .post(groceriesController.create);

module.exports = router;
