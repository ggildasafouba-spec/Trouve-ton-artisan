import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="text-center py-5">
      <img
        src="https://placehold.co/600x350?text=404"
        alt="Page non trouvée"
        className="img-fluid rounded-4 mb-4"
      />
      <h1>Page non trouvée</h1>
      <p>La page que vous demandez n’existe pas.</p>
      <Link to="/" className="btn btn-primary">
        Retour à l’accueil
      </Link>
    </section>
  );
}

export default NotFoundPage;