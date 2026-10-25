import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import AuthCard from "../components/auth/AuthCard";
import FormInput from "../components/common/FormInput";
import Button from "../components/common/Button";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: sambungkan ke proses login/backend sesuai kebutuhan
    console.log("Login data:", form);
    navigate("/");
  };

  return (
    <>
      <Navbar logo="/assets/logo.png" variant="simple" />

      <AuthCard title="LOGIN" subtitle="masukkan akun anda">
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Username"
            id="username"
            placeholder="masukkan username"
            value={form.username}
            onChange={handleChange}
          />
          <FormInput
            label="Password"
            id="password"
            type="password"
            placeholder="masukkan password"
            value={form.password}
            onChange={handleChange}
          />
          <p style={{ textAlign: "left", marginBottom: "10px" }}>
            <a href="#" className="lupa-password">Lupa kata Sandi?</a>
          </p>

          <Button type="submit">Masuk</Button>
        </form>

        <Link to="/register">
          <Button type="button">Daftar</Button>
        </Link>

        <p className="atau">atau</p>

        <Button type="button" variant="google">
          <img src="/assets/daftargoogle.png" alt="Masuk Dengan Google" />
        </Button>
      </AuthCard>
    </>
  );
}

export default Login;
