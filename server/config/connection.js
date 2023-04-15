const Sequelize = require("sequelize");
let sequelize;

{
  sequelize = new Sequelize(
    {
      host: "us-cdbr-east-06.cleardb.net",
      user: "bb717135cfa3c5",
      password: "c1327801",
      dialect: "mysql",
      port: 3306,
      database: "heroku_1c65d7b327446ef"
    }
  );
}
module.exports = sequelize;
