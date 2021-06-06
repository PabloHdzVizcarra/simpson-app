import React, { useEffect } from "react";
import { Character } from "../../types/Character";
import { useCaseGetCharacter } from "../../use_cases/GetCharacter";

function Main() {
  const [character, setCharacter] = React.useState<Character>();

  useEffect(() => {
    useCaseGetCharacter
    .create()
        .then(setCharacter)
        .catch(console.log)
  }, [])

  return (
      <main className="container d-flex">
      </main>
  );
}

export default Main;
