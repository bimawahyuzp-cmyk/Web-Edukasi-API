import { useState } from "react";
import "./NewsletterForm.css";

/**
 * NewsletterForm reusable.
 * Props:
 *  - onSubmit(email): callback saat form disubmit (opsional)
 */
function NewsletterForm({ onSubmit }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(email);
    else console.log("Subscribe email:", email);
    setEmail("");
  };

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Masukan Email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  );
}

export default NewsletterForm;
