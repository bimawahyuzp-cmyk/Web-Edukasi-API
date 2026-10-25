# Web Edukasi - React

Hasil konversi project HTML/CSS statis (Web Edukasi) menjadi ReactJS
component-based, sesuai guideline: slicing UI per component, reusable
component dengan props, dan responsive.

## Struktur Project

```
src/
├── components/
│   ├── common/         -> Navbar, Button, FormInput (dipakai di banyak halaman)
│   ├── auth/            -> AuthCard (bungkus card Login & Register)
│   └── home/            -> HeroBanner, CourseSection, CourseCard,
│                           NewsletterForm, Footer (khusus Homepage)
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   └── Homepage.jsx
├── App.jsx              -> routing (react-router-dom)
└── main.jsx
public/
└── assets/              -> taruh semua gambar di sini (lihat README.txt di dalamnya)
```

## Cara Menjalankan

1. Pastikan sudah punya Node.js terinstall.
2. Install dependencies:
   ```
   npm install
   ```
3. Copy semua gambar dari project lama kamu (folder `assets`) ke
   `public/assets/` di project ini (lihat `public/assets/README.txt`).
4. Jalankan development server:
   ```
   npm run dev
   ```
5. Buka link yang muncul di terminal (biasanya http://localhost:5173).
   - `/` -> Homepage
   - `/login` -> Login
   - `/register` -> Register

## Build untuk production

```
npm run build
```
Hasil build ada di folder `dist/`.

## Catatan Reusable Component

- `FormInput`, `Button`, `Navbar` dipakai ulang di Login & Register lewat props
  (label, type, placeholder, value, onChange, variant, dll) - tidak ada
  hardcode di dalam component-nya.
- `CourseSection` + `CourseCard` di Homepage bersifat data-driven: daftar
  kategori dan daftar course dikirim sebagai array lewat props dari
  `Homepage.jsx`, jadi kalau mau nambah/kurangi course tinggal ubah array-nya
  saja tanpa sentuh component.
- `HeroBanner` dipakai 2x di Homepage (header judul & CTA banner) karena
  strukturnya sama, hanya beda data yang dikirim lewat props.
