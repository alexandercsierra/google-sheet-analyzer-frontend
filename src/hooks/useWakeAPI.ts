import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const useWakeAPI = () => {
  axios
    .get(BASE_URL)
    .then((response) => console.log({ response }))
    .catch((err) => console.log({ err }));
};

export default useWakeAPI;
