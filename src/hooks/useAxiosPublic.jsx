import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://task-forge-server-phi.vercel.app/",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
