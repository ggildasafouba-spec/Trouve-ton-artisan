const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Artisan = sequelize.define(
  "Artisan",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    note: {
      type: DataTypes.DECIMAL(2, 1),
      allowNull: false
    },
    ville: {
      type: DataTypes.STRING,
      allowNull: false
    },
    a_propos: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    site_web: {
      type: DataTypes.STRING,
      allowNull: true
    },
    top_artisan: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    specialite_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: "artisans",
    timestamps: false
  }
);

module.exports = Artisan;