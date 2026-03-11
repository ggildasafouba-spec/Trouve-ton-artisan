const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Category = sequelize.define(
  "Category",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: "categories",
    timestamps: false
  }
);

module.exports = Category;