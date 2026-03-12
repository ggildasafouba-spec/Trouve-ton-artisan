import { Outlet } from "react-router-dom";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";

function Layout() {
  return (
    <>
      <Header />
      <main className="container py-4 min-vh-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;