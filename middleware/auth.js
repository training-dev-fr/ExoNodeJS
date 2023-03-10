const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        req.token = jwt.verify(token, process.env.JWT_TOKEN);
        if (req.token.id == "1395azffez1564zd6s4d6z8e4f") {
            next();
        }
    } catch (error) {
        res.status(401).json({ message: "Authentification incorrecte" });
    }
}