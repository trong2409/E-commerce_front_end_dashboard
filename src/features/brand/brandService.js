import { MyAxios } from "../../utils/axiosconfig";


const getBrands = async () => {
  const response = await MyAxios.get(`brand/`);

  return response.data;
};

const createBrand = async (brand) => {
  const response = await MyAxios.post(`brand/`, brand);
  return response.data;
};
const updateBrand = async (brand) => {
  const response = await MyAxios.put(
    `brand/${brand.id}`,
    { title: brand.brandData.title }
  );

  return response.data;
};
const getBrand = async (id) => {
  const response = await MyAxios.get(`brand/${id}`);

  return response.data;
};

const deleteBrand = async (id) => {
  const response = await MyAxios.delete(`brand/${id}`);
  return response.data;
};

const brandService = {
  getBrands,
  createBrand,
  getBrand,
  updateBrand,
  deleteBrand,
};

export default brandService;
