import { Character } from "../../types/Character";

interface ImplementationApi {
  get(): Promise<Character>
}

export type { ImplementationApi };
