const db = require("../../models");

const createFilter = (req) => {

    const filters = {
        userId: req.user._id
    }

    if (req.body.name) {
        filters.name = {
            $regex: req.body.name,
            $options: "i"
        }
    }

    if (req.body.minPlayers) {
        filters.minPlayers = req.body.minPlayers
    }

    if (req.body.maxPlayers) {
        filters.maxPlayers = req.body.maxPlayers
    }

    if (req.body.minPlaytime) {
        filters.minPlaytime = req.body.minPlaytime
    }

    if (req.body.maxPlaytime) {
        filters.maxPlaytime = req.body.maxPlaytime
    }

    if (req.body.minAge) {
        filters.minAge = req.body.minAge
    }

    if (req.body.rating) {
        filters.rating = req.body.rating
    }

    if (req.body.complexity) {
        filters.complexity = req.body.complexity
    }

    return filters
}

// Defining methods for the gamesController
module.exports = {
    find: function (req, res) {

        db.User.findOne({
            currentToken: req.body.token
        }).then(user => {
            req.user = user;
            const filters = createFilter(req);

            if (!user) {
                return res.status(422).send("User not found!");
            }

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