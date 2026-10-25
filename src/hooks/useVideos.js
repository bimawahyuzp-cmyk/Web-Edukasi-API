import { useCallback, useEffect, useState } from "react";
import {
  getVideos,
  createVideo,
  updateVideo,
  deleteVideo,
} from "../services/api/videoApi";

/**
 * Custom hook: semua logika data video (GET, ADD, UPDATE, DELETE)
 * dipisah dari komponen UI.
 */
function useVideos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // error saat memuat data
  const [actionError, setActionError] = useState(null); // error saat tambah/edit/hapus
  const [saving, setSaving] = useState(false);

  const fetchVideos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      setVideos(await getVideos());
    } catch {
      setError("Data video gagal dimuat. Cek VITE_API_URL di file .env, lalu coba lagi.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  const addVideo = async (payload) => {
    setSaving(true);
    setActionError(null);
    try {
      const created = await createVideo(payload);
      setVideos((prev) => [...prev, created]);
      return true;
    } catch {
      setActionError("Video gagal ditambahkan. Coba lagi.");
      return false;
    } finally {
      setSaving(false);
    }
  };

  const editVideo = async (id, payload) => {
    setSaving(true);
    setActionError(null);
    try {
      const updated = await updateVideo(id, payload);
      setVideos((prev) => prev.map((v) => (v.id === id ? updated : v)));
      return true;
    } catch {
      setActionError("Perubahan gagal disimpan. Coba lagi.");
      return false;
    } finally {
      setSaving(false);
    }
  };

  const removeVideo = async (id) => {
    setActionError(null);
    try {
      await deleteVideo(id);
      setVideos((prev) => prev.filter((v) => v.id !== id));
    } catch {
      setActionError("Video gagal dihapus. Coba lagi.");
    }
  };

  return {
    videos,
    loading,
    error,
    actionError,
    saving,
    refetch: fetchVideos,
    addVideo,
    editVideo,
    removeVideo,
  };
}

export default useVideos;
