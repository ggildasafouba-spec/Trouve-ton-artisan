import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout.jsx";

import HomePage from "../pages/HomePage.jsx";
import CategoryPage from "./pages/categorypage.jsx";
import ArtisanPage from "./pages/artisanpage.jsx";
import LegalPage from "./pages/legalpage.jsx";
import NotFoundPage from "./pages/notfoundpage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="categorie/:slug" element={<CategoryPage />} />
        <Route path="artisan/:id" element={<ArtisanPage />} />
        <Route
          path="mentions-legales"
          element={<LegalPage title="Mentions légales" />}
        />
        <Route
          path="donnees-personnelles"
          element={<LegalPage title="Données personnelles" />}
        />
        <Route
          path="accessibilite"
          element={<LegalPage title="Accessibilité" />}
        />
        <Route
          path="cookies"
          element={<LegalPage title="Cookies" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;