import SimpsonAPI from "../simpsonAPI";
import { Simpson } from "../../types/Simpson";

interface ICallAPI {
  get(): Promise<Simpson[] | void>
}

class CallAPI implements ICallAPI{
  protected simpsonService: SimpsonAPI;

  constructor(simpsonService: SimpsonAPI) {
    this.simpsonService = simpsonService;
  }

  public async get(): Promise< Simpson[] | void> {
    return this.simpsonService.get();
  }

}

export { CallAPI };
