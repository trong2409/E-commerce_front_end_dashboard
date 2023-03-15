import { MyAxios } from "../../utils/axiosconfig";
const getEnquiries = async () => {
  const response = await MyAxios.get(`enquiry/`);
  return response.data;
};
const deleteEnquiry = async (id) => {
  const response = await MyAxios.delete(`enquiry/${id}`);
  return response.data;
};
const getEnquiry = async (id) => {
  const response = await MyAxios.get(`enquiry/${id}`);
  return response.data;
};
const udpateEnquiry = async (enq) => {
  const response = await MyAxios.put(`enquiry/${enq.id}`, {
    status: enq.enqData,
  });
  return response.data;
};
const enquiryService = {
  getEnquiries,
  deleteEnquiry,
  getEnquiry,
  udpateEnquiry,
};

export default enquiryService;
