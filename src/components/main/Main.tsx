import React, { useEffect, useState } from "react";
import { Character } from "../../types/Character";
import { getSimpsonCharacter } from "../../use_cases/getSimpsonCharacter";
import { CallAPI } from "../../service/call_api/CallAPI";
import SimpsonAPI from "../../service/simpsonAPI";

function Main() {
  const [data, setData] = useState<Character>();
  const getCharacter = new getSimpsonCharacter(new CallAPI(new SimpsonAPI()));

  useEffect(() => {
    getCharacter.character()
        .then(data => setData(data))
  }, [getCharacter]);


  return (
      <main className="container d-flex">

      </main>
  );
}

export default Main;
