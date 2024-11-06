"use client";
import { Character, CharacterResult } from "@/model/character";
import React, { useState } from "react";
import CharacterList from "./CharacterList";

interface HomeClientProps {
  characterResult: CharacterResult;
}

const HomeClient = ({ characterResult }: HomeClientProps) => {
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [genderFilter, setGenderFilter] = useState<string | null>(null);

  const filteredCharacters = characterResult.results.filter(
    (character: Character) => {
      return (
        (!statusFilter || character.status === statusFilter) &&
        (!genderFilter || character.gender === genderFilter)
      );
    }
  );

  return (
    <>
      <div
        id="filter-panel"
        className="flex flex-col md:flex-row gap-[10px] md:gap-[30px]"
      >
        <select
          className="w-full"
          onChange={(e) => setStatusFilter(e.target.value || null)}
        >
          <option value="">Status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>

        <select
          className="w-full"
          onChange={(e) => setGenderFilter(e.target.value || null)}
        >
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <CharacterList characterData={filteredCharacters} />
    </>
  );
};

export default HomeClient;
