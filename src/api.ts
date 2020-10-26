import axios from "axios";
import { createAuthenticatedInstance } from "./axios.utils";

const client = createAuthenticatedInstance({
  baseURL: "http://example.com:80/main",
});

export default {
  makeSomeReq: () => client.get<string>("/path"),
};
