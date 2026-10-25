import Navbar from "../components/common/Navbar";
import HeroBanner from "../components/home/HeroBanner";
import CourseSection from "../components/home/CourseSection";
import NewsletterForm from "../components/home/NewsletterForm";
import Footer from "../components/home/Footer";
import useVideos from "../hooks/useVideos";
import "./Homepage.css";

const courseCategories = ["Semua Kelas", "Pemasaran", "Desain", "Pengembangan Diri", "Bisnis"];

const footerLinkGroups = [
  {
    title: "Kategori",
    items: ["Digital & Teknologi", "Pemasaran", "Manajemen Bisnis", "Pengembangan Diri", "Desain"],
  },
  {
    title: "Perusahaan",
    items: ["Tentang Kami", "FAQ", "Kebijakan Privasi", "Ketentuan Layanan", "Bantuan"],
  },
  {
    title: "Komunitas",
    items: ["Tips Sukses", "Blog"],
  },
];

const socials = [
  { name: "linkedin", icon: "/assets/linkedin.png" },
  { name: "facebook", icon: "/assets/facebook.png" },
  { name: "instagram", icon: "/assets/instagram.png" },
  { name: "twitter", icon: "/assets/twitter.png" },
];

function Homepage() {
  // Data video sekarang datang dari MockAPI lewat custom hook
  const {
    videos,
    loading,
    error,
    actionError,
    saving,
    refetch,
    addVideo,
    editVideo,
    removeVideo,
  } = useVideos();

  return (
    <>
      <Navbar
        logo="/assets/logo.png"
        variant="full"
        kategoriIcon="/assets/kategori.png"
        avatarIcon="/assets/avatar.png"
      />

      <div className="container">
        <HeroBanner
          image="/assets/bannerjudul.png"
          title="Revolusi Pembelajaran: Temukan Ilmu Baru Melalui Platform Video Interaktif"
          description="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman anda"
          buttonText="Temukan Video Course untuk Dipelajari"
        />

        <CourseSection
          title="Koleksi Video Pembelajaran Unggulan"
          subtitle="Jelajahi Dunia Pengetahuan Melalui Pilihan Kamu!"
          categories={courseCategories}
          courses={videos}
          loading={loading}
          error={error}
          actionError={actionError}
          saving={saving}
          onRetry={refetch}
          onAdd={addVideo}
          onUpdate={editVideo}
          onDelete={removeVideo}
        />

        <HeroBanner
          image="/assets/bannercta.png"
          title="Mau Belajar Lebih Banyak?"
          description="Dapatkan info terkini seputar course terbaru, tips belajar, dan program eksklusif langsung ke email kamu."
          headingLevel="h2"
        >
          <NewsletterForm />
        </HeroBanner>
      </div>

      <Footer
        logo="/assets/logo.png"
        description="Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!"
        address="Jl. Usman Effendi No. 50 Lowokwaru, Malang"
        phone="+62-877-7123-1234"
        linkGroups={footerLinkGroups}
        socials={socials}
      />
    </>
  );
}

export default Homepage;
