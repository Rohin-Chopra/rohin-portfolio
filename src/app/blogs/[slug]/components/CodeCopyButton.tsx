import { FaCopy } from "react-icons/fa";

type Props = {
  onClick: () => void;
};

export const CodeCopyButton = ({ onClick }: Props) => {
  return (
    <div className="absolute right-0 pl-2 pr-4">
      <FaCopy
        onClick={onClick}
        className="cursor-pointer text-xl hover:text-slate-400"
      />
    </div>
  );
};
