import React, { useEffect } from "react";
import CharacterComponent from "./character/CharacterComponent";
import { useCaseGetCharacter } from "../../use_cases/GetCharacter";
import { Character } from "../../types/Character";

function Main() {
  const [character, setCharacter] = React.useState<Character>();

  useEffect(() => {
    useCaseGetCharacter
    .create()
        .then(setCharacter)
        .catch(console.log)
  }, [])

  return (
      <main className="container d-flex justify-content-center">
        {character
            ? <CharacterComponent
                key={character.character.length}
                image={character.image}
                char={character.character}
                quote={character.quote}
            />
            : null
        }
      </main>
  );
}

export default Main;
