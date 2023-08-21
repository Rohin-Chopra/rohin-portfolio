import classNames from "classnames";
import type { InputHTMLAttributes } from "react";
import type { FieldPath, FieldValues, UseFormRegister } from "react-hook-form";

type Props<TFieldValues extends FieldValues> =
  InputHTMLAttributes<HTMLInputElement> & {
    isError?: boolean;
    register: UseFormRegister<TFieldValues>;
    name: FieldPath<TFieldValues>;
  };

const Input = <TFieldValues extends FieldValues>({
  className = "",
  register,
  name,
  isError,
  ...rest
}: Props<TFieldValues>) => {
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

export { Input };
