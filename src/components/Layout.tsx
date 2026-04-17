import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";
import FloatingBubbles from "./FloatingBubbles";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <ParticleBackground />
      <FloatingBubbles />
      <Header />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
