import axios from "axios";

const client = axios.create({
  baseURL: "http://example.com:80/main"
});

export default {
  makeSomeReq: () => client.get("/path")
};
