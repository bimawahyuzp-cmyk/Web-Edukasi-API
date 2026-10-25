import api from "./axiosInstance";

const ENDPOINT = "/videos";

// GET semua video
export const getVideos = async () => {
  const { data } = await api.get(ENDPOINT);
  return data;
};

// ADD video baru. payload: { title, thumbnail, category }
export const createVideo = async (payload) => {
  const { data } = await api.post(ENDPOINT, payload);
  return data;
};

// UPDATE video berdasarkan id
export const updateVideo = async (id, payload) => {
  const { data } = await api.put(`${ENDPOINT}/${id}`, payload);
  return data;
};

// DELETE video berdasarkan id
export const deleteVideo = async (id) => {
  await api.delete(`${ENDPOINT}/${id}`);
  return id;
};
