import "./Footer.css";

/**
 * Footer reusable.
 * Props:
 *  - logo: path logo
 *  - description, address, phone: info brand
 *  - linkGroups: array of { title, items: string[] } -> supaya kolom footer reusable/data-driven
 *  - socials: array of { name, icon }
 */
function Footer({ logo, description, address, phone, linkGroups = [], socials = [] }) {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Logo Video Belajar" className="footer-logo" />
          <p className="footer-desc">{description}</p>
          <p className="footer-info">{address}</p>
          <p className="footer-info">{phone}</p>
        </div>

        <div className="footer-links">
          {linkGroups.map((group) => (
            <div className="footer-col" key={group.title}>
              <h4>{group.title}</h4>
              {group.items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>@2023 Gerobak Sayur All Rights Reserved.</p>
        <div className="footer-social">
          {socials.map((social) => (
            <img key={social.name} src={social.icon} alt={social.name} />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
