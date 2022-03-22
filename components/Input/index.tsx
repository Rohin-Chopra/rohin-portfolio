import classNames from "classnames";
import { FC, InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  isError?: boolean;
  register: UseFormRegister<any>;
  name: string;
};

const Input: FC<Props> = ({
  className = "",
  register,
  name,
  isError,
  ...rest
}: Props) => {
  return (
    <input
      className={classNames({
        "bg-darkGray focus:outline-none focus:border focus:border-primary py-2 px-2 w-full transition-colors":
          true,
        [className]: true,
        "border border-danger": isError,
      })}
      {...rest}
      {...register(name)}
    />
  );
};

export default Input;
