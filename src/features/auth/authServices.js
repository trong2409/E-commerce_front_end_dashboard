import { MyAxios } from "../../utils/axiosconfig";

const login = async (user) => {
  const response = await MyAxios.post(`user/admin-login`, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
const getOrders = async () => {
  const response = await MyAxios.get(`user/getallorders`);
  return response.data;
};
const getOrder = async (id) => {
  const response = await MyAxios.post(`user/getorderbyuser/${id}`);

  return response.data;
};

const authService = {
  login,
  getOrders,
  getOrder,
};

export default authService;
