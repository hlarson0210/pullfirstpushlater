const router = require("express").Router();
const gamesController = require("../../controllers/APILogic/games");

// Matches with "/api/games"
router.route("/")
    .get(gamesController.findAll)
    .post(gamesController.update);

// Matches with "/api/games/:id"
router.route("/:id").delete(gamesController.remove);

module.exports = router;