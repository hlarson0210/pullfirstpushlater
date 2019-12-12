const router = require("express").Router();
const bgaController = require("../controllers/bgaLogic");

// Matches with "/bga-api/popular"
router.route("/popular")
    // .get(bgaController.findPopular)
    .get(function(req, res) {
        console.log("hi")
        res.json({a: "b"})
    })

// Matches with "/bga-api/search"
router.route("/search")
    .get(bgaController.search)

module.exports = router;