import { Link } from "react-router-dom";
import Stars from "./Stars.jsx";

function ArtisanCard({ artisan }) {
  return (
    <div className="col-md-6 col-lg-4">
      <Link to={`/artisan/${artisan.id}`} className="text-decoration-none">
        <article className="card h-100 artisan-card shadow-sm">
          <img
            src={artisan.image_url}
            alt={artisan.name}
            className="card-img-top"
          />
          <div className="card-body">
            <h3 className="h5">{artisan.name}</h3>
            <Stars note={Number(artisan.note)} />
            <p className="mb-1">
              <strong>Spécialité :</strong> {artisan.Specialite?.name}
            </p>
            <p className="mb-0">
              <strong>Ville :</strong> {artisan.ville}
            </p>
          </div>
        </article>
      </Link>
    </div>
  );
}

export default ArtisanCard;