import React, { useEffect } from "react";
import CharacterComponent from "./character/CharacterComponent";
import { useCaseGetCharacter } from "../../use_cases/GetCharacter";
import { Character } from "../../types/Character";
import { useCaseChangeCharacter } from "../../use_cases/changeCharacter";

function Main() {
  const [character, setCharacter] = React.useState<Character>();

  async function handleChange() {
    const character = await useCaseChangeCharacter.changeCharacter();
    setCharacter(character);
  }

  useEffect(() => {
    useCaseGetCharacter.create().then(setCharacter).catch(console.log);
  }, []);

  return (
      <main className="container d-flex justify-content-center flex-column">
        {character
            ? <CharacterComponent
                key={character.character.length}
                image={character.image}
                char={character.character}
                quote={character.quote}
            />
            : null
        }
        <div className="d-grip mx-auto pb-4">
          <button
              className="btn btn-primary d-flex"
              onClick={handleChange}
          >
            Change
          </button>
        </div>
      </main>
  );
}

export default Main;
