require("dotenv").config();

const app = require("./app/app");
const sequelize = require("./config/database");

const PORT = process.env.PORT || 3001;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connexion MySQL OK");

    app.listen(PORT, () => {
      console.log(`Serveur lancé sur http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Erreur connexion BDD :", error.message);
  }
};

startServer();