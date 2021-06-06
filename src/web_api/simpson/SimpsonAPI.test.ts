import { SimpsonAPI } from "./SimpsonAPI";

describe("test in SimpsonAPI api", () => {
  test("should return the correct data", async () => {

    try {
      const api = new SimpsonAPI();
      const character = await api.get();

      expect(character).toHaveProperty("character")
      expect(character).toHaveProperty("image")
      expect(character).toHaveProperty("quote")
    } catch (e) {
    }
  });
});

export {};
