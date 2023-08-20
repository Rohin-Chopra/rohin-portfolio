import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

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
