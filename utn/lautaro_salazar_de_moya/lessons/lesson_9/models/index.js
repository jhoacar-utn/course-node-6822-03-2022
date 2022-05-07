const { dbConnection, MYSQL, MONGO } = require("../config/database");

let userModel;

switch (dbConnection) {
    case MYSQL:
        userModel = require("./mysql/userModel"); break;
    case MONGO:
        userModel = require("./mongo/userModel"); break;
    default:
        throw `Must be specified DB_CONNECTION environment variable, and can be: ${MYSQL} or ${MONGO}`
}

module.exports = {
    userModel
}