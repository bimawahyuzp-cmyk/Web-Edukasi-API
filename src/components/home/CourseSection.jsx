import { useState } from "react";
import CourseCard from "./CourseCard";
import VideoFormModal from "./VideoFormModal";
import "./CourseSection.css";

const ALL = "Semua Kelas";

/**
 * CourseSection reusable.
 * Props:
 *  - title, subtitle: judul section
 *  - categories: array string, contoh ["Semua Kelas", "Pemasaran", ...]
 *  - courses: array object { id, title, thumbnail, category } dari API
 *  - loading, error, actionError, saving: status dari useVideos
 *  - onRetry: muat ulang data kalau gagal
 *  - onAdd(data), onUpdate(id, data), onDelete(id): aksi CRUD
 */
function CourseSection({
  title,
  subtitle,
  categories = [],
  courses = [],
  loading = false,
  error = null,
  actionError = null,
  saving = false,
  onRetry,
  onAdd,
  onUpdate,
  onDelete,
}) {
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null); // video yang sedang diedit

  const formCategories = categories.filter((c) => c !== ALL);

  const visibleCourses =
    activeCategory === ALL
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  const openAdd = () => {
    setEditing(null);
    setModalOpen(true);
  };

  const openEdit = (course) => {
    setEditing(course);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleSubmit = async (data) => {
    const ok = editing ? await onUpdate(editing.id, data) : await onAdd(data);
    if (ok) closeModal();
  };

  const handleDelete = (course) => {
    if (window.confirm(`Hapus video "${course.title}"?`)) onDelete(course.id);
  };

  return (
    <div className="course-section">
      <div className="course-section__header">
        <div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <button type="button" className="course-section__add" onClick={openAdd}>
          + Tambah video
        </button>
      </div>

      <ul className="category-list">
        {categories.map((category) => (
          <li
            key={category}
            className={category === activeCategory ? "is-active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>

      {actionError && <p className="course-section__alert">{actionError}</p>}

      {loading && <p className="course-section__status">Memuat video...</p>}

      {error && (
        <div className="course-section__status">
          <p>{error}</p>
          <button type="button" className="course-section__retry" onClick={onRetry}>
            Coba lagi
          </button>
        </div>
      )}

      {!loading && !error && visibleCourses.length === 0 && (
        <p className="course-section__status">
          {courses.length === 0
            ? "Belum ada video. Klik \"Tambah video\" untuk menambahkan yang pertama."
            : "Belum ada video di kategori ini."}
        </p>
      )}

      <div className="course-grid">
        {visibleCourses.map((course) => (
          <CourseCard
            key={course.id}
            image={course.thumbnail}
            title={course.title}
            category={course.category}
            onEdit={() => openEdit(course)}
            onDelete={() => handleDelete(course)}
          />
        ))}
      </div>

      {modalOpen && (
        <VideoFormModal
          key={editing ? editing.id : "new"}
          initialData={editing}
          categories={formCategories}
          saving={saving}
          onSubmit={handleSubmit}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default CourseSection;
