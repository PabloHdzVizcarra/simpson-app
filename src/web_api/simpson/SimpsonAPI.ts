import { Character } from "../../types/Character";
import { ImplementationApi } from "../shared/ImplementationApi";

class SimpsonAPI implements ImplementationApi{
  protected readonly url: string = "https://thesimpsonsquoteapi.glitch.me/quotes";

  public async get(): Promise<Character> {
    try {
      const response = await fetch(this.url);
      const data = await response.json();
      return data[0];
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

export { SimpsonAPI };
