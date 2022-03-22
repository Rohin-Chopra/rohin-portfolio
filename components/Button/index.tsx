import { ButtonHTMLAttributes } from "react";

enum Variant {
  PRIMARY,
  SECONDARY,
  BASE,
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const Variants = {
  [Variant.PRIMARY]: "bg-primary text-white",
  [Variant.SECONDARY]: "bg-secondary text-white",
  [Variant.BASE]: "",
};

const Button = ({
  children,
  className,
  variant = Variant.BASE,
  ...rest
}: Props) => {
  return (
    <button
      {...rest}
      className={`px-4 py-2 cursor-pointer rounded border-solid shadow ${Variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

Button.Variants = Variant;

export default Button;
