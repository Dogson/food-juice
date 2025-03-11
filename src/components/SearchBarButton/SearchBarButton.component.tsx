import React from "react";
import SearchIcon from "../../assets/icons/SearchIcon.component.tsx";

type SearchBarButtonProps = {
  onClick: () => void;
};

const SearchBarButton: React.FC<SearchBarButtonProps> = ({ onClick }) => {
  return (
    <button
      className="flex h-9 w-full items-center gap-3 rounded-full bg-white px-3
        shadow-md"
    >
      <SearchIcon className="h-5 w-5 stroke-gambodge" />
      <span className="text-xs text-gambodge">Rechercher une recette</span>
    </button>
  );
};

export default SearchBarButton;
