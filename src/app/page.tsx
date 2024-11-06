import { getCharacter } from "@/services/character";
import React from "react";
import HomeClient from "./client-pages/Home/HomeClient";

const Home = async () => {
  const characters = await getCharacter();

  return <HomeClient characterResult={characters.data} />;
};

export default Home;
