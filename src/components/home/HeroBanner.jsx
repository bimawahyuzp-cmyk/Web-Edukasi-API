import "./HeroBanner.css";

/**
 * HeroBanner reusable - bisa dipakai untuk headerjudul maupun bannercta
 * karena strukturnya mirip (gambar background + teks overlay).
 * Props:
 *  - image: path gambar background
 *  - title: judul (h1/h2 dikontrol lewat headingLevel)
 *  - description
 *  - buttonText: kalau diisi, tampilkan tombol
 *  - children: kalau butuh konten custom (misal form newsletter)
 */
function HeroBanner({ image, title, description, buttonText, headingLevel = "h1", children }) {
  const Heading = headingLevel;

  return (
    <div className="hero-banner">
      <img src={image} alt={title} className="hero-banner__img" />
      <div className="hero-banner__text">
        <Heading>{title}</Heading>
        <p>{description}</p>
        {buttonText && <button className="hero-banner__btn">{buttonText}</button>}
        {children}
      </div>
    </div>
  );
}

export default HeroBanner;
