# Web Edukasi - React + MockAPI

Aplikasi video pembelajaran berbasis ReactJS (Vite). Data video diambil dari
MockAPI lewat Axios, dengan fitur GET, ADD, UPDATE, dan DELETE.

## Fitur

- Menampilkan daftar video dari API (GET)
- Menambah video lewat tombol **+ Tambah video** (ADD)
- Mengubah video lewat tombol **Edit** di kartu (UPDATE)
- Menghapus video lewat tombol **Hapus** di kartu (DELETE)
- Filter berdasarkan kategori
- Tampilan loading, error, dan data kosong

## Struktur Project

```
src/
├── components/
│   ├── common/    -> Navbar, Button, FormInput
│   ├── auth/      -> AuthCard
│   └── home/      -> HeroBanner, CourseSection, CourseCard,
│                     VideoFormModal, NewsletterForm, Footer
├── hooks/
│   └── useVideos.js          -> custom hook: state + operasi CRUD
├── services/
│   └── api/
│       ├── axiosInstance.js  -> konfigurasi Axios + interceptor
│       └── videoApi.js       -> fungsi GET, ADD, UPDATE, DELETE
├── pages/         -> Homepage, Login, Register
├── App.jsx
└── main.jsx
```

## Setup MockAPI

1. Buat project di https://mockapi.io dengan API Prefix `/api/v1`.
2. Buat resource `videos` dengan field (semua String):
   - `title`
   - `thumbnail`
   - `category`
3. Salin Base URL project, bentuknya `https://xxxx.mockapi.io/api/v1`.

## Cara Menjalankan

1. Install dependency:
   ```
   npm install
   ```
2. Salin `.env.example` menjadi `.env`, lalu isi `VITE_API_URL` dengan Base URL MockAPI.
3. Jalankan:
   ```
   npm run dev
   ```
4. Buka http://localhost:5173

Catatan: setiap `.env` diubah, jalankan ulang `npm run dev`.

## Contoh Data Video

```json
{
  "title": "Dasar-dasar Pemasaran Digital",
  "thumbnail": "/assets/Card 1.png",
  "category": "Pemasaran"
}
```

`thumbnail` bisa berupa URL gambar (`https://...`) atau path gambar di folder
`public/assets`.

## Teknologi

React 19, Vite, React Router, Axios, MockAPI.
