const randList = require("../data/rand.json");

exports.rand = () => {
    return randList.sort((a, b) => 0.5 - Math.random());
}