import { useState } from "react";
import FormInput from "../common/FormInput";
import Button from "../common/Button";
import "./VideoFormModal.css";

/**
 * Modal form untuk Tambah / Edit video.
 * Props:
 *  - initialData: kalau diisi -> mode Edit, kalau null -> mode Tambah
 *  - categories: array kategori untuk pilihan dropdown
 *  - saving: true saat request ke API berjalan
 *  - onSubmit(data): dipanggil dengan { title, thumbnail, category } kalau valid
 *  - onClose: tutup modal
 */
function VideoFormModal({ initialData = null, categories = [], saving = false, onSubmit, onClose }) {
  const isEdit = Boolean(initialData);

  const [form, setForm] = useState({
    title: initialData?.title ?? "",
    thumbnail: initialData?.thumbnail ?? "",
    category: initialData?.category ?? categories[0] ?? "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const next = {};
    if (!form.title.trim()) next.title = "Judul wajib diisi.";
    const url = form.thumbnail.trim();
    if (!url) next.thumbnail = "URL gambar wajib diisi.";
    else if (!/^(https?:\/\/|\/)/i.test(url)) next.thumbnail = "URL harus diawali http://, https://, atau /.";
    if (!form.category) next.category = "Pilih kategori.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    onSubmit({
      title: form.title.trim(),
      thumbnail: form.thumbnail.trim(),
      category: form.category,
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="modal-title">{isEdit ? "Edit video" : "Tambah video"}</h2>

        <form onSubmit={handleSubmit} noValidate>
          <FormInput
            label="Judul video"
            id="title"
            placeholder="Contoh: Dasar-dasar Pemasaran Digital"
            value={form.title}
            onChange={handleChange}
          />
          {errors.title && <p className="modal-error">{errors.title}</p>}

          <FormInput
            label="URL gambar thumbnail"
            id="thumbnail"
            placeholder="https://... atau /assets/Card 1.png"
            value={form.thumbnail}
            onChange={handleChange}
          />
          {errors.thumbnail && <p className="modal-error">{errors.thumbnail}</p>}

          {form.thumbnail.trim() && !errors.thumbnail && (
            <img className="modal-preview" src={form.thumbnail.trim()} alt="Pratinjau thumbnail" />
          )}

          <div className="form-input">
            <label htmlFor="category">Kategori</label>
            <select id="category" name="category" value={form.category} onChange={handleChange}>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          {errors.category && <p className="modal-error">{errors.category}</p>}

          <Button type="submit" disabled={saving}>
            {saving ? "Menyimpan..." : "Simpan"}
          </Button>
          <Button variant="secondary" onClick={onClose} disabled={saving}>
            Batal
          </Button>
        </form>
      </div>
    </div>
  );
}

export default VideoFormModal;
