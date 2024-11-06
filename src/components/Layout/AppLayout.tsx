import React, { ReactNode } from "react";
import Header from "./Header";
import AppContainer from "../AppContainer";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      <main className="bg-gray-700 min-h-[100vh]">
        <AppContainer>{children}</AppContainer>
      </main>
    </>
  );
};

export default AppLayout;
