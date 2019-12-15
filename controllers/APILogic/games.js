const db = require("../../models");

const createFilter = (req) => {

    const filters = {
        userId: req.user._id
    }

    if (req.query.name) {
        filters.name = {
            $regex: req.query.name,
            $options: "i"
        }
    }

    if (req.query.numPlayers) {
        filters.minPlayers = { $gte: req.query.numPlayers}
        filters.maxPlayers = { $lte: req.query.numPlayers}
    }

    if (req.query.minPlaytime) {
        filters.minPlaytime = { $gte: req.query.minPlaytime }
    }

    if (req.query.maxPlaytime) {
        filters.maxPlaytime = { $lte: req.query.maxPlaytime }
    }

    if (req.query.minAge) {
        filters.minAge = { $gte: req.query.minAge }
    }

    if (req.query.rating) {
        filters.rating = { $gte: req.query.rating }
    }

    if (req.query.complexity) {
        filters.complexity = req.query.complexity
    }

    console.log(filters)
    return filters
}

// Defining methods for the gamesController
module.exports = {
    find: function (req, res) {
        console.log(req)
        db.User.findOne({
            currentToken: req.query.token
        }).then(user => {
            console.log(user);
            if (!user) {
                return res.status(404).send("User not found!");
            }

            req.user = user;
            const filters = createFilter(req);

            db.Game.find(filters)
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err));
        }).catch(error => res.status(422).json(error));
    },
    create: function (req, res) {
        db.Game.create({
            ...req.body,
            userId: req.user._id
        }).then(function (newGame) {
            db.User.findOneAndUpdate({
                _id: req.user._id
            }, {
                $push: {
                    games: newGame
                }
            }).then(dbModel => db.User.find({
                _id: req.user._id
            }).then(function (dbUser) {
                res.json(dbUser)
            }).catch(err => res.status(422).json(err)));

        }).catch(error => res.status(422).json(error));
    },
    update: function (req, res) {
        db.User.findOne({
            currentToken: req.body.token
        }).then(user => {

            if (!user) {
                return res.status(422).send("User not found!");
            }
            req.user = user;

            if (!req.body._id) {
                module.exports.create(req, res);
                return
            }

            db.Game.findOneAndUpdate({
                _id: req.body._id,
                userId: req.user._id
            }, {
                $set: {
                    ...req.body,
                    userId: req.user._id
                }
            }).then(game => {

                // should never actually hit this if statement, this is entirely for a catch all
                if (!game) {
                    return module.exports.create(req, res);
                }
                db.Game.find({
                    _id: req.body._id,
                    userId: req.user._id
                })
                    .then(updatedGame => res.json(updatedGame))
                    .catch(err => res.status(422).json(err))
            }).catch(error => res.status(422).json(error));
        });
    },
    remove: function (req, res) {
        db.User.findOne({
            currentToken: req.body.token
        }).then(user => {
            if (!user) {
                return res.status(422).send("User not found!");
            }
            db.Game.find({
                userId: user._id,
                _id: req.params.id
            }).then(game => {

                if (!game) {
                    return res.status(422).send("No game found!");
                }

                db.Game.remove({
                    _id: game
                }).then(dbModel => {

                    db.User.findByIdAndUpdate(user._id, {
                        $pull: {
                            "games": {
                                $in: game[0]._id
                            }
                        }
                    }, function (errors, model) {
                        if (errors) {
                            return res.status(422).json(errors);
                        }
                        db.User.find({
                            _id: user._id
                        }).then(function (dbUser) {
                            res.json(dbUser)
                        }).catch(err => res.status(422).json(err));
                    });
                })
                    .catch(errs => res.status(422).json(errs));

            }).catch(err => res.status(422).json(err));
        }).catch(error => res.status(422).json(error));
    }
};