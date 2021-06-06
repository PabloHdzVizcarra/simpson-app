import { Simpson } from "../types/Simpson";

class SimpsonAPI {
  protected readonly url: string = "https://thesimpsonsquoteapi.glitch.me/quotes";

  public async get(): Promise<Simpson[] | void> {
    try {
      const response = await fetch(this.url);
      return await response.json();
    } catch (e) {
      throw new Error(e.toString());
    }
  }
}

export default SimpsonAPI;
