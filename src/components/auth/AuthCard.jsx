import "./AuthCard.css";

/**
 * AuthCard reusable - dipakai sebagai bungkus di halaman Login & Register.
 * Props:
 *  - title: judul (contoh: "LOGIN" / "Pendaftaran Akun")
 *  - subtitle: teks kecil di bawah judul
 *  - children: isi form + button, dikirim dari parent (Login.jsx / Register.jsx)
 */
function AuthCard({ title, subtitle, children }) {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
}

export default AuthCard;
