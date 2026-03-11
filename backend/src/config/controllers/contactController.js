const nodemailer = require("nodemailer");
const { body, validationResult } = require("express-validator");

const contactValidation = [
  body("nom").trim().isLength({ min: 2 }).withMessage("Nom invalide."),
  body("email").isEmail().withMessage("Email invalide."),
  body("objet").trim().isLength({ min: 3 }).withMessage("Objet invalide."),
  body("message").trim().isLength({ min: 10 }).withMessage("Message trop court."),
  body("artisanEmail").isEmail().withMessage("Email artisan invalide.")
];

const sendContact = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { nom, email, objet, message, artisanEmail } = req.body;

  try {
    let transporter;

    if (process.env.MAIL_USER && process.env.MAIL_PASS) {
      transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        secure: false,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS
        }
      });
    } else {
      transporter = nodemailer.createTransport({
        jsonTransport: true
      });
    }

    await transporter.sendMail({
      from: process.env.MAIL_USER || "no-reply@trouvetonartisan.fr",
      to: artisanEmail,
      replyTo: email,
      subject: objet,
      text: `Message de ${nom} (${email}) :\n\n${message}`
    });

    res.json({ message: "Message envoyé avec succès." });
  } catch (error) {
    res.status(500).json({ message: "Impossible d'envoyer le message." });
  }
};

module.exports = {
  contactValidation,
  sendContact
};