import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import Stars from "../components/Stars.jsx";

function ArtisanPage() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [form, setForm] = useState({
    nom: "",
    email: "",
    objet: "",
    message: ""
  });
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    api.get(`/artisans/${id}`)
      .then((res) => setArtisan(res.data))
      .catch(() => setArtisan(null));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback("");

    try {
      await api.post("/contact", {
        ...form,
        artisanEmail: artisan.email
      });
      setFeedback("Message envoyé avec succès.");
      setForm({
        nom: "",
        email: "",
        objet: "",
        message: ""
      });
    } catch {
      setFeedback("Erreur lors de l'envoi du message.");
    }
  };

  if (!artisan) {
    return <p>Chargement...</p>;
  }

  return (
    <section className="row g-4">
      <div className="col-lg-6">
        <img
          src={artisan.image_url}
          alt={artisan.name}
          className="img-fluid rounded-4 shadow-sm mb-3"
        />
        <h1>{artisan.name}</h1>
        <Stars note={Number(artisan.note)} />
        <p><strong>Spécialité :</strong> {artisan.Specialite?.name}</p>
        <p><strong>Ville :</strong> {artisan.ville}</p>

        <h2 className="h4 mt-4">À propos</h2>
        <p>{artisan.a_propos}</p>

        {artisan.site_web && (
          <p>
            <strong>Site web :</strong>{" "}
            <a href={artisan.site_web} target="_blank" rel="noreferrer">
              {artisan.site_web}
            </a>
          </p>
        )}
      </div>

      <div className="col-lg-6">
        <div className="card shadow-sm border-0 p-4">
          <h2 className="h4 mb-3">Contacter cet artisan</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nom</label>
              <input
                type="text"
                name="nom"
                className="form-control"
                value={form.nom}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Objet</label>
              <input
                type="text"
                name="objet"
                className="form-control"
                value={form.objet}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-control"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button className="btn btn-primary">Envoyer</button>
          </form>

          {feedback && <p className="mt-3 mb-0">{feedback}</p>}
        </div>
      </div>
    </section>
  );
}

export default ArtisanPage;