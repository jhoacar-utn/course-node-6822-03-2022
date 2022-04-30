const path = require("path");
module.exports = {
    LOCAL: "local",
    GOOGLE: "google",
    AMAZON: "aws",
    storageConnection : process.env.STORAGE_CONNECTION || 'local',
    uniqueFileName: process.env.UNIQUE_FILE_NAME || true,
    storageLocal: {
        pathStorage: path.resolve(`${__dirname}/../${process.env.STORAGE_PATH || 'storage'}`),
    },
    storageGoogle : {

    },
    storageAmazon :{

    }
}