const router = require("express").Router();
const gamesController = require("../../controllers/APILogic/games");

// Matches with "/api/games"
router.route("/")
    .get((req, res) => {
        db.User.findOne({
            currentToken: req.body.token
        }).then(user => {
            if (!user) {
                return res.status(422).json(err);
            }
            req.user = user;
            gamesController.find(req, res);
        })

        
        
    })
    .post(gamesController.update);

// Matches with "/api/games/:id"
router.route("/:id").delete((req, res) => {
    db.User.findOne({
        currentToken: req.body.token
    }).then(user => {
        if (!user) {
            return res.status(422).json(err);
        }
        db.Game.find({
            userId: user._id
        }).then(games => {
            // array of games here
            gamesController.remove;
        })
    })   
})

module.exports = router;