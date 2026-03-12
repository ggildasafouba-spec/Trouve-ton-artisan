import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout.jsx";

import HomePage from "./pages/homePage";
import CategoryPage from "./pages/categorypage";
import ArtisanPage from "./pages/artisanpage";
import LegalPage from "./pages/legalpage";
import NotFoundPage from "./pages/notfoundpage";

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