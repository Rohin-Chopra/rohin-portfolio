import { FC, InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {};

const Input: FC<Props> = ({ className, ...rest }: Props) => {
  return (
    <input
      className={`bg-darkGray focus:outline-none focus:border focus:border-primary py-2 px-2 w-full ${className}`}
    />
  );
};

export default Input;
