const { Artisan, Specialite, Category } = require("../models");
const { Op } = require("sequelize");

const getTopArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: { top_artisan: true },
      include: [
        {
          model: Specialite,
          include: [Category]
        }
      ],
      order: [["note", "DESC"]],
      limit: 3
    });

    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur." });
  }
};

const getArtisans = async (req, res) => {
  try {
    const { search, category } = req.query;
    const whereClause = {};

    if (search) {
      whereClause.name = { [Op.like]: `%${search}%` };
    }

    const includeClause = [
      {
        model: Specialite,
        include: [
          {
            model: Category,
            ...(category ? { where: { slug: category } } : {})
          }
        ]
      }
    ];

    const artisans = await Artisan.findAll({
      where: whereClause,
      include: includeClause,
      order: [["name", "ASC"]]
    });

    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur." });
  }
};

const getArtisanById = async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id, {
      include: [
        {
          model: Specialite,
          include: [Category]
        }
      ]
    });

    if (!artisan) {
      return res.status(404).json({ message: "Artisan introuvable." });
    }

    res.json(artisan);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur." });
  }
};

module.exports = {
  getTopArtisans,
  getArtisans,
  getArtisanById
};