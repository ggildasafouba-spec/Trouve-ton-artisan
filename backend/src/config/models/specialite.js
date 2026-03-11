const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Specialite = sequelize.define(
  "Specialite",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: "specialites",
    timestamps: false
  }
);

module.exports = Specialite;