import React from "react";
import { IconContext } from "react-icons";

type IconProps = {
  icon: React.ReactNode;
  color?: string;
  size?: string;
};

const Icon: React.FC<IconProps> = ({
  icon,
  color = "var(--color-black)",
  size,
}) => {
  return (
    <IconContext.Provider value={{ color, size }}>{icon}</IconContext.Provider>
  );
};

export default Icon;
