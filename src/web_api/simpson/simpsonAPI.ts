import { Character } from "../../types/Character";

class SimpsonAPI {
  protected readonly url: string = "https://thesimpsonsquoteapi.glitch.me/quotes";

  public async get(): Promise<Character> {
    try {
      const response = await fetch(this.url, {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      });
      return await response.json();
    } catch (e) {
      throw new Error(e.toString());
    }
  }
}

export default SimpsonAPI;
