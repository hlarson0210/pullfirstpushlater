const router = require("express").Router();
const gamesController = require("../../controllers/APILogic/games");

// Matches with "/api/games"
router.route("/")
    .get((req, res) => {
        if (req.body.name) {
            gamesController.find(req, res);
        }
        gamesController.findAll(req, res);
    })
    .post(gamesController.update);

// Matches with "/api/games/:id"
router.route("/:id").delete(gamesController.remove);

module.exports = router;