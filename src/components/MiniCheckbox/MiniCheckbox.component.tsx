import Icon from "../Icon/Icon.component.tsx";
import { FaCheck } from "react-icons/fa";

type MiniCheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const MiniCheckbox = ({ checked, onChange }: MiniCheckboxProps) => {
  return (
    <div
      className={`flex h-3 w-3 cursor-pointer items-center justify-center
        rounded-full border-2 border-black
        ${checked ? "bg-black" : "bg-gambodge"}`}
      onClick={() => onChange(!checked)}
    >
      {checked && <Icon icon={<FaCheck />} color="var(--color-gambodge)" />}
    </div>
  );
};

export default MiniCheckbox;
