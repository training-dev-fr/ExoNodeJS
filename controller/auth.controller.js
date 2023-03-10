const bcrypt = require("bcrypt");
const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();


exports.login = async (req, res, next) => {
    try {
        let user = await User.getOne(req.body.email)
        bcrypt.compare(req.body.password, user.password)
            .then(success => {
                if (success) {
                    res.status(200).json({
                        email: user.email,
                        jwt: jwt.sign({
                            email: user.email,
                            id:user.id
                        }, process.env.JWT_TOKEN)
                    });
                } else {
                    res.status(401).json({ message: "Mot de passe incorrect" });
                }
            })
            .catch(error => {
                res.status(500).json(error);
            })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}