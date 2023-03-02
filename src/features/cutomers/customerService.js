import { MyAxios } from "../../utils/axiosconfig";

const getUsers = async () => {
  const response = await MyAxios.get(`user/all-users`);
  return response.data;
};

const customerService = {
  getUsers,
};

export default customerService;
