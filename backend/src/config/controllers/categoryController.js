const { Category } = require("../models");

const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      order: [["name", "ASC"]]
    });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur." });
  }
};

module.exports = { getCategories };