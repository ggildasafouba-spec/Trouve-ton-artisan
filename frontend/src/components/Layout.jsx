import { Outlet } from "react-router-dom";
import Header from "./header.jsx";
import Footer from "./footer.jsx";

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