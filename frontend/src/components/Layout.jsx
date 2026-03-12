import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

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