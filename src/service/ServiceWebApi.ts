import { ImplementationApi } from "../web_api/shared/ImplementationApi";
import { Character } from "../types/Character";

class ServiceWebApi {
  private serviceApi: ImplementationApi;

  constructor(serviceApi: ImplementationApi) {
    this.serviceApi = serviceApi;
  }

  public async getCharacter(): Promise<Character> {
    return await this.serviceApi.get();
  }
}

export { ServiceWebApi };
