import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import api from "../api/api";
import ArtisanCard from "./components/ArtisanCard.jsx";

function CategoryPage() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const [artisans, setArtisans] = useState([]);

  const search = searchParams.get("search") || "";

  useEffect(() => {
    const params = {};

    if (slug !== "tous") {
      params.category = slug;
    }

    if (search) {
      params.search = search;
    }

    api.get("/artisans", { params })
      .then((res) => setArtisans(res.data))
      .catch(() => setArtisans([]));
  }, [slug, search]);

  return (
    <section>
      <h1 className="mb-4">
        {slug === "tous" ? "Résultats de recherche" : `Catégorie : ${slug}`}
      </h1>

      {artisans.length === 0 ? (
        <p>Aucun artisan trouvé.</p>
      ) : (
        <div className="row g-4">
          {artisans.map((artisan) => (
            <ArtisanCard key={artisan.id} artisan={artisan} />
          ))}
        </div>
      )}
    </section>
  );
}

export default CategoryPage;