import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/categorie/tous?search=${encodeURIComponent(search)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2">
      <input
        type="text"
        className="form-control"
        placeholder="Rechercher un artisan par son nom"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        Rechercher
      </button>
    </form>
  );
}

export default SearchBar;