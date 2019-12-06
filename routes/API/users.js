const router = require("express").Router();
const usersController = require("../../controllers/APILogic/users");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findOne)
  .post(usersController.create);

module.exports = router;