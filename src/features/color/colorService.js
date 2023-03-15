import { MyAxios } from "../../utils/axiosconfig";

const getColors = async () => {
  const response = await MyAxios.get(`color/`);

  return response.data;
};
const createColor = async (color) => {
  const response = await MyAxios.post(`color/`, color);

  return response.data;
};

const updateColor = async (color) => {
  const response = await MyAxios.put(
    `color/${color.id}`,
    { title: color.colorData.title }
  );

  return response.data;
};
const getColor = async (id) => {
  const response = await MyAxios.get(`color/${id}`);

  return response.data;
};

const deleteColor = async (id) => {
  const response = await MyAxios.delete(`color/${id}`);

  return response.data;
};
const colorService = {
  getColors,
  createColor,
  updateColor,
  getColor,
  deleteColor,
};

export default colorService;
