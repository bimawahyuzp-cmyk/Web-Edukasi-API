import "./Navbar.css";

/**
 * Navbar reusable.
 * - variant="simple"  -> hanya logo (dipakai di Login & Register)
 * - variant="full"    -> logo + menu kanan (dipakai di Homepage)
 *
 * Props:
 *  - logo: path gambar logo
 *  - variant: "simple" | "full"
 *  - kategoriIcon, avatarIcon: hanya dipakai kalau variant="full"
 */
function Navbar({ logo, variant = "simple", kategoriIcon, avatarIcon }) {
  return (
    <nav className={`navbar navbar--${variant}`}>
      <img src={logo} alt="Logo Video Belajar" className="logo" />

      {variant === "full" && (
        <>
          <div className="menu-kanan">
            <img src={kategoriIcon} alt="kategori" className="kategori" />
            <img src={avatarIcon} alt="avatar" className="avatar" />
          </div>
          <div className="hamburger">☰</div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
