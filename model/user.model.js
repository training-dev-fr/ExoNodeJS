const userList = require("../data/user.json");


exports.getOne = (email) => {
    let user = userList.find(user => user.email === email);
    if (user) {
        return user;
    } else {
        throw new Error("Utilisateur non trouvé");
    }
}
