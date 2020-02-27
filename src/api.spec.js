import api from "./api";
import axios from "axios";

describe("api", () => {
  describe("makeSomeReq", () => {
    let result;
    beforeAll(async () => {
      jest.clearAllMocks();
      axios.get.mockResolvedValue({
        key: "value"
      });
      result = await api.makeSomeReq();
    });

    it("should return the mock data", () => {
      expect(result).toEqual({
        key: "value"
      });
    });

    it("should call client.get", () => {
      expect(axios.get).toHaveBeenCalledWith("/path");
    });
  });
});
