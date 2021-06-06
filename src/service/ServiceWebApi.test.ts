import { ServiceWebApi } from "./ServiceWebApi";
import { SimpsonAPI } from "../web_api/simpson/SimpsonAPI";

test("should return the correct data", async () => {
  const service = new ServiceWebApi(new SimpsonAPI());
  const character = await service.getCharacter();

  expect(character).toHaveProperty("character")
  expect(character).toHaveProperty("image")
  expect(character).toHaveProperty("quote")
})

export {}
