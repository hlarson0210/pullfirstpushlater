const db = require("../../models");

const createFilter = (req) => {

     // ********add mapping to searchable things**********
     
    const filters = {
        userId: req.user._id 
    }
    if(req.body.name) {
        filters.name = { $regex: req.body.name, $options: "i" }
    }
    if(req.body.minPlayers) {
        filters.minPlayers = 1
    }
    return filters
}

// Defining methods for the gamesController
module.exports = {
    find: function (req, res) {
        const query = req.body;
        const filters = createFilter(req)
        
        db.Game.find(
            filters,
            // function(err,docs) { 
            // } 
        ).then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        db.Game.create({
            ...req.body,
            userId: req.user._id
        }).then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        if(!req.body._id) {
            module.exports.create(req, res);
            return
        }
        db.Game.find({
            _id: req.body._id,
            userId: req.user._id
        }).then(games => {
            if(games.length === 0) {
                module.exports.create(req, res);
                return
            } else {
                db.Game.updateOne({_id: req.body._id,
                    userId: req.user._id}, {
                        ...req.body,
                        userId: req.user._id
                    }).then(dbModel => res.json(dbModel))
                    .catch(err => res.status(422).json(err));
            }
        })
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