import { Character } from "../types/Character";
import { CallAPI } from "../service/call_api/CallAPI";

class getSimpsonCharacter {
  service: CallAPI;

  constructor(service: CallAPI) {
    this.service = service;
  }

  public async character(): Promise<Character> {
    const data = await this.service.get()
    if (!data) throw new Error("No found simpson character")
    return data[0]
  }
}

export { getSimpsonCharacter };
