const Sequelize = require("sequelize");
let sequelize;
require("dotenv").config();
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: "us-cdbr-east-06.cleardb.net",
      dialect: "mysql",
      port: 3306,
      database: "heroku_718cc1d874f1b03"
    }
  );
}
module.exports = sequelize;

mysql://bb1d127f81b6e3:a83d4adf@us-cdbr-east-06.cleardb.net/heroku_718cc1d874f1b03?reconnect=true