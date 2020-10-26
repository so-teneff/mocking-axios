import axios from "axios";

export const createAuthenticatedInstance = (
  ...args: Parameters<typeof axios.create>
) => {
  return axios.create(...args);
};

export default axios;
