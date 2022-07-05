import { Sequelize } from "sequelize";
import databaseConfig from "../../config/database.js";

const sequelize = new Sequelize(databaseConfig.uri);

export default sequelize;
