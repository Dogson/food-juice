import React from "react";
import classNames from "classnames";

export type HeaderProps = {
  small?: boolean;
};

const Header: React.FC<HeaderProps> = ({ small }) => {
  return (
    <div
      className={classNames(
        "flex flex-col bg-gambodge justify-center transition duration 200 ease-in-out",
        small ? "p-5" : "pt-12 pb-8 pl-8",
      )}
    >
      <span
        className={classNames(
          "font-title transition duration 200 ease-in-out",
          small ? "text-2xl" : "text-5xl",
        )}
      >
        Miam
      </span>
      {!small && (
        <span className="text-cinnabar font-subtitle font-semibold text-lg tracking-wider">
          Qu'est-ce qu'on mange ?
        </span>
      )}
    </div>
  );
};

export default Header;
