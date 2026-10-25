import "./CourseCard.css";

/**
 * CourseCard reusable - satu kartu video.
 * Props:
 *  - image: URL/path thumbnail
 *  - title: judul video
 *  - category: kategori video
 *  - onEdit, onDelete: dipanggil saat tombol Edit / Hapus diklik
 */
function CourseCard({ image, title, category, onEdit, onDelete }) {
  return (
    <div className="course-card">
      <img
        src={image}
        alt={title}
        onError={(e) => {
          e.currentTarget.style.visibility = "hidden";
        }}
      />
      <div className="course-card__info">
        <div>
          <p className="course-card__title">{title}</p>
          <p className="course-card__category">{category}</p>
        </div>
        <div className="course-card__actions">
          <button type="button" className="course-card__btn" onClick={onEdit}>
            Edit
          </button>
          <button
            type="button"
            className="course-card__btn course-card__btn--danger"
            onClick={onDelete}
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
