const db = require("../../models");

// Defining methods for the gamesController
module.exports = {
    findAll: function (req, res) {
        db.Game
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) { 

        const query = {
            title: req.body.name
        };

        const options = {
            upsert: true
        }
        
        db.Game.update(query, req.body, options).then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Game
            .findById({
                _id: req.params.id
            })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};