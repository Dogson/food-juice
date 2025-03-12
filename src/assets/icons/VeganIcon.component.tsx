import React from "react";

type SvgProps = {
  className?: string;
};

const VeganIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8q6 0 6-6-6 0-6 6" />
    <path d="M17.41 3.59a10 10 0 1 0 3 3" />
    <path d="M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" />
  </svg>
);

export default VeganIcon;
