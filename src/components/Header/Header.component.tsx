import React, { useEffect, useState } from "react";
import classNames from "classnames";

export type HeaderProps = {
  small?: boolean;
};

const Header: React.FC<HeaderProps> = ({ small }) => {
  return (
    <div
      className={classNames(
        `duration 200 z-1 flex flex-col justify-center border-b-1
        border-cinnabar bg-gambodge transition ease-in-out`,
        small ? "px-7 py-5" : "pt-12 pb-8 pl-8",
      )}
    >
      <a
        className={classNames(
          "duration 200 font-title transition ease-in-out",
          small ? "text-2xl" : "text-5xl",
        )}
        href={"/"}
      >
        Miam-Miam
      </a>
      {!small && (
        <span className="font-subtitle text-lg font-semibold text-cinnabar">
          Qu'est-ce qu'on mange ?
        </span>
      )}
    </div>
  );
};

export default Header;
