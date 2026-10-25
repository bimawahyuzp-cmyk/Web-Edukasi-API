import "./Button.css";

/**
 * Button reusable.
 * Props:
 *  - children: isi teks/button
 *  - onClick: fungsi saat diklik
 *  - type: "button" | "submit"
 *  - variant: "primary" | "google" | "secondary" | "danger"
 *  - disabled: nonaktifkan tombol (misal saat menyimpan)
 */
function Button({ children, onClick, type = "button", variant = "primary", disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn--${variant}`}
    >
      {children}
    </button>
  );
}

export default Button;
