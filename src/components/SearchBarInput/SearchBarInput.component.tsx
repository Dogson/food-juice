import React from "react";
import SearchIcon from "../../assets/icons/SearchIcon.component.tsx";
import { IoCloseCircleOutline } from "react-icons/io5";
import Icon from "../Icon/Icon.component.tsx";

type SearchBarInputProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBarInput: React.FC<SearchBarInputProps> = ({ value, onChange }) => {
  return (
    <div
      className="flex h-9 flex-1 items-center gap-3 rounded-full bg-white px-3
        shadow-md"
    >
      <SearchIcon className="h-5 w-5 stroke-gambodge" />
      <input
        className="h-full flex-1 text-xs outline-none placeholder:text-gambodge
          placeholder:italic placeholder:opacity-80"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={"Gougères, Végan, Végé, Dessert..."}
      />
      {value && (
        <button onClick={() => onChange("")}>
          <Icon
            icon={<IoCloseCircleOutline />}
            color="var(--color-gambodge)"
            size="1.3em"
          />
        </button>
      )}
    </div>
  );
};

export default SearchBarInput;
