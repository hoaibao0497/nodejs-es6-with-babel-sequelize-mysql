import Sequelize from "sequelize";
import "dotenv/config";

const { DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, HOST, DIALECT } =
  process.env;
const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  {
    host: HOST,
    dialect: DIALECT,
    options: {
      useUTC: false,
    },
  }
);

export default sequelize;
