import SimpsonAPI from "../simpsonAPI";
import { Character } from "../../types/Character";

interface ICallAPI {
  get(): Promise<Character[] | void>
}

class CallAPI implements ICallAPI{
  protected serviceAPI: SimpsonAPI;

  constructor(simpsonService: SimpsonAPI) {
    this.serviceAPI = simpsonService;
  }

  public async get(): Promise<Character[] | void> {
    return this.serviceAPI.get();
  }

}

export { CallAPI };
