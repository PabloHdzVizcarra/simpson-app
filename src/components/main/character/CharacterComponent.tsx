import React from "react";

type CharacterProps = {
  quote: string
  image: string
  char: string
}

function CharacterComponent({ char, image, quote }: CharacterProps) {
  return (
      <div className="d-flex p-4 flex-column justify-content-center">
        <h2 className="text-center">{char}</h2>
        <img src={image} alt={char} className="image-fluid rounded mx-auto bg-light p-4"/>
        <p className="fs-5 m-2 text-center">{quote}</p>
      </div>
  );
}

export default CharacterComponent;
