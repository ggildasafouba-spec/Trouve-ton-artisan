import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer mt-5">
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-md-6">
            <h3 className="h5">Coordonnées</h3>
            <p className="mb-0">
              101 cours Charlemagne<br />
              CS 20033<br />
              69269 LYON CEDEX 02<br />
              France<br />
              +33 (0)4 26 73 40 00
            </p>
          </div>

          <div className="col-md-6">
            <h3 className="h5">Pages légales</h3>
            <ul className="list-unstyled mb-0">
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
              <li><Link to="/donnees-personnelles">Données personnelles</Link></li>
              <li><Link to="/accessibilite">Accessibilité</Link></li>
              <li><Link to="/cookies">Cookies</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;