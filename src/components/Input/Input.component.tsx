import React, { type DetailedHTMLProps, type InputHTMLAttributes } from "react";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  icon?: React.ReactNode;
};

const Input: React.FC<InputProps> = (props) => {
  const { icon, ...inputProps } = props;
  return (
    <div className="flex items-center gap-1 rounded-full bg-white px-1">
      {icon}
      <input {...inputProps} />
    </div>
  );
};
