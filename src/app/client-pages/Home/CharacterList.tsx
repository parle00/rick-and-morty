import React from "react";

import { Character } from "@/model/character";
import CharacterCard from "./CharacterCard";

interface CharacterListProps {
  characterData: Character[];
}

const CharacterList = ({ characterData }: CharacterListProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[30px] pt-[20px] ">
      {characterData.map((character: Character, index: number) => {
        return <CharacterCard key={index} character={character} />;
      })}
    </div>
  );
};

export default CharacterList;
