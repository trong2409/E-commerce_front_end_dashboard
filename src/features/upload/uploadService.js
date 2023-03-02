import { MyAxios } from "../../utils/axiosconfig";

const uploadImg = async (data) => {
  const response = await MyAxios.post(`upload/`, data);
  return response.data;
};
const deleteImg = async (id) => {
  const response = await MyAxios.delete(`upload/delete-img/${id}`);
  return response.data;
};

const uploadService = {
  uploadImg,
  deleteImg,
};

export default uploadService;
