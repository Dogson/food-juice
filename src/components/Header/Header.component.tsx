import React, { useEffect, useState } from "react";
import classNames from "classnames";

export type HeaderProps = {
  small?: boolean;
};

const Header: React.FC<HeaderProps> = ({ small }) => {
  const [hello, setHello] = useState(false);

  useEffect(() => {
    console.log("heklo");
  }, []);

  return (
    <div
      className={classNames(
        `duration 200 z-1 flex flex-col justify-center border-b-1
        border-cinnabar bg-gambodge transition ease-in-out`,
        small ? "p-5" : "pt-12 pb-8 pl-8",
      )}
    >
      <span
        className={classNames(
          "duration 200 font-title transition ease-in-out",
          small ? "text-2xl" : "text-5xl",
        )}
      >
        Miam
      </span>
      {!small && (
        <span
          className="font-subtitle text-lg font-semibold tracking-wider
            text-cinnabar"
        >
          Qu'est-ce qu'on mange ?
        </span>
      )}
    </div>
  );
};

export default Header;
