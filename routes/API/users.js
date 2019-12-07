const router = require("express").Router();
const usersController = require("../../controllers/APILogic/users");

// Matches with "/api/users"
router.route("/signin")
  .post(usersController.auth);

router.route("/signup")
  .post(usersController.create);

module.exports = router;