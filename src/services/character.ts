import { CharacterResult } from "@/model/character";
import { publicAxiosİnstance } from "./api";
import { CHARACTER } from "./const";

export const getCharacter = async () =>
  publicAxiosİnstance.get<CharacterResult>(CHARACTER);
