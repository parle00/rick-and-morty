import { Character, Status } from "@/model/character";
import Image from "next/image";
import React from "react";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div className="bg-[#3c3e44] flex flex-col md:flex-row rounded-[9px] cursor-pointer gap-[15px] p-[20px] w-fit md:w-full m-auto md:p-0">
      <div className="">
        <Image
          src={character.image}
          alt={character.name}
          width={229}
          height={220}
          className="aspect-[1/1] m-auto md:rounded-l-[8px] md:max-w-[300px] md:max-h-[500px]"
        />
      </div>
      <div className="flex flex-col justify-between py-[10px] pl-[20px] md:pl-0 m-auto md:m-0">
        <div className="flex flex-col">
          <span className="text-white hover:text-orange-500  text-[12px] md:text-[14px]">
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
        <div className="flex flex-col text-[12px] md:text-[14px]">
          <span>Last known location:</span>
          <div className="text-white hover:text-orange-500">
            <span>{character.location.name}</span>
          </div>
        </div>
        <div className="flex flex-col  text-[12px] md:text-[14px]">
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
