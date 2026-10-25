import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import AuthCard from "../components/auth/AuthCard";
import FormInput from "../components/common/FormInput";
import Button from "../components/common/Button";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nama: "",
    email: "",
    hp: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: sambungkan ke proses registrasi/backend sesuai kebutuhan
    console.log("Register data:", form);
    navigate("/");
  };

  return (
    <>
      <Navbar logo="/assets/logo.png" variant="simple" />

      <AuthCard title="Pendaftaran Akun" subtitle="yuk buat akunmu sekarang">
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Nama Lengkap"
            id="nama"
            placeholder="Masukan Nama Lengkap Anda"
            value={form.nama}
            onChange={handleChange}
          />
          <FormInput
            label="Email"
            id="email"
            type="email"
            placeholder="Masukan Email Anda"
            value={form.email}
            onChange={handleChange}
          />
          <FormInput
            label="Nomor HP"
            id="hp"
            type="tel"
            placeholder="Masukan Nomor HP Anda"
            value={form.hp}
            onChange={handleChange}
          />
          <FormInput
            label="Username"
            id="username"
            placeholder="Masukan Username Anda"
            value={form.username}
            onChange={handleChange}
          />
          <FormInput
            label="Password"
            id="password"
            type="password"
            placeholder="Masukan Password Anda"
            value={form.password}
            onChange={handleChange}
          />

          <p style={{ textAlign: "left", marginBottom: "10px" }}>
            <a href="#" className="lupa-password">Lupa kata Sandi?</a>
          </p>

          <Button type="submit">Daftar</Button>
        </form>

        <Link to="/login">
          <Button type="button">Masuk</Button>
        </Link>

        <p className="atau">atau</p>

        <Button type="button" variant="google">
          <img src="/assets/daftargoogle.png" alt="Masuk Dengan Google" />
        </Button>
      </AuthCard>
    </>
  );
}

export default Register;
