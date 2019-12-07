const db = require("../../models");
const uuidv4 = require('uuid/v4');
const bcrypt = require('bcrypt');
const saltRounds = 12;

// Defining methods for the usersController
module.exports = {
    auth: function (req, res) {
        db.User
            .findOne({
                username: req.body.username
            }).then((user) => {

                if (!user) {
                    return res.status(404).send("Username not found!");
                }

                bcrypt.compare(req.body.password, user.password, function(err, response) {
                    if (err) {
                        return res.status(422).json(err);
                    }

                    if (response) {
                        const token = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

                        db.User.updateOne({
                                username: req.body.username
                            }, {
                                currentToken: token
                            }).then(res.json({
                                token
                            }))
                            .catch(error => res.status(422).json(error));
                    }
                });
                
            }).catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.User
            .findOne({
                username: req.body.username
            }).then((user) => {
                if (user) {
                    return res.status(406).send("Username already exists!");
                }
                bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
                    if (err) {
                        return res.status(422).json(err);
                    }
                    
                    db.User
                        .create({
                            ...req.body,
                            password: hash
                        })
                        .then(dbModel => res.json(dbModel))
                        .catch(error => res.status(422).json(error));
                });
            })
    }
}