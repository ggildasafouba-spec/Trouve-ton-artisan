import { useEffect, useState } from "react";
import api from "../api/api";
import ArtisanCard from "../components/ArtisanCard.jsx";

function HomePage() {
  const [topArtisans, setTopArtisans] = useState([]);

  useEffect(() => {
    api.get("/artisans/top")
      .then((res) => setTopArtisans(res.data))
      .catch(() => setTopArtisans([]));
  }, []);

  return (
    <>
      <section className="hero p-4 p-md-5 rounded-4 mb-5">
        <h1 className="display-6 fw-bold">Trouve ton artisan en Auvergne-Rhône-Alpes</h1>
        <p className="lead mb-0">
          Une plateforme simple pour rechercher un artisan, consulter sa fiche et le contacter.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="mb-4">Comment trouver mon artisan ?</h2>
        <div className="row g-3">
          <div className="col-md-3">
            <div className="step-card">
              <span className="step-number">1</span>
              <p>Choisir la catégorie d’artisanat dans le menu.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="step-card">
              <span className="step-number">2</span>
              <p>Choisir un artisan.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="step-card">
              <span className="step-number">3</span>
              <p>Le contacter via le formulaire de contact.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="step-card">
              <span className="step-number">4</span>
              <p>Une réponse sera apportée sous 48h.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4">Les artisans du mois</h2>
        <div className="row g-4">
          {topArtisans.map((artisan) => (
            <ArtisanCard key={artisan.id} artisan={artisan} />
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;