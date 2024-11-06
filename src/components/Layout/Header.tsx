import React from "react";
import AppContainer from "../AppContainer";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gray-800 text-orange-500 py-4">
      <AppContainer>
        <div className="container mx-auto flex justify-center">
          <Image
            src="/img/logo.png"
            className="aspect-[256/88]"
            alt="logo"
            width={256}
            height={88}
            priority
          />
        </div>
      </AppContainer>
    </header>
  );
};

export default Header;
