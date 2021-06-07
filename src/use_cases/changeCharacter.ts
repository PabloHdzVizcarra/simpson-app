import { ServiceWebApi } from "../service/ServiceWebApi";
import { Character } from "../types/Character";
import { SimpsonAPI } from "../web_api/simpson/SimpsonAPI";

class ChangeCharacter {
  private serviceApi: ServiceWebApi;


  constructor(serviceApi: ServiceWebApi) {
    this.serviceApi = serviceApi;
  }

  public async changeCharacter(): Promise<Character> {
    return await this.serviceApi.getCharacter();
  }
}

const useCaseChangeCharacter = new ChangeCharacter(new ServiceWebApi(new SimpsonAPI()));

export { useCaseChangeCharacter };
