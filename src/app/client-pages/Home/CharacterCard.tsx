import { Character, Status } from "@/model/character";
import Image from "next/image";
import React from "react";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div className="bg-[#3c3e44] flex flex-col md:flex-row rounded-[9px] cursor-pointer gap-[15px]">
      <div>
        <Image
          src={character.image}
          alt={character.name}
          width={229}
          height={220}
          className="aspect-[1/1] rounded-l-[8px] md:min-w-[229px] md:min-h-[220px]"
        />
      </div>
      <div className="flex flex-col justify-between py-[10px] pl-[20px] md:pl-0">
        <div className="flex flex-col">
          <span className="text-white hover:text-orange-500">
            {character.name}
          </span>
          <div className="flex flex-row items-center gap-[10px]">
            <div
              className={`w-[15px] h-[15px] rounded-[50%] ${
                character.status.includes(Status.ALIVE)
                  ? "bg-green-700"
                  : character.status.includes(Status.DEAD)
                  ? "bg-red-700"
                  : "bg-gray-500"
              }`}
            />
            <span>{`${character.status} - ${character.species}`}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span>Last known location:</span>
          <div className="text-white hover:text-orange-500">
            <span>{character.location.name}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span>Gender:</span>
          <div className="flex flex-row items-center gap-[10px]">
            <span className="text-white hover:text-orange-500">
              {character.gender}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
