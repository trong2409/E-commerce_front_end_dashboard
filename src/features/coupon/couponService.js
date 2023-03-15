import { MyAxios } from "../../utils/axiosconfig";
const getCoupons = async () => {
  const response = await MyAxios.get(`coupon/`);

  return response.data;
};

const createCoupons = async (coupon) => {
  const response = await MyAxios.post(`coupon/`, coupon);

  return response.data;
};
const updateCoupon = async (coupon) => {
  const response = await MyAxios.put(`coupon/${coupon.id}`, {
    name: coupon.couponData.name,
    expiry: coupon.couponData.expiry,
    discount: coupon.couponData.discount,
  });

  return response.data;
};
const getCoupon = async (id) => {
  const response = await MyAxios.get(`coupon/${id}`);

  return response.data;
};

const deleteCoupon = async (id) => {
  const response = await MyAxios.delete(`coupon/${id}`);

  return response.data;
};
const couponService = {
  getCoupons,
  createCoupons,
  deleteCoupon,
  getCoupon,
  updateCoupon,
};

export default couponService;
