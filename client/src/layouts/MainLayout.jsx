import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
