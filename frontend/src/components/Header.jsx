import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import Searchbar from "./Searchbar.jsx";

function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api
      .get("/categories")
      .then((res) => setCategories(res.data))
      .catch(() => setCategories([]));
  }, []);

  return (
    <header className="site-header shadow-sm">
      <div className="container py-3">
        <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3">
          <Link to="/" className="text-decoration-none brand">
            <span className="brand-title">Trouve ton artisan !</span>
            <span className="brand-subtitle">
              Avec la région Auvergne-Rhône-Alpes
            </span>
          </Link>

          <nav className="d-flex flex-wrap gap-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/categorie/${category.slug}`}
                className="nav-link-custom"
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-3">
          <Searchbar />
        </div>
      </div>
    </header>
  );
}

export default Header;