import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/Categorypage";
import ArtisanPage from "./pages/Artisanpage";
import LegalPage from "./pages/Legalpage";
import NotFoundPage from "./pages/Notfoundpage";

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