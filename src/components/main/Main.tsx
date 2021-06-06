import React from "react";
import { Character } from "../../types/Character";

function Main() {
  const [character, setCharacter] = React.useState<Character>();
  console.log(character);
  console.log(setCharacter);

  return (
      <main className="container d-flex">

      </main>
  );
}

export default Main;
