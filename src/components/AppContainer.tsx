import React, { ReactNode } from "react";

interface AppContainerProps {
  children?: ReactNode;
  classNameWrapper?: string;
  classNameSubWrapper?: string;
}

const AppContainer = ({
  children,
  classNameWrapper,
  classNameSubWrapper,
}: AppContainerProps) => {
  return (
    <div className={`w-full px-[20px] py-[10px] ${classNameWrapper}`}>
      <div className={`max-w-[1920px] w-full m-auto ${classNameSubWrapper}`}>
        {children}
      </div>
    </div>
  );
};

export default AppContainer;
