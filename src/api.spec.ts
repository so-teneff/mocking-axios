import api from "./api";
import axios, { AxiosResponse } from "axios";

jest.mock("axios");

const { get } = axios as jest.Mocked<typeof import("axios").default>;

describe("api", () => {
  describe("makeSomeReq", () => {
    let result: AxiosResponse<string>;
    beforeAll(async () => {
      get.mockResolvedValue({
        key: "value",
      });
      result = await api.makeSomeReq();
    });

    it("should have created an axios instance", () => {
      expect(axios.create).toHaveBeenCalledWith({
        baseURL: "http://example.com:80/main",
      });
    });

    it("should return the mock data", () => {
      expect(result).toEqual({
        key: "value",
      });
    });

    it("should call client.get", () => {
      expect(axios.get).toHaveBeenCalledWith("/path");
    });
  });
});
