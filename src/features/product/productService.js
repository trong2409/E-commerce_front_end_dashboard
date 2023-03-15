import { MyAxios } from "../../utils/axiosconfig";
const getProducts = async () => {
  const response = await MyAxios.get(`product/`);

  return response.data;
};
const getProduct = async (id) => {
  const response = await MyAxios.get(`product/${id}`);
  return response.data;
};
const createProduct = async (product) => {
  const response = await MyAxios.post(`product/`, product);

  return response.data;
};
const deleteProduct = async (id) => {
  const response = await MyAxios.delete(`product/${id}`);
  return response.data;
};

const productService = {
  getProducts,
  createProduct,
  getProduct,
  deleteProduct,
};

export default productService;
