const db = require("../../models");

const hashPassword = (text) => text
const generateToken = () => "kladshgja;lskghas";

// Defining methods for the usersController
module.exports = {
    auth: function (req, res) {
        db.User
            .findOne({
                username: req.body.username
            }).then((user) => {

                if (!user) {
                    return res.status(422).json(err);
                }

                if (hashPassword(req.body.password) === user[0].password) {
                    const token = generateToken();
                    db.User.updateOne({
                            username: req.body.username
                        }, {
                            currentToken: token
                        }).then(res.json({token}))
                        .catch(err => res.status(422).json(err));
                }
            }).catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.User
            .create({...req.body, password: hashPassword(req.body.password)})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};