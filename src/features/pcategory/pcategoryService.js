import { MyAxios } from "../../utils/axiosconfig";

const getProductCategories = async () => {
  const response = await MyAxios.get(`category/`);

  return response.data;
};
const createCategory = async (category) => {
  const response = await MyAxios.post(`category/`, category);

  return response.data;
};

const getProductCategory = async (id) => {
  const response = await MyAxios.get(`category/${id}`);

  return response.data;
};

const deleteProductCategory = async (id) => {
  const response = await MyAxios.delete(`category/${id}`);

  return response.data;
};
const updateProductCategory = async (category) => {
  const response = await MyAxios.put(`category/${category.id}`, {
    title: category.pCatData.title,
  });

  return response.data;
};
const pCategoryService = {
  getProductCategories,
  createCategory,
  getProductCategory,
  deleteProductCategory,
  updateProductCategory,
};

export default pCategoryService;
