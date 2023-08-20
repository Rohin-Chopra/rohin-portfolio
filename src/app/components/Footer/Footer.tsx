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
}: Props) => (
  <button
    {...rest}
    className={`cursor-pointer rounded border-solid px-4 py-2 shadow ${Variants[variant]} ${className}`}
  >
    {children}
  </button>
);

Button.Variants = Variant;

export { Button };
