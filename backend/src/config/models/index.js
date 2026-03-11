const sequelize = require("../database");
const Category = require("./category");
const Specialite = require("./specialite");
const Artisan = require("./artisan");

Category.hasMany(Specialite, { foreignKey: "category_id" });
Specialite.belongsTo(Category, { foreignKey: "category_id" });

Specialite.hasMany(Artisan, { foreignKey: "specialite_id" });
Artisan.belongsTo(Specialite, { foreignKey: "specialite_id" });

module.exports = {
  sequelize,
  Category,
  Specialite,
  Artisan,
};