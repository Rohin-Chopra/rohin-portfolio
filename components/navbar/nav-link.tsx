import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<any> & {
  href: string;
  className?: string;
  activeClassName?: string;
};

const NavLink = ({
  href,
  children,
  className = "",
  activeClassName = "",
  ...rest
}: PropsWithChildren<Props>) => {
  const { pathname } = useRouter();

  return (
    <Link
      href={href}
      className={classNames({
        [className]: true,
        [activeClassName]: pathname === href,
      })}
      {...rest}
    >
      {children}
    </Link>
  );
};

export { NavLink };
