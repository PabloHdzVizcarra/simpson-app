import { ServiceWebApi } from "../service/ServiceWebApi";
import { SimpsonAPI } from "../web_api/simpson/SimpsonAPI";
import { Character } from "../types/Character";

class GetCharacter {
  private serviceApi: ServiceWebApi;

  constructor(serviceApi: ServiceWebApi) {
    this.serviceApi = serviceApi;
  }

  public async create(): Promise<Character> {
    return this.serviceApi.getCharacter();
  }
}

const useCaseGetCharacter = new GetCharacter(new ServiceWebApi(new SimpsonAPI()));

export { useCaseGetCharacter };
